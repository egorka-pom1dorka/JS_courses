var person1 = {name: "Alex", age: 16};
var person2 = {name: "Ivan", age: 21};
var	person3 = {name: "Alice", age: 22};
var	person4 = {name: "Vika", age: 19};
var	person5 = {name: "Grisha", age: 18};

var roomsArr = [
	{number: 1, square: 40, floor: 1, people: [person5]}, 
	{number: 3, square: 35, floor: 2, people: [person3]},
	{number: 6, square: 60, floor: 1, people: [person2, person4]},
	];

var house = {
	rooms: roomsArr,
	addOrFirePerson: function(roomNumber, x){
		var flag = true, len;
		if(typeof(x) == 'object'){
			this.rooms.forEach(function(e){
				if(e.number == roomNumber){
					e.people.push(x);
					flag = false;
				}
			});

			if(flag){
				console.log("Error, we can't find it :(");
			}
		};

		if(typeof(x) == 'string'){
			this.rooms.forEach(function(e){
				if(e.number == roomNumber){
					len = e.people.length;
					e.people = e.people.filter(function(p){
						return p.name != x;
					});
					if(e.people.length != len){
						flag = false;
					}
				}
			});

			if(flag){
				console.log("Error, we can't find it :(");
			}
		}
	},
	getRoomEmpty: function(roomNumber){
		this.rooms.forEach(function(e){
			if(e.number == roomNumber){
				e.people = [];
			}
		});
	}
};

console.log(house);

house.addOrFirePerson(1, person1);
house.addOrFirePerson(6, "Vika");

console.log(house);
