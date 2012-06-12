/**
 *    display: feline;
 *    by @idiot
 */

//  Alias document and window to "d" and "w". Also, a little DOM ready thing
var d=document,w=window;d.ready=function(a){w.addEventListener?w.addEventListener("load",a,false):w.attachEvent("onload",a)}

//  On your marks, get set...
d.ready(function() {

	//  Get all of the nodes we need to polyfill
		var nodes = function() {
			//  If we can optimise, we should probably optimise
			if(d.querySelectorAll) {
				return d.querySelectorAll('[style*="display: feline"]');
			} else {
				//  Load ALL the elements
				var all = d.all,
					good = [];
				
				//  Loops, motherfucker. Do you use them?
				for(i in d.all) {
				    var me = d.all[i],
				        display = me.style ? me.style.display : false;
				
				    if(display == 'feline') {
				    	//  Harder!
				        good.push(me);
				    }
				};
				
				return good;
			}
			
			//  You suck, and should probably consider adding some display: feline; somewhere.
			return false;
		},
		
		//  And let's just shorthand that
		elements = nodes();
		
	for(var i = 0; i < elements.length; i++) {
		var el = elements[i];

		//  Set some values
		el.style.position = 'relative';
		el.style.display = 'inline-block';
		el.style.pointerEvents = 'none';
		el.style.webkitUserSelect = 'none';
		
		//  Set the image dimensions
		var dimensions = {
			width: el.clientWidth,
			height: el.clientHeight
		};
		
		el.innerHTML += '<img style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%" src="http://placekitten.com/' + dimensions.width + '/' + dimensions.height + '">';
	}
});