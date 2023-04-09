import { signInWithGoogle, signInWithEmail, signOut } from '../../utils/firebase.utils';

const SignIn = () => {
    const handleSignInWithGoogle = async () => {
        const user = await signInWithGoogle();
        if (user) {
          // do something with the signed-in user
        } else {
          // handle the sign-in error
        }
      };
    /*
      const handleSignInWithEmail = async () => {
        const user = await signInWithEmail('email@example.com', 'password');
        if (user) {
          // do something with the signed-in user
        } else {
          // handle the sign-in error
        }
      };
    */
      const handleSignOut = async () => {
        await signOut();
        // do something after sign-out
      };
    return (
        <div>
          <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      );
}


export default SignIn;