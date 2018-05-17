var person = {
    firstname: "kisoro",
    lastname: "jonah",
    age: 25,
    fullname: function(){
        return this.firstname + this.lastname;
    },
    updateNames: function(fname,lname){
        this.firstname = fname;
        this.lastname = lname
    },
    increaseAge: function(){
        this.age += 1;
    }
};

console.log(person.fullname() + ' is '+ person.age + 'year old');
person.updateNames('Leman','Andrew');
console.log(person.fullname());
person.increaseAge();
console.log(person.fullname() + ' is ' + person.age + 'year old');


class person {
    constructor( firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }

    getfullname() {
        return this.firstname + ' ' + this.lastname;
    }

    getAge(){
        return this.getfullname() + ' is ' + this.age +'years old';;
    }


}

class male extends person{
    constructor(firstname, lastname, age, gender="Male"){
        super(firstname, lastname, age, gender);
    }
}

class Female extends person{
    constructor(firstname, lastname, age, gender="Female"){
        super(firstname, lastname, age, gender);
    }
}
var jonah = new person('jonah','kisoro', 25);
console.log(jonah.firstname());
