document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar nav > ul > li > a");
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-mobile");
    const closeMenu = document.querySelector(".profile a:first-child img")

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            const parentLi = this.parentElement;
            const submenu = parentLi.querySelector("ul");
            const arrow = this.querySelector(".expand");

            if (submenu) {
                event.preventDefault();
                
                submenu.classList.toggle("open");
                if (arrow) {
                    arrow.classList.toggle("rotated");
                }
            }
        });
    });
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        menuToggle.classList.toggle("hidden");
    });
    closeMenu.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        menuToggle.classList.toggle("hidden");
    });
});