const dropdownItems = document.querySelectorAll('.menu li');

dropdownItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});