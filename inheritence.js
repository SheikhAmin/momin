import {Person} from './class.js';

export class Teacher extends Person{
     constructor(name, degree){
       super(name);
       this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher('momin','hsc');
teacher.teach();
//console.log(teacher.teach());