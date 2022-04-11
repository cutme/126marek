import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded',function() {
    
    const activities = document.getElementsByClassName('js-activitiesSwiper')[0];

    window.activitiesCarusel = function() {
	    
	    const swiper = new Swiper(activities, {
            freeMode: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            speed: 800,
        });
    };


    window.carousels = function() {
        activities ? activitiesCarusel() : false;
    }

}, false)
