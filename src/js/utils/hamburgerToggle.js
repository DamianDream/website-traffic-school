
export const hamburgerToggle = (selectorID) => {
    const navigationNode = document.getElementById(selectorID);

    navigationNode.addEventListener('click', () => {
        const view = navigationNode.querySelector('[navigation-view]');
        const toggleBtn = document.querySelector('[navigation-toggle]');
        const toggleIcon = document.querySelector('[navigation-toggle-icon]');

        // console.log(view, toggleBtn, toggleIcon);

        // add active class to hamburger node
        toggleIcon.classList.toggle('is-active');
        toggleBtn.classList.toggle('is-active');

        const visibility = view.getAttribute('data-visible');

        switch (visibility) {
            case 'false':
                view.setAttribute('data-visible', true);
                toggleBtn.setAttribute('aria-expanded', true);
                break;
            case 'true':
                view.setAttribute('data-visible', false);
                toggleBtn.setAttribute('aria-expanded', false);
                break;
            default:
                console.error('Error, no such case to switch');
        }
    });
};
