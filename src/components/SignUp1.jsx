import { useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./SignUp1.module.css";
import icon from '../icons/padlock.png';

const SignUp1 = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}, 
        reset, 
        getValues
     } = useForm()
    
    const [borderColor, setBorderColor] = useState("1.5px solid grey");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        
     const onSubmit = async (data) => {
        // todo: submit to the server
        await new Promise ((resolve) => {setTimeout(resolve, 1000)})
        reset();

     }
           





    return (
        <div className={styles.content}>
            <div className={styles.content__header}>
                <img className={styles.header__icon} src={icon}/>
                <span className={styles.header__title}>Sign up</span>

            </div>
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <pre>{JSON.stringify(isSubscription, undefined, 2)}</pre> */}
            <form onSubmit={handleSubmit(onSubmit)} className={styles.content__form}>
                
                <span className={styles.form__name}>
                <input type="text" name='firstName' className={styles.form__firstN}  placeholder="First Name*" {...register("firstName", { required : true, minLength: {value: 3}})} style={{"border": borderColor}}></input>
                <input type="text" name='lastName' className={styles.form__lastN} placeholder="Last Name*"
                 {...register("lastname", { required : "Last name is required!", minLength: {value: 3}})}></input>
                </span>
                {errors.firstName?.type ==="required" ? <p className="firstN__error">First name is required</p>: "" }

                {errors.lastName && <p className="lastN__error">{errors.lastName.message}</p> }

                <input type="email" name='email' className={styles.form__email}   placeholder="Email Address*"
                {...register("email", { required : "email name is required!"}, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} style={{"border": borderColor}}></input>
                {errors.email&& <p className="email__error">{errors.email.message}</p> }

                <input type="password" name='pwd' className={styles.form__pwd}  placeholder="Password*"
                {...register("password", { required : "Password name is required!"}, { pattern: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} ></input>
                {errors.password&& <p className="password__error">{errors.password.message}</p> }
                
                <span  className={styles.form__subs} >
                <input type="checkbox" name="isSubscription" id="subs" className={styles.form__check} ></input>
                <label htmlFor="subs" >I want to receive inspiration, marketing, promotions and updates via email.</label>
                </span>  
                <button type="submit" disabled={isSubmitting} className={styles.button__signUp}>SIGN UP</button>
            </form>
          

        </div>
    )
}
//  export default SignUp1;