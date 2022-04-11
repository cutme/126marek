import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const activities = document.getElementsByClassName('js-activitiesSwiper')[0],
          meta = document.getElementsByClassName('js-meta')[0];
    
    const activitiesAnim = function() {
        gsap.from(activities, {
            scrollTrigger: {
                trigger: activities,
                scrub: 2.2,
                start: 'top bottom',
                end: 'top center'
            },      
            xPercent: 15
        });
    }
    
    const metaAnim = function() {
        const authors = meta.getElementsByClassName('js-meta__authors')[0],
              topbar = meta.getElementsByClassName('js-topbar')[0],
              logo = meta.getElementsByClassName('js-logo')[0];

        gsap.to(topbar, {
            paddingTop: 20,
            paddingBottom: 13,
            ease: "none",
            scrollTrigger: {
                trigger: topbar,
                start: 0,
                end: "+=150px",
                scrub: true
            }
        });
        
        gsap.to(logo, {
            scale: .9,
            ease: "none",
            scrollTrigger: {
                trigger: topbar,
                start: 0,
                end: "+=150px",
                scrub: true
            }
        });
        
        gsap.to(authors, {
            paddingTop: 6,
            paddingBottom: 6,
            ease: "none",
            scrollTrigger: {
                trigger: topbar,
                start: 0,
                end: "+=150px",
                scrub: true
            }
        });
        
        gsap.to(authors.getElementsByTagName('li'), {
            paddingTop: 0,
            paddingBottom: 0,
            ease: "none",
            scrollTrigger: {
                trigger: topbar,
                start: 0,
                end: "+=150px",
                scrub: true
            }
        });
        
        gsap.to(authors.getElementsByTagName('p'), {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: topbar,
                start: 0,
                end: "+=150px",
                scrub: true
            }
        });
        
        gsap.to(authors.getElementsByTagName('img'), {
            scale: .6,
            ease: "none",
            scrollTrigger: {
                trigger: topbar,
                start: 0,
                end: "+=150px",
                scrub: 1.1
            }
        });
    }
    
    window.anims = function() {
        activities ? activitiesAnim() : false;
        meta ? metaAnim() : false;
        
        if (document.getElementsByClassName('js-fadeInChildren').length > 0) {
            gsap.utils.toArray(".js-fadeInChildren > *").forEach(function(section) {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: '-50px bottom',
                        toggleActions: "play complete complete reset",
                    },
                    opacity: 0, 
                    duration: 1,
                    y: 50
                });
            });
        }
    }
    
   

}, false)
