class Person {
    constructor (name = 'Anonymous', age = 25) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting () {
        return 'Hi i am ' + this.name;
    }
    
    getDescription () {
        return this.name + " is " + this.age + " years old";
    }
}


class Child extends Person {
    constructor (name, age, like){
        super(name, age);
        this.like = like;
    }
    getGreeting () {
        return 'Hiiiiiii!  I am ' + this.name + ' i like ' + this.like;
    }
    
}


var me = new Person('hashmat', 30);
console.log(me.getGreeting());



var anonymous = new Child('mike', 20, 'cake');
console.log(anonymous.getGreeting());
