var PhoneNumber = document.getElementById('phone');
var Email = document.getElementById('e-mail');
var Site = document.getElementById('web-site');
var userName = document.getElementById('userName');
var age = document.getElementById('age');
var submit = document.getElementById('submit');

var checkPhoneNumber = function(number){
	var pattern = /\+?\s?(375)[\s\-]*[\(\)]?([\d]{2})[\(\)]?[\s\-]*[\d]{1}[\s\-]*[\d]{1}[\s\-]*[\d]{1}[\s\-]*[\d]{1}[\s\-]*[\d]{1}[\s\-]*[\d]{1}[\s\-]*[\d]{1}[\s\-]*$/;
	var results = number.match(pattern);
	return results ? true : false;
}

var checkEmail = function(mail){
	var pattern = /[a-zA-Z0-9-_\.]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;
	var results = mail.match(pattern);
	return results ? true : false;
}

var checkSite = function(str){
	var pattern = /(http|https):\/\/[A-Za-z]*\.?[a-zA-Zа-яА-Я]{2,}\.[a-zA-Zа-яА-Я]*\.?[a-zA-Zа-яА-Я]{2,}/;
	var results = str.match(pattern);
	return results ? true : false;
}

var checkName = function(str){
	var pattern = /[^a-zA-ZА-Яа-я\s\-]/;
	var results = str.match(pattern);
	return results ? false : true;
}

var checkAge = function(age){
	return (+age > 90 || +age < 14) ? false : true;
}

PhoneNumber.addEventListener('input', function(){
	if(checkPhoneNumber(this.value)){
		this.setAttribute('class', 'correct');
	}else{
		this.setAttribute('class', 'incorrect');
	}
});

Email.addEventListener('input', function(){
	if(checkEmail(this.value)){
		this.setAttribute('class', 'correct');
	}else{
		this.setAttribute('class', 'incorrect');
	}
});

Site.addEventListener('input', function(){
	if(checkSite(this.value)){
		this.setAttribute('class', 'correct');
	}else{
		this.setAttribute('class', 'incorrect');
	}
});

userName.addEventListener('input', function(){
	if(checkName(this.value)){
		this.setAttribute('class', 'correct');
	}else{
		this.setAttribute('class', 'incorrect');
	}
});

age.addEventListener('input', function(){
	if(checkAge(this.value)){
		this.setAttribute('class', 'correct');
	}else{
		this.setAttribute('class', 'incorrect');
	}
});

submit.addEventListener('click', function(e){
	if(checkPhoneNumber(PhoneNumber.value) && checkEmail(Email.value) && checkSite(Site.value) && checkName(userName.value) && checkAge(age.value)){
		alert('Success');
	}else{
		alert('Error, check input data');
		e.preventDefault();
	}
});