function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 

    finalSalary = baseSalary + monthlyBonus


    this.getEmpDetails = function(){
        console.log('name : ' +this.name+' | age :'+this.age);
    }
}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();