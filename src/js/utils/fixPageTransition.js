
// Remove transition issue while page loading
export const fixPageTransition = () => {
    const preload = document.querySelector("body.preload");
    
    if (!preload) {
        console.error("Failed to find preload class for 'body' tag name");
    }

    window.addEventListener("load", () => {
        document.body.classList.remove("preload");
    });

}
