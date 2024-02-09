export const setLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}

export const getLocalStorage = (key) => {
    const newObject = window.localStorage.getItem(key);
    return JSON.parse(newObject)
}

export const checkLocalStorage = (key) => {
    return (!!localStorage.getItem(key))
}

