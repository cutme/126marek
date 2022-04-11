import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

document.addEventListener('DOMContentLoaded',function() {
    
    window.runScroll = function(el, o) {
        
        let offsetTop = document.querySelector(el).offsetTop;
        let meta_height = document.getElementsByClassName('js-meta')[0].clientHeight;

        if (o === undefined) {
            o = 0;
        }

        let scrollTimeout;
        
        const action = function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                console.log('Scroll ended');
                window.removeEventListener('scroll', action);
                
                scroll({
                    top: offsetTop - o - document.getElementsByClassName('js-meta')[0].clientHeight,
                    behavior: "smooth",
                })
            }, 100);
        }
        
        if (window.innerWidth > 1024) {
            window.addEventListener('scroll', action);
    
            scroll({
                top: offsetTop - o - document.getElementsByClassName('js-meta')[0].clientHeight,
                behavior: "smooth",
            })
        } else {
            scroll({
                top: offsetTop - o,
                behavior: "smooth",
            })
        }
    };

    const gtt = document.querySelectorAll("[data-target]");

    if (gtt.length > 0) {
        const action = function(e) {
        	e.preventDefault() ? e.preventDefault() : e.preventDefault = false;  
            let target = e.currentTarget.dataset.target,
                offset = e.currentTarget.dataset.offset;
                
            if ( document.getElementsByClassName('js-meta')[0].classList.contains('menu-opened') ) {
                window.hideMenu();
            }
                
            document.getElementById(target.slice(1, target.length)) ? window.runScroll(target, offset) : console.log(target); 
        };

        for (let i = 0; i < gtt.length; i++) {
            gtt[i].addEventListener('click', action);
        }
    }
    
}, false);
