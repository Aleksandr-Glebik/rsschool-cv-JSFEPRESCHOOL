const navPanel = document.querySelector('#navigationPanel');
const hideClass = 'header__links_hidden';


function showNavBar() {
    const cls = navPanel.classList;
    if (cls.contains(hideClass)) {
        cls.remove(hideClass);
    } else {
        cls.add(hideClass);
    }

}

navPanel.addEventListener('click', function(event) {
    const cls = navPanel.classList;
    // console.log('event.target', event.target);
    // console.log('event', event);
    if (event.target.tagName === 'A') {
        cls.add(hideClass);
    } else {
        cls.remove(hideClass);
    }
})



