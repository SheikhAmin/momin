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

/*For export-import:
  export default function(){} for this you have to write import Data from './filename'
  export function(){} for this you need to write import {function} from './filename'*/
  
