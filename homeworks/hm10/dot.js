var dot = {
	_x : 0,
	_y : 0 
}

dot.__defineGetter__('x', function(){
	return this._x;
});

dot.__defineGetter__('y', function(){
	return this._y;
});

dot.__defineSetter__('x', function(val){
	if(!isNaN(+val)){
		this._x = val;
	}
});

dot.__defineSetter__('y', function(val){
	if(!isNaN(+val)){
		this._y = val;
	}
});