import { useEffect, useState } from "react"
import styles from "./SignIn.module.css"
import icon from '../icons/padlock.png';

const SignIn = () => {

    
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [isRemembered, setIsRemembered] = useState(false);
    const [isLog, setIsLog] = useState(false);

    useEffect ( () => {
    const emailStore = localStorage.getItem("email");
    const pwdStore = localStorage.getItem("pwd");
    const isRemStore = localStorage.getItem("isRem");
         if (isRemStore && emailStore !=="" && pwdStore !== "") {
             setIsLog(true);
         }
         if (emailStore) {
            setEmail (emailStore);
         }
         if (pwdStore) {
            setPwd (pwdStore);
         }
}, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = { email, pwd, isRemembered};
        console.log(form);
        if (isRemembered && email !=="" && pwd !== "") {
            setIsLog(true);
        
        if (isRemembered) {
            localStorage.setItem("email", email);
            localStorage.setItem("pwd", pwd);
            localStorage.setItem("isRem", isRemembered);
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("pwd");
            localStorage.removeItem("isRem");
        }
    }  
    }
    const handleLogOut = (() => {
        setIsLog(false);
        localStorage.removeItem("email");
        localStorage.removeItem("pwd");
        localStorage.removeItem("isRem");
    })
    
    const handleEmail = (e) => {
        const {value} = e.target;
        setEmail(value);
       }
       
    const handlePwd = (e) => {
        const {value} = e.target;
        setPwd(value);
       }

    const handleRememb = (e) => {
        const {checked} = e.target;
        setIsRemembered(checked);
    }
   
       
       



    return (
        <div className={styles.content}>
            {isLog ? 
            <div>
            <div>WELCOME</div>
            <button onClick={handleLogOut}>Log Out</button>
            </div>
             : 
             <div>
                <div className={styles.content__header}>
                <img className={styles.header__icon} src={icon}/>
                <span className={styles.header__title}>Sign in</span>

                </div>
                <form onSubmit={handleSubmit} className={styles.content__form}>
                    <input type="email" name='email' className={styles.form__email}  value={email} onChange={handleEmail} placeholder="Email Address*"></input>
                    <input type="password" name='pwd' className={styles.form__pwd} value={pwd} onChange={handlePwd} placeholder="Password*"></input>
                    <span  className={styles.form__subs} >
                    <input type="checkbox" name="isRemembered" id="rememb" className={styles.form__check} checked= {isRemembered} onChange={handleRememb}></input>
                    <label htmlFor="rememb" >Remember me</label>
                    </span>  
                    <button type="submit" className={styles.button__signIn} on>SIGN IN</button>
                </form>
                </div>
          
            }
        </div>
    )
}
export default SignIn;