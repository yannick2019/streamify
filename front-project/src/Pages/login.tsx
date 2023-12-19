import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {

  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Effect to check for a valid token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Token exists, navigate to home or the appropriate authenticated route
      navigate('/streamify/home');
    }
  }, [navigate]);

  // Function to handle login
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://streamify-api.000webhostapp.com/login.php', {
      method: 'POST',
      mode: "cors",
      credentials: "omit",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      if (data && data.message === 'Connexion réussie') {
        const { token, username, role } = data;

        // Store the token and user information in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        // Set the token in state for future use
        setToken(token);

        navigate('/streamify/home');
      } else {
        console.error('Login failed:', data.error);
      }
    } else {
      console.error('Login failed:', response.statusText);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};


  // Function to handle logout
  const handleLogout = () => {
    // Clear the token and user information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');

    // Remove the token from state
    setToken('');

    // Navigate to the login page or another appropriate route
    navigate('/streamify/login');
  };

  return (
    <div className="overflow-hidden">
      <div className='signup_body template d-flex justify-content-center align-items-center vh-100'>
        <div className='col-md-6 col-12 d-flex flex-column h-100'>
          <div className='signup_card p-5 flex-fill'>
            <form className='h-100 d-flex flex-column justify-content-center' onSubmit={handleLogin}>
              <h1 className="fw-bold pol text-center pb-4">Log in</h1>
              <div className='mb-2'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  placeholder='Enter username'
                  className='form-control'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  placeholder='Enter password'
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='mt-2 mb-2'>
                <button type='submit' className='btn'>
                  Log in
                </button>
              </div>
              <div>
              <p className='text-end mt-2'>
                Forgot <Link className='link_login' to={'/streamify/forgot-password'}>Password?</Link>
              </p>
              </div>
              <div>
                <p> If you don't have a account you can
                <Link to={'/streamify/signup'} className='link_login ms-2'>
                  Register here
                </Link>
              </p>
              </div>
            </form>
          </div>
        </div>
          {/* Conditionally render logout button if token exists */}
          {token && (
          <div>
            <p>Welcome, {localStorage.getItem('username')}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          )}
      </div>
    </div>
  );
}

export default Login;