document.addEventListener('DOMContentLoaded',function() {
            
    const el = document.getElementById('harmonogram');
    
    const init = function() {

        const day = el.getElementsByClassName('js-day');

        for (let i = 0; i < day.length; i++) {

            const btn = day[i].getElementsByClassName('js-showAgenda')[0];
            
            btn.addEventListener('click', function() {
                day[i].classList.add('is-agenda');
                
                setTimeout(function() {
                    day[i].classList.add('is-visible');                    
                }, 100);
            });
        }
    };
    
    el ? init() : false;

}, false);
