
export const select = (...selectors) => {
    return selectors.map(selector => {
        return document.querySelector(selector)
    })
}

export const selectAll= (...selectors) => {
    return selectors.map(selector => {
        return document.querySelectorAll(selector)
    })
}

//  USAGE case 1 (one unite)
// const [element1, element2] = select('#element1', '#element1')

//  USAGE case 2 (multiply unites)
// const [elements] = selectAll('.element')
