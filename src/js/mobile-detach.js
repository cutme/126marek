document.addEventListener('DOMContentLoaded',function() {

    const partners = document.getElementById('partnerzy');


	const partnersInit = function() {    	

    	let status = false,
    	    logotypes = partners.getElementsByClassName('js-logotypes')[0],
    	    ww;
  
    	const action = function(e) {
	    	ww = window.innerWidth;

	    	if (ww <= 1024) {
		    	if (status === false) {
					cutme.Helpers.detach(logotypes, document.getElementsByClassName('c-partners__logotypes--mobile')[0]);
		        	status = true;
		        }
	        } else {
		        if (status === true) {
					cutme.Helpers.detach(logotypes, document.getElementsByClassName('c-partners__logotypes--desktop')[0]);
		        	status = false;
			    }
	        }
	    };
	    
        action();
        
        window.addEventListener('resize', cutme.Helpers.debounce(() => action(), 100, false));
    };
	
	partners ? partnersInit() : false;    

}, false);
