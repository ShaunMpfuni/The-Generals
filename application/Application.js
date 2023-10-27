const form = document.getElementById('form');
const FirstName = document.getElementById('FirstName');
const MiddleName = document.getElementById('MiddleName');
const LastName = document.getElementById('LastName');
const IDNumber = document.getElementById('IDNumber');
const Disability = document.getElementById('Disability');
const Phone = document.getElementById('Phone');
const CurrentAddress = document.getElementById('CurrentAddress');
const Email = document.getElementById('Email');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = Email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}

const isValidPhone = Phone => {
    var regex = /^[1-9]\d{9}$/;
    return regex.test(Phone);
}

const isValidIDNumber = IDNumber => {
    var reg = /^[1-12]\d{12}$/;
    return reg.test(IDNumber);
}

const isValidFirstName = FirstName => {
    var red = /^[A-za-z]+$/;
    return red.test(FirstName);
}

const isValidMiddleName = MiddleName => {
    var red = /^[A-za-z]+$/;
    return red.test(MiddleName);
}
const isValidLastName = LastName => {
    var red = /^[A-za-z]+$/;
    return red.test(LastName);
}



const validateInputs = () => {
    const FirstNameValue = FirstName.value.trim();
    const MiddleNameValue = MiddleName.value.trim();
    const LastNameValue = LastName.value.trim();
    const IDNumberValue = IDNumber.value.trim();
    const DisabilityValue = Disability.value.trim();
    const PhoneValue = Phone.value.trim();
    const CurrentAddressValue = CurrentAddress.value.trim();
    const EmailValue = Email.value.trim();


    if(FirstNameValue === '') {
        setError(FirstName, 'First Name is required');
    } else if (!isValidFirstName(FirstNameValue)) {
        setError(FirstName, 'Please enter characters only');
    } else {
        setSuccess(FirstName);
    }

    if(MiddleNameValue === '') {
        setError(MiddleName, 'Middle Name is required');
    } else if (!isValidMiddleName(MiddleNameValue)) {
        setError(MiddleName, 'Please enter characters only');
    } else {
        setSuccess(MiddleName);
    }

    if(LastNameValue === '') {
        setError(LastName, 'Last Name is required');
    } else if (!isValidLastName(LastNameValue)) {
        setError(LastName, 'Please enter characters only');
    } else {
        setSuccess(LastName);
    }

    if(IDNumberValue === '') {
        setError(IDNumber, 'ID Number is required');
    } else if (!isValidIDNumber(IDNumberValue)) {
        setError(IDNumber, 'Please enter a valid ID Number');
    } else {
        setSuccess(IDNumber);
    }

    if(DisabilityValue === '') {
        setError(Disability, 'Name of Disability is required');
    } else {
        setSuccess(Disability);
    }

    if(PhoneValue === '') {
        setError(Phone, 'Phone number is required');
    } else if (!isValidPhone(PhoneValue)) {
        setError(Phone, 'Please enter a valid 10 digit mobile number');
    } else {
        setSuccess(Phone);
    }

    if(CurrentAddressValue === '') {
        setError(CurrentAddress, 'Current Address is required');
    } else {
        setSuccess(CurrentAddress);
    }

    
    if(EmailValue === '') {
        setError(Email, 'Email is required');
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Provide a valid email address');
    } else {
        setSuccess(Email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
