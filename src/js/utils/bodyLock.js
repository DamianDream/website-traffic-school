
export const lockBody = (addLockClass = "lock") => {
    document.getElementsByTagName('body')[0].classList.add(addLockClass)
}	
export const unlockBody = (addLockClass = "lock") => {
    document.getElementsByTagName('body')[0].classList.remove(addLockClass)
}	
export const toggleBodyLock = (addLockClass = "lock") => {
    document.getElementsByTagName('body')[0].classList.toggle(addLockClass)
}	
