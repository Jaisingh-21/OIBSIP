document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.getElementById('main-header');

    function handleScroll() {

        if (window.scrollY > 50) {

            header.classList.add('scrolled');
        } else {

            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});