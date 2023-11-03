const form = document.getElementById('form');
const FirstName = document.getElementById('FirstName');
const MiddleName = document.getElementById('MiddleName');
const LastName = document.getElementById('LastName');
const IDNumber = document.getElementById('IDNumber');
const Courses = document.getElementById('Courses');
const Disability = document.getElementById('Disability');
const dateInput = document.getElementById('dateInput');
const genderInput = document.getElementById('genderInput');
const DisabilityName = document.getElementById('DisabilityName');
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
    var regex =  /^(\+?27|0)[6-8][0-9]{8}$/;
    return regex.test(Phone);
}

const isValidIDNumber = IDNumber => {
    var reg = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
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
    const CoursesValue = Courses.value
    const DisabilityValue = Disability.value
    const dateInputValue = dateInput.value.trim();
    const genderInputValue = genderInput.value
    const DisabilityNameValue = DisabilityName.value.trim();
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

    if(CoursesValue === '') {
        setError(Courses, 'Please select 1 or more course');
     } else {
        setSuccess(Courses);
    }

    if (DisabilityValue === '') {
        setError(Disability, 'Please Select on of the above');
    } else {
        setSuccess(Disability)
    }

    if (dateInputValue === '') {
        setError(dateInput, 'Select your date of birth');
    } else {
        setSuccess(dateInput)
    }

    if (genderInputValue === '') {
        setError(genderInput, 'Select your gender');
    } else {
        setSuccess(genderInput)
    }

    if(DisabilityNameValue === '') {
        setError(DisabilityName, 'Name of Disability is required');
    } else {
        setSuccess(DisabilityName);
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
