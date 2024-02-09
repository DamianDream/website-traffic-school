export const uScrollInToView = (containerId, foo) => {
    const navigationLinks = document.querySelector(containerId);
    navigationLinks.addEventListener("click", (e) => {
        if(e.target.closest('a')) {
            const id = e.target.closest('a').dataset.link;
            const element = document.getElementById(id);
            
            if (foo) {
                foo()
            }
            
            setTimeout(()=> {
                element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }, 250)
        }
    })
}
