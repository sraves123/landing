import React, { useState } from 'react';
import bglogin1 from "../images/bglogin1.jfif";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }
    // Here you would typically handle authentication (API call, etc.)
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form fields
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="bg-black p-4 rounded-2xl shadow-2xl text-black" style={{ backgroundImage: `url(${bglogin1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-2xl font-semibold mb-4 text-white">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit}style={{ backgroundImage: `url(${bglogin1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-purple-200">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-black rounded focus:outline-none focus:border-purple-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-purple-200">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-black rounded focus:outline-none focus:border-purple-800"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

