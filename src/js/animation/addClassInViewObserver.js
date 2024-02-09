// Expect selector and  class, func to add
// Usage: addClassInViewObserver('.num-anim', 'classToAdd')

export const addClassInViewObserver = (selectAll, addClass) => {

    let elements = document.querySelectorAll(selectAll);

    const observer = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach(entry => {

            entry.target.classList.toggle(addClass, entry.isIntersecting);

            // Stop observing the element "run once"
            if (entry.isIntersecting) observer.unobserve(entry.target);

        }, 
        {
            // --- Which amount of element is current visible on page
            // 0 - 0%
            // 0.5 - 50%
            // 1 - 100%
            threshold: 1,
            // --- Add margin to the bottom of the page to trigger the observer "container size"
            // rootMargin: '100px',
        })
    })

    elements.forEach(elem => observer.observe(elem));
}
