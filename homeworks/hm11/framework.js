var _ = {
	append: function(e, e2){
		e.appendChild(e2);
	}
	,prepend: function(e, e2){
		e.insertBefore(e2, e.firstElementChild);
	}
	,remove: function(e){
		e.remove();
	}
	,create: function(tag){
		return document.createElement(tag);
	}
	,Get: {
		byId : function(id){
			return document.getElementById(id);
		}
		,byClass: function(className){
			return document.getElementsByClassName(className);
		}
		,byTag: function(tag){
			return document.getElementsByTagName(tag);
		}
		,byName: function(name){
			return document.getElementsByName(name);
		}
		,bySelector: function(s){
			return document.querySelector(s);
		}
		,bySelectorAll: function(s){
			return document.querySelectorAll(s);
		}
	}
	,Event: {
		add: function(type, elem, func){
			typeof addEventListener == "function" ? elem.addEventListener(type, func) : elem.attachEvent('on' + type, func);
		}
		,remove: function(type, elem, func){
			typeof addEventListener == "function" ? elem.removeEventListener(type, func) : elem.detachEvent('on' + type, func);
		}
		,dispatch: function(type, elem){
			typeof addEventListener == "function" ? elem.dispatchEvent(new Event(type)) : elem.fireEvent('on' + type, new Event(type));
		}
	}
	,width : function(el){
		return el.getBoundingClientRect().width;
	}
	,height : function(el){
		return el.getBoundingClientRect().height;
	}
	,pageTop : function(el){
		return el.getBoundingClientRect().top;
	}
	,pageLeft : function(el){
		return el.getBoundingClientRect().left;
	}
	,css : function(el, prop, value = null){
		if(value !== null){
			return getComputedStyle('el').prop;
		}else{
			el.style['prop'] = value;
		}
	}
	,ajax : function(method, path, f){
		var xhr = new XMLHttpRequest();
		xhr.open(method, path, true);
		xhr.onload = function(){
			f(this.responseText);
		}
		xhr.send(null);
	}
}