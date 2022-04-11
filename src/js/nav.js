import { gsap } from "gsap";
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const meta = document.getElementsByClassName('js-meta')[0],
          nav = document.getElementsByClassName('js-nav')[0],
          hamburger = document.getElementsByClassName('js-hamburger')[0],
          menu = document.getElementsByClassName('js-menu')[0];

    const init = function() {

        window.hideMenu = function() {
            document.getElementsByClassName('js-meta')[0].classList.remove('menu-opened');
            document.getElementsByClassName('js-nav')[0].classList.remove('is-visible');
            hamburger.classList.remove('is-active');
            
            document.removeEventListener('click', clickOutside);
            
            setTimeout(function() {
                document.getElementsByClassName('js-nav')[0].classList.remove('is-block');
                document.getElementsByClassName('js-meta')[0].classList.remove('is-animated');
            }, 400);
            
            enableBodyScroll(document.getElementsByClassName('js-nav')[0]);
        };

        const showMenu = function() {
            
            nav.classList.add('is-block');
            hamburger.classList.add('is-active');

            setTimeout(function() {
                meta.classList.add('menu-opened');
                nav.classList.add('is-visible');
                document.addEventListener('click', clickOutside);
                showLinks();
            }, 100);
            
            const showLinks = function() {
                gsap.utils.toArray(".js-menu").forEach(function(elem) {            
                    const blocks = elem.querySelectorAll(".js-item"),
                          tl = gsap.timeline().delay(.1).eventCallback("onComplete", function() {
                              meta.classList.add('is-animated');
                          })

                    .from(blocks, {
                        x: 50,
                        opacity: 0,
                        stagger: {
                            each: 0.1
                        }
                    });
                });
            };

            disableBodyScroll(nav);
        };


        const toggleMenu = function(e) {
            nav.classList.contains('is-visible') ? hideMenu() : showMenu();
        };

        
        hamburger.addEventListener('click', toggleMenu);
        
        const clickOutside = function(e) {
            if (!e.target.closest('.js-nav')) {
                hideMenu();
        	}
        };
        


        // Hide menu on ESC

        document.addEventListener('keydown', function(evt) {
            // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });
        
        
        const checkWindowSize = function() {
            if (window.innerWidth > 1200) {
                hideMenu();
                window.removeEventListener('resize', checkWindowSize);
            }
        };
        
        window.addEventListener('resize', checkWindowSize);
    };

    nav ? init() : false;

}, false);