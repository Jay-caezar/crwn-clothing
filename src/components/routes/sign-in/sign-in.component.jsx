import { signInWithGooglePopup } from "../../../assets/utils/firebase/firebase.utils";

const SignIn = () => {
  const signInWithGoogleHandler = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign-in Page</h1>
      <button type="button" onClick={signInWithGoogleHandler}>
        Sign-in with Google
      </button>
    </div>
  );
};

export default SignIn;
