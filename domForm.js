const element = document.getElementById('demo');

element.innerHTML = `Today's date is:  ${Date()}`;

function validateForm(){
    const element1 = document.forms['myForm'];
    const value = form['fname'].value;

    if(value ===''){
        throw new Error('You must type your name');
        return false
    }
}