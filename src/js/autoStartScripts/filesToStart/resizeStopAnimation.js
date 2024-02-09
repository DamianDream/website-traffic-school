
// Remove animation while resizing window
const resizeStopAnimation = () => {
    let resizeTimer;
    
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 500);
    });

}

resizeStopAnimation()
