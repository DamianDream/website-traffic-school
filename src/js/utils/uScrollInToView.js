export const uNavigationScrollInToView = (containerID, foo) => {
    const navigationLinks = document.getElementById(containerID);

    navigationLinks.addEventListener("click", (e) => {
        e.preventDefault();

        if(e.target.closest('a')) {

            const id = e.target.closest('a').dataset.link;
            const element = document.getElementById(id);

            // call fucntion
            if (foo) foo()
            
            setTimeout(()=> {
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }, 350)
        }
    })
}

export const uScrollInToView = (containerID, foo) => {
    const nodeID = document.getElementById(containerID);

    setTimeout(()=> {
        nodeID.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, 250)

}
