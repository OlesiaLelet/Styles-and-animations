const Validate = (values) => {
    const errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!values.firstName) {
        errors.firsName = "First name is required!";
    } else if (values.firstName.length < 4) {
       errors.firstName= "not valide"; ;
    }

    if (!values.lastName) {
        errors.lastName = "Last name is required!";
        
    } else if (values.lastName.length < 4) {
        errors.firstName = "not valide";
    }

    if (!values.email) {
        errors.email = "Email is required!";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "This is not valide email format!"
    }

    if (!values.pwd) {
        errors.pwd = "Password is required!";
    } else if (!pwdPattern.test(values.pwd)) {
        errors.pwd = "not valide";

    }
    return errors;
} 
// export default Validate;