var names = ["Василий", "Екатерина", "Игорь", "Епистафий", "Альбина", "Сергей", "Иван", "Виктория"];
var cities = ["Минск", "Москва", "Вашингтон", "Канберра"];

var arr = [], N = names.length, randName, randCity, rand;

for(var i = 0; i < N; i++){
	rand = Math.floor(Math.random() * 100);
	randName = Math.floor(Math.random() * 8);
	randCity = Math.floor(Math.random() * 4);
	arr.push({
		name: names[randName],
		city: cities[randCity],
		age: rand,
		print: function(){
			console.log(this.name + ' - ' + this.city + ' - ' + this.age);
		}
	});
}

arr.sort(function(a, b){
	return (a.age < b.age) ? 1 : -1;
});

arr.forEach(function(elem){
	elem.print();
});