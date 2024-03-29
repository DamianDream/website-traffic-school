import { defineConfig, loadEnv } from 'vite'
import { resolve, relative, extname } from 'path'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import handlebars from 'vite-plugin-handlebars'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import removeConsole from "vite-plugin-remove-console"
import { viteStaticCopy } from 'vite-plugin-static-copy'

// ------------ Fast Dev Config 

//  ? Build for GitHub Pages ?
const gitHubPages = false
const gitHubPagesRepository = "/website-traffic-school/"
// repository is at https://github.com/<USERNAME>/<REPO>
// f publish on github-pages we should indicate Repository name <REPO>

//  ? Build for local server test ?
const outputToLocalServer = true
//  ? Remove consoles ?
const rmConsoleLogs = false

const pathAliases = {
    root: resolve(__dirname, './'),
    projectDir: resolve(__dirname, 'dist'),
    xamppDir: resolve('/Applications/XAMPP/xamppfiles/htdocs/sites/vite/')
}

// ------------


export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    const isProduction = mode === 'production'
    const isDevelopment = mode === 'development'

    return {
        root: pathAliases.root,
        envPrefix: 'APP_',
        base: gitHubPages ? gitHubPagesRepository : './',
        resolve: {
            alias: {
                "@": resolve(__dirname, './src/assets'),
                "@scss": resolve(__dirname, './src/scss'),
                "@fonts": resolve(__dirname, './src/assets/fonts'),
                "@img": resolve(__dirname, './src/assets/images'),
                "@js": resolve(__dirname, './src/js'),
            }
        },

         // --- Bundling
        css: {
            devSourcemap: isDevelopment,
        },
        build: {
            emptyOutDir: true,
            minify: isProduction,
            cssMinify: isProduction,
            sourcemap: isDevelopment,
            outDir: pathAliases.projectDir,
            rollupOptions: {
                
                // Collect all pages from all indicated folders
                input: Object.fromEntries(
                    glob.sync(['./*.html', './pages/**/*.html']).map(file => [
                        relative(__dirname, file.slice(0, file.length - extname(file).length)),
                        fileURLToPath(new URL(file, import.meta.url))
                    ])
                )
            },
        },

        // --- Plugins
        plugins: [
            // Images Workflow
            ViteImageOptimizer({
                png: { quality: 70 },
                jpeg: { quality: 70 },
                jpg: { quality: 70 },
                webp: { lossless: true },
                avif: { lossless: true },
                cache: false,
                cacheLocation: undefined,
            }),
            {
                ...imagemin(['./src/assets/images/**/*.{jpg,png,jpeg}'], {
                    destination: './src/assets/images/',
                    plugins: [ imageminWebp({ quality: 70 }) ]
                }),
                apply: 'serve',
            },
            //  Inject HTML partials
            handlebars({
                partialDirectory: resolve(__dirname, 'src/html'),
            }),
            //  Copy files and folders
            isProduction && outputToLocalServer && viteStaticCopy({
                targets: [
                  {
                    src: pathAliases.projectDir,
                    dest: pathAliases.xamppDir,
                  }
                ]
            }),
            //  Remove consoles only for production )
            rmConsoleLogs && removeConsole()
        ]
    }
})

    