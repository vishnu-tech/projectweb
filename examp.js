const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    var valid_username = 0;
    var valid_email = 0;
    var valid_password = 0;
    var valid_passowrd2 = 0;
    
    username.addEventListener('focusout', e => {
        e.preventDefault();
        //.trim() to remove white spaces at the start/end of the input
        const usernamevalue = username.value.trim();
        if(usernamevalue === ''){
            setErrorFor(username, 'Username cannot be blank');
            valid_username = 0;
        }else{
            setSuccessFor(username);
            valid_username = 1;
        }
    });

    email.addEventListener('focusout', e => {
        e.preventDefault();

        const emailValue = email.value.trim();
        //Email check
        if(emailValue === ''){
            setErrorFor(email, 'Email cannot be blank');
            valid_email = 0;
        }else if(!isEmail(emailValue)){
            setErrorFor(email, 'Not a valid Email');
            valid_email = 0;
        }
        else{
            setSuccessFor(email);
            valid_email = 1;
        }
    });

    password.addEventListener('focusout', e => {        
        e.preventDefault();

        const passwordValue = password.value.trim();
        //password check
        if(passwordValue === ''){
            setErrorFor(password, 'Password cannot be blank');
            valid_password = 0;
        }else{
            setSuccessFor(password);
            valid_password = 1;
        }
    });

    password2.addEventListener('focusout', e => {
        /*we can also use 'focusout' event to varify input while remove the cursor*/
        e.preventDefault();

        const password2Value = password2.value.trim();
        //confirm password
        if(password2Value === ''){
            setErrorFor(password2, 're-enter the password');
            valid_password2 = 0;
        }else if(password2Value !== passwordValue){
            setErrorFor(password2, 'passwords does not match');
            valid_password2 = 0;
        }else{
            setSuccessFor(password2);
            valid_password2 = 1;
        }
    });


    //query selector: Same as the getElementById but capable of applying to class(.), tag, and id(#)
    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small'); 
        //'small' tag doesn't have a specific id so we use 'querySelector()' to locate it
        formControl.className = 'form-con error';
        small.innerText = message;
    }

    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-con success';
    }

    // regular expression
    function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}