const person = {
    firstName : 'Mosh',
    lastName : 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error('Value is not a string');
        }
        const parts = value.split(' ');
        if(parts.length !== 2){
            throw new Error('Enter a first and last name');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

//getters access property of an object outside of the object scope
//setters change(mutate) them
try{
   person.fullName = ''; 
}
catch(e){
  console.log(e);
}
console.log(person);
