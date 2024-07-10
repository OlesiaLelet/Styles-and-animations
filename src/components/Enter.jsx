import { useState } from "react";
import styles from './Enter.module.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Enter = () => {

const [isSignUp, setSignUp] = useState(false);
const [isSignIn, setSignIn] = useState(false);

const showSignInWindow = () => {
 setSignIn(prev => !prev);
 console.log(SignIn);
}


const showSignUpWindow = () => {
    setSignUp(prev => !prev);
}



return (
    <div className={styles.container}>
        {isSignIn? <SignIn/>:isSignUp ?<SignUp/>: <div className={styles.content}>
            <div className={styles.container__question}>If you already have acoount press "Sign in" button</div>
            <button className={styles.button__signIn} onClick={showSignInWindow}>Sign in</button>
            <div className={styles.container__question} >If you are new in our site press "Sign up" button</div>
            <button className={styles.button__signUp} onClick={showSignUpWindow}>Sign Up</button>
        </div>}
        
        
    </div>   
)
}

export default Enter;