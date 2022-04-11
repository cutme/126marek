import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded',function() {

    window.newsTicker = function() {
        let speed = 0;
        let target = document.getElementsByClassName('js-scroll');
        
        document.documentElement.classList.contains('mobile') ? speed = 50 : speed = 50;
        
        for (let i = 0; i < target.length; i++) {
            let original_html = target[i].innerHTML;
            let new_html = "<div class='ticker-items'>" + original_html + "</div>";
    
            target[i].innerHTML = new_html;
            target[i].innerHTML += new_html;
            
            let tickerWidth = document.querySelector(".ticker-items").offsetWidth;
            let initDuration = tickerWidth / speed;
            
            gsap.to(".ticker-items", {
                duration: initDuration,
                xPercent: -100,
                ease: "none",
                repeat: -1
            });
        }
    }

}, false);
