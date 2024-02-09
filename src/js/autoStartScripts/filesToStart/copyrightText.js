// footer copyright year update
const setCopyrightActualDate = () => {
    const footerCopyrightYear = document.querySelector("[copyright-date]");
    
    if (!footerCopyrightYear) {
        console.error("Not found copyright year Node", footerCopyrightYear);
        return
    }

    const year = new Date(Date.now()).getFullYear();
    const textCopyright = year
    footerCopyrightYear.textContent = textCopyright

}

setCopyrightActualDate()
