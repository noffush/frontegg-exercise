import adminApp from '../../services/adminApp';
import { useState } from 'react';

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }; 
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClicked = async (event) => {
    event.preventDefault();
    console.log('Attempting login');
    const result = await adminApp.userLogin(email, password);
    if (result.status === "success") {
      onLoginSuccess(result.user);
    } else {
      switch (result.message) {
        case 'Invalid password':
          // show invalid password message
          break;
        case 'Email not found':
          // show register flow
          break;
      }
    }
  };

  const handleRegisterClicked = () => {
    // TODO reveal a "name" field and change the Login text button
  };

  return (
    <div>
      <h1>Welcome to MyWorkStatus</h1>
        <form>
          <div>Email <input value={ email } onChange={ handleEmailChange } /></div>
          <div>Password <input value={ password } onChange={ handlePasswordChange } /></div> {/* TODO hide password */}
          <div><button type="submit" onClick={ handleLoginClicked }>Login</button></div>
          <div>Not registered yet?<button type="submit" onClick={ handleRegisterClicked }>Register</button></div>
        </form>
    </div>
  )
}

export default LoginForm;
