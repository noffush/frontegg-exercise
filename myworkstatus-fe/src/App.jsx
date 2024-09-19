import { useState } from 'react'
import LoginForm from './components/LoginForm';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  };

  return (
    <>
      { isLoggedIn 
        ? <AdminPanel user={ user }></AdminPanel> 
        : <LoginForm onLoginSuccess={ handleLoginSuccess }></LoginForm>
      }
    </>
  )
}

export default App;
