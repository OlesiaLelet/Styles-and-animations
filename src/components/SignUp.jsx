import { useState, useEffect} from "react";
// import {useForm} from "react-hook-form";
import styles from "./SignUp.module.css";
import icon from '../icons/padlock.png';
import classNames from "classnames";


const SignUp = () => {

    const initialValues= { firstName: "", lastName: "", email:"", pwd: ""};
    const [isSubscription, setIsSubscription] = useState(false);
    const [formValues, setFormValues] =  useState(initialValues);
    const [errorsV, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [borderColor, setBorderColor] = useState({});
   

    const handleSubmit = (e) => {
         e.preventDefault();
        // const form = {firstName, lastName, email, pvd, isSubscription};
        // console.log(form);
        //  setErrors(Validate(formValues));
        setIsSubmit(true);
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
       
       useEffect(()=> {
        console.log(errorsV);
        if(Object.keys.length===0&&isSubmit){
            console.log(formValues);
        }
       }, [errorsV])

        const validateOnChange = (names, values) => {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            const errors = {};
           
          
            if (names === "email" && !emailPattern.test(values)) {
                 errors.email = "Email is not valid";
             }
            if (names === "firstName" && values.length < 4) {
                errors.firstName = "First name is not valid";
            } 
            if (names === "lastName" && values.length < 4) {
                errors.lastName = "Last name is not valid";
            } 
            if (names === "pwd" && !pwdPattern.test(values)) {
                errors.pwd = "Password is not valid";
            } 
            return errors;
        }
        // const borderOnChange = (names, values) => {

        //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        //     const bordersColors = {};
           
          
        //     if (names === "email" && !emailPattern.test(values)) {
        //         bordersColors.email = cm;
        //      }
        //     if (names === "firstName" && values.length < 4) {
        //         bordersColors.firstName = cm;
        //     } 
        //     if (names === "lastName" && values.length < 4) {
        //         bordersColors.lastName = cm;
        //     } 
        //     if (names === "pwd" && !pwdPattern.test(values)) {
        //         bordersColors.pwd = cm;
        //     } 
        //     return bordersColors;
        
        // }
        const validateOnSubmit = () => {
            
        //     if (names === "firstName" && !values ) {
             
        //     }
        //   if (names === "email" && values.length===0) {
        //         errors.email = "Email is required";
        //      }
            }
        
        const cn = classNames({
            [styles.form__lastN]: true,
             [styles.lastN__invalid]: errorsV.lastName,

        })
      
        

    return (
        <div className={styles.content}>
            <div className={styles.content__header}>
                <img className={styles.header__icon} src={icon}/>
                <span className={styles.header__title}>Sign up</span>

            </div>
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
           
            <form onSubmit={handleSubmit} className={styles.content__form}>

                <span className={styles.form__name}>
                <input type="text" name='firstName' className={ errorsV.firsName? styles.firstN__invalid:  styles.form__firstN} value={formValues.firstName} onChange={handleChange} placeholder="First Name*"  ></input>
                <input type="text" name='lastName' className={cn} value={formValues.lastName} onChange={handleChange} placeholder="Last Name*" ></input>
                </span>
                {errorsV.firsName ? <p  className={styles.error} >{errorsV.firsName}</p> : ""}
                {errorsV.lastName ? <p className={styles.error}>{errorsV.lastName}</p> : ""}

                <input type="email" name='email' className={errorsV.email ? styles.email__invalid : styles.form__email}  value={formValues.email} onChange={handleChange} placeholder="Email Address*" style={{"border":  borderColor.email}}></input>
                {errorsV.email? <p className={styles.error}>{errorsV.email}</p>: "" }

                <input type="password" name='pwd' className={errorsV.pwd ? styles.pwd__invalid : styles.form__pwd} value={formValues.pwd} onChange={handleChange} placeholder="Password*" style={{"border": borderColor.pwd}}></input>
                {errorsV.pwd ? <p className={styles.error}>{errorsV.pwd}</p> : ""}

                <span  className={styles.form__subs} >
                <input type="checkbox" name="isSubscription" id="subs" className={styles.form__check} checked= {isSubscription} onChange={handleSubsc}></input>
                <label htmlFor="subs" >I want to receive inspiration, marketing, promotions and updates via email.</label>
                </span>  

                <button type="submit" className={styles.button__signUp}>SIGN UP</button>
            </form>
          

        </div>
    )
}
export default SignUp;