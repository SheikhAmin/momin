const person = {
    firstName : 'Mosh',
    lastName : 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

//getters access property of an object outside of the object scope
//setters change(mutate) them
person.fullName = 'john Smith';
console.log(person);
