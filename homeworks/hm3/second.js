var _x = {
	workers: [],
	print: function(){
		this.workers.forEach(function(elem){
			elem.print();
		})
	},
	addOrFireWorker: function(x){
		if(typeof(x) == "object"){
			this.workers.push(x);
		}
		if(typeof(x) == "string"){
			this.workers = this.workers.filter(function(elem){
				return elem.name != workerName;
			});
		}
	},
	showWorkersSortingBySalaryAndSummarySalary: function(){
		var arr = this.workers, sum = 0;

		arr.sort(function(a, b){
			return (a.salary > b.salary) ? 1 : -1;
		});

		arr.forEach(function(elem){
			elem.print();
			sum += elem.salary;
		});

		console.log("Total sum: " + sum);
	},
	showMaxMinAvgSalary: function(){
		var max = 0, min = -1, sum = 0;
		this.workers.forEach(function(elem){
			if(elem.salary > max){
				max = elem.salary;
			}

			if(elem.salary < min || min == -1){
				min = elem.salary;
			}

			sum += elem.salary;
		});

		var avg = parseInt(sum / this.workers.length);
		console.log("Min: " + min + ";\n" + "Max: " + max + ";\n" + "Avg: " + avg + ";\n")
	},
	showWorkPlaceInfo: function(){
		var info = [], flag = true;
		this.workers.forEach(function(obj){
			if(!info.length){
				info.push({
					title: obj.workPlace,
					sumSalary: obj.salary,
					avgSalary: 0,
					workersAmount: 1,
					avgWorkersAge: obj.age,
					oldestWorkerName: obj.name,
					oldestWorkerAge: obj.age
				});
			}else{
				info.forEach(function(elem){
					if(obj.workPlace == elem.title){
						elem.sumSalary += obj.salary;
						elem.workersAmount ++;
						elem.avgWorkersAge += obj.age;

						if(obj.workTime > elem.oldestWorkerAge){
							elem.oldestWorkerAge = obj.workTime;
							elem.oldestWorkerName = obj.name;
						}

						flag = false;
					}
				});

				if(flag){
					info.push({
						title: obj.workPlace,
						sumSalary: obj.salary,
						avgSalary: 0,
						workersAmount: 1,
						avgWorkersAge: obj.age,
						oldestWorkerName: obj.name,
						oldestWorkerAge: obj.age
					});
				}
			}
		});

		info.forEach(function(elem){
			elem.avgWorkersAge = elem.avgWorkersAge / elem.workersAmount;
			elem.avgSalary = elem.sumSalary / elem.workersAmount;
			delete elem.oldestWorkerAge;
			console.log(elem.title + "\n" 
				+ "Sum salary: " + elem.sumSalary + "; " 
				+ "avg salary: " + elem.avgSalary + "; " 
				+ "workers amount: " + elem.workersAmount + "; " 
				+ "workers avg age: " + elem.avgWorkersAge + "; " 
				+ "oldest worker: " + elem.oldestWorkerName + ". " )
		});
	}
};

var outputWorker = function(){
	console.log("Name: " + this.name + ";\n" 
		+ "Age: " + this.age + ";\n" 
		+ "WorkPlace: " + this.workPlace + ";\n"
		+ "Salary: " + this.salary + ";\n" 
		+ "WorkTime: " + this.workTime + ";\n");
}

var Vitaliy = {
	name: "Vitaliy", 
	age: 23, workPlace: "McDonalds", 
	salary: 800, 
	workTime: 13, 
	print: outputWorker
};
var Egor = {
	name: "Egor",
	age: 18,
	workPlace: "It",
	salary: 1,
	workTime: 13,
	print: outputWorker
};
var Ivan = {
	name: "Ivan",
	age: 19,
	workPlace: "McDonalds",
	salary: 1000,
	workTime: 1,
	print: outputWorker
};
var Vasiliy = {
	name: "Vasiliy",
	age: 26,
	workPlace: "BSU",
	salary: 500,
	workTime: 10,
	print: outputWorker
};

_x.addOrFireWorker(Vasiliy);
_x.addOrFireWorker(Ivan);
_x.addOrFireWorker(Egor);
_x.addOrFireWorker(Vitaliy);

_x.showWorkersSortingBySalaryAndSummarySalary();
_x.showMaxMinAvgSalary();
_x.showWorkPlaceInfo();

// _x.print();