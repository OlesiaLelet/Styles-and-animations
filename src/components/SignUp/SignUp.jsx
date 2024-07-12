import { useState} from "react";
// import {useForm} from "react-hook-form";
import styles from "./SignUp.module.css";
import icon from '../../icons/padlock.png';
import classNames from "classnames";
import SignIn from "../SignIn/SignIn";


const SignUp = () => {

    const initialValues= { firstName: "", lastName: "", email:"", pwd: ""};
    const [isSubscription, setIsSubscription] = useState(false);
    const [formValues, setFormValues] =  useState(initialValues);
    const [errorsV, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isHaveAcc, setIsHaveAcc] = useState(false);
   
   

    const handleSubmit = (e) => {
         e.preventDefault();
        // const form = {firstName, lastName, email, pvd, isSubscription};
        // console.log(form);
        //  setErrors(Validate(formValues));
        if (Object.entries(errorsV.length===0)) {
               setIsSubmit(true);
              alert("You have registered successfully");
        }
    
       
    }
        const handleSubsc = (e) => {
        const {checked} = e.target;
        setIsSubscription(checked);
    }

        const handleChange = (e) => {
        const {name, value}= e.target;
        setFormValues({...formValues, [name]: value});
        setErrors(validateOnChange(name, value));
    }
       
    //    useEffect(()=> {
    //     console.log(errorsV);
    //     if(Object.keys.length===0&&isSubmit){
    //         console.log(formValues);
    //     }
    //    }, [errorsV])

        const validateOnChange = (names, values) => {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            const errors = {};
           
          
            if (names === "email" && !emailPattern.test(values)) {
                 errors.email = "Email is not valid";
             }
            if (names === "firstName" && values.length < 4) {
                errors.firstName = "First name is not valid";
                console.log(names, values);
            } 
            if (names === "lastName" && values.length < 4) {
                errors.lastName = "Last name is not valid";
            } 
            if (names === "pwd" && !pwdPattern.test(values)) {
                errors.pwd = "Password is not valid";
            } 
            return errors;
        }
        
         const handleClick = () => {
            setIsHaveAcc(true);
         }

        const cn = classNames({
            [styles.form__lastN]: true,
             [styles.lastN__invalid]: errorsV.lastName,

        })
      
        

    return (
        <div className={styles.content}>
            {isHaveAcc ? <SignIn/>:
            <div>
            <div className={styles.content__header}>
                <img className={styles.header__icon} src={icon} alt="register__icon"/>
                <span className={styles.header__title}>Sign up</span>

            </div>
           
            <form onSubmit={handleSubmit} className={styles.content__form}>

                <span className={styles.form__name}>
                <input type="text" name='firstName' className={ errorsV.firsName ? styles.firstN__invalid:  styles.form__firstN} value={formValues.firstName} onChange={handleChange} placeholder="First Name*"  ></input>
                <input type="text" name='lastName' className={cn} value={formValues.lastName} onChange={handleChange} placeholder="Last Name*" ></input>
                </span>
                {errorsV.firsName ? <p  className={styles.error} >{errorsV.firsName}</p> : ""}
                {errorsV.lastName ? <p className={styles.error}>{errorsV.lastName}</p> : ""}

                <input type="email" name='email' className={errorsV.email ? styles.email__invalid : styles.form__email}  value={formValues.email} onChange={handleChange} placeholder="Email Address*" ></input>
                {errorsV.email? <p className={styles.error}>{errorsV.email}</p>: "" }

                <input type="password" name='pwd' className={errorsV.pwd ? styles.pwd__invalid : styles.form__pwd} value={formValues.pwd} onChange={handleChange} placeholder="Password*" ></input>
                {errorsV.pwd ? <p className={styles.error}>{errorsV.pwd}</p> : ""}

                <span  className={styles.form__subs} >
                <input type="checkbox" name="isSubscription" id="subs" className={styles.form__check} checked= {isSubscription} onChange={handleSubsc}></input>
                <label htmlFor="subs" >I want to receive inspiration, marketing, promotions and updates via email.</label>
                </span>  

                <button type="submit" className={styles.button__signUp}>SIGN UP</button>
            </form>
            <a  className={styles.content__haveAcc} onClick={handleClick} >Already have account?</a>
            {/* <div className={ styles.content__message}>Copyright Your Website 2024</div> */}
            </div>
            }
        </div>
    )
}
export default SignUp;