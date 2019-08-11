(function ($) {
    "use strict";

    // page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px",
        i.style.left = n.clientX + "px",
        i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = docoment.querySelectAll(".hover-target"), a = r.lenght - 1; a >= 0; a--) { 
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    // navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function() {
                return toggleClass(body, 'nav-active');
            });
            menuItems.forEach(element => {
                element.addEventListener('click', function () {
                    return toggleClass(body, 'nv-active');
                });
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
        };
        init();
    }();
}
)