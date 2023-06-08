function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000; // should be made internal with abstraction.

   this.calculateFinalSalary = function(){ 
     let finalSalary = this.baseSalary + this.monthlyBonus;
     console.log('Final salary is : ' + finalSalary);
   } // This function should also be made internal with abstraction.


    this.getEmpDetails = function(){
        console.log('Name : ' +this.name+' | Age :'+this.age);
    }
}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();
emp1.calculateFinalSalary();

 