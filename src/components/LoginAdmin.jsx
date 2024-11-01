import React, { useState } from 'react';

function LoginPopup({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Here, you can set the correct email and password (you can also fetch it from an API or local storage).
    const correctEmail = 'admin@example.com';
    const correctPassword = 'admin123';

    if (email === correctEmail && password === correctPassword) {
      onLogin(true); // Call the login success function
    } else {
      setError('Incorrect email or password.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Login Required</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
