// Expect selector and  class, func to add
// Usage: addClassInViewObserver('.num-anim', 'classToAdd')
import { animateValue } from '@js/animation/animateValues.js';

export const addClassInViewObserver = (selectAll) => {
    let elements = document.querySelectorAll(selectAll);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateValue(entry.target, 0, +entry.target.textContent, 1000);
                }, 250)
            }

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
            // rootMargin: '600px',
        })
    })

    elements.forEach(elem => observer.observe(elem));
}
