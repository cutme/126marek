document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        document.getElementsByClassName('js-scroll').length > 0 ? window.newsTicker() : false;
        
        setTimeout(function() {
            window.carousels();
            window.anims();
            cover.remove();
        }, 250);  
    };
    
    window.addEventListener('load', init);

}, false);