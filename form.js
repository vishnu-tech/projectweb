
const form = document.getElementById('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('pwd');
const password2 = document.getElementById('pwd2');
let state = document.getElementById('drop');
let text = document.getElementById('textarea');

const gender = document.getElementById('gen');
const mal = document.getElementById('male');
const fem = document.getElementById('female');
const nal = document.getElementById('na');


// // let butto = document.getElementById('radio');
// let chck = document.getElementById('chk')

form.addEventListener('submit', (e) => {
    if (!checkInput()) {
        e.preventDefault();
    }


})

function checkInput() {

    let success = true;

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let stateValue = state.value;
    let textValue = text.value;


    let gender = true;

    // let buttoValue = butto.value;
    // let chckValue = chck.value;
    // const malValue = mal.value();
    // const femValue = fem.value();
    // const nalValue = nal.value();
    // const genderValue = gender.value();









    // if(chckValue === ''){
    //     setError(chck, 'please select one');
    // }
    // else{
    //     setSuccess(chck);
    // }



    if (firstnameValue === '') {
        success = false;
        setError(firstname, 'Username cannot be blank !');
    }
    else {
        setError(firstname, '');
        setSuccess(firstname);
    }


    if (lastnameValue === '') {
        success = false;
        setError(lastname, 'lastname cannot be blank !')
    }
    else {
        setError(lastname, '');
        setSuccess(lastname);
    }


    if (emailValue === '') {
        success = false;
        setError(email, 'Email Cannot be blank');
    }
    else if (!isEmail(emailValue)) {
        success = false;
        setError(email, 'Not a valid Email');
    }
    else {
        setError(email, '');
        setSuccess(email);
    }

    if (phoneValue === '') {
        success = false;
        setError(phone, 'Phone Number cannot be blank !')
    }
    else if(!mobm(phoneValue)){
        success = false;
        setError(phone, "crt the partten")
    }
    else {
        setError(phone, '');
        setSuccess(phone);

    }

    if (passwordValue === '') {
        success = false;
        setError(password, 'password cannot be blanlk !')
    }else if(!pass(passwordValue)){
        success = false;
        setError(password, "oumbu")
    }
    else {
        // setError(password, '');
        setSuccess(password);
    }

    if (password2Value === '') {
        success = false;
        setError(password2, 'Password cannot be blank !')
    }
    else if (passwordValue !== password2Value) {
        success = false;
        setError(password2, 'password does not match')
    }
    else {
        // setError(password2, '');
        setSuccess(password2);
    }

    if (stateValue === 'None') {
        success = false;
        setError(state, 'State cannot be left blank')
    }
    else {
        setError(state, '');
        setSuccess(state);
    }

    if (textValue === '') {
        success = false;
        setError(text, 'Please fill out this field !');
    }
    else {
        setError(text, '');
        setSuccess(text);
    }

    if (mal.checked != true && fem.checked != true && nal.checked != true) {
        success = false;
        gender = false;
        document.querySelector('.sml').innerHTML = 'Plzz select'; 
        document.querySelector('.sml').style.color = 'red';
    }
    else {
        gender = true;
        document.querySelector('.sml').innerHTML = '';
    }

    if(gender == false){
        return false;
    }else{
        return true, success;
    }


}

function setError(input, message) {
    const formgroup = input.parentElement;
    const small = formgroup.querySelector('small');
    small.innerText = message;
    formgroup.classList.add("error");
    formgroup.classList.remove("Success");
}

function setSuccess(input) {
    const formgroup = input.parentElement;
    formgroup.className = 'form-group success'
    // const small = formgroup.querySelector('small');
    // small.innerText = message;
    // formgroup.classList.remove("error");
    // formgroup.classList.add("Success");
}



function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

const pass = (str) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
} 

const mobm = (mobileno) => {
    return mobileno.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/);
}
