export const changePageLocation = (url) => {
    try {
        window.location.href = url;
    } catch (error) {
        throw new Error("URL not provided", error)
    }
}
