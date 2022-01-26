const burger = (menuSelector, burgerSelector) => {
    const menuElement = document.querySelector(menuSelector),
        burgerElement = document.querySelector(burgerSelector);

    menuElement.style.display = 'none';

    burgerElement.addEventListener('click', () => {
        if (menuElement.style.display == 'none' && window.innerWidth < 993) {
            menuElement.style.display = 'block';
        } else {
            menuElement.style.display == 'none';

        };
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            menuElement.style.display = 'none';
        }
    });
};

export default burger;