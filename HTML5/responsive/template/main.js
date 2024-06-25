var count = true

var nav = document.querySelector("nav");
document.querySelector(".nav-menu img").addEventListener('click',
    function () {
        if (count) {
            nav.style.display = 'block';
            count = false

        } else {
            nav.style.display = 'none';
            count = true

        }
    })
