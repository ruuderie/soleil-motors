import { signInWithGoogle, SignInWithEmail, SendSignInLinkToEmail, SignOut, CreateUserDocument } from '../../utils/firebase.utils';
import React, { useState } from 'react';
const SignIn = () => {

    const [email, setEmail] = useState('');
    
    const handleSignInWithGoogle = async () => {
        const user = await signInWithGoogle();
        if (user) {
            CreateUserDocument(user,{});
        } else {
            // handle the sign-in error
        }
    };
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    
    const handleSignInWithEmail = () => {
        SendSignInLinkToEmail(email)
          .then(() => {
            window.localStorage.setItem('emailForSignIn', email);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // handle the error
          });
    };

    const handleSignOut = async () => {
        await SignOut();
        // do something after sign-out
    };
    
    return (
        
        <center>

        <div className="field columns mb-3">
            <div className='is-one-third column'/>
            <div className='control is-one-third column'>
                <label className="label">Sign In</label>
                <input className="input mx-2 mb-2" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <button className='button is-primary mx-2 mb-2'  onClick={handleSignInWithEmail}>Sign in with Email</button>
                <button  className='button mx-2 mb-2 is-link' onClick={handleSignInWithGoogle}>Sign in with Google</button>
                <button  className='button mx-2 mb-2 is-link is-light' onClick={handleSignOut}>Sign out</button>
            </div>
            <div className='is-one-third column'/>

        </div>
        </center>

    );
};

export default SignIn;
