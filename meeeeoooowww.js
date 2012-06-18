/**
 *    display: feline;
 *    by @idiot
 */

//  Alias document and window to "d" and "w". Also, a little DOM ready thing
var d=document,w=window;d.ready=function(a){w.addEventListener?w.addEventListener('load',a,false):w.attachEvent('onload',a)};

var classy = 'kitty-love',
	loop = function(el, callback) {
		for(var i = 0; i < el.length; i++) {
			var e = el[i];
			callback.call(e,i);
		}
		
		return el;
	};

//  On your marks, get set...
d.ready(function() {

	//  Get all of the nodes we need to polyfill
		var nodes = function() {
			//  If we can optimise, we should probably optimise
			if(d.querySelectorAll) {
				return document.querySelectorAll('[style*="display: feline"]');
			} else {
				//  Load ALL the elements
				var all = document.all,
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
		
	w.iLoveKitties = function(src) {
	
		//  Reset nodes
		elements = nodes();
	
		//  And looooooooooop
		for(var i = 0; i < elements.length; i++) {
			var el = elements[i],
				dimensions = (function(el) {
				
					//  If we've got getComputedStyle
					if(d.defaultView) {
						var style = d.defaultView.getComputedStyle(el, '');
						return [parseInt(style.getPropertyValue('width')), parseInt(style.getPropertyValue('height'))];
					}
								
					//  Otherwise, return offsetValues
					return [el.offsetWidth, el.offsetHeight];
				})(el);
						
			//  Set the image URL
			var path = src || 'http://placekitten.com/' + dimensions[0] + '/' + dimensions[1];
			
			console.log(src, dimensions);
			
			//  Set some values
			el.style.position = 'relative';
			el.style.display = 'inline-block';
			
			//  Do we already have kitties?
			if(el.innerHTML.indexOf(classy) < 0) {
				el.innerHTML += '<img class="' + classy + '" style="pointer-events: none; -webkit-user-select: none; position: absolute; display: block; background: #fff; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%" src="' + path + '">';
			} else {
				loop(el.childNodes, function() {
					if(this.nodeName == 'IMG' && this.className == classy) {
						this.style.display = 'block';
					}
				});
			}
		}
	};
	
	//  Add kitten support
	iLoveKitties();
	
	//  What's wrong with you, you sick person?
	w.iAmABadPerson = function() {
		loop(d.getElementsByClassName(classy), function() {
			this.style.display = 'none';
		});
	}
});