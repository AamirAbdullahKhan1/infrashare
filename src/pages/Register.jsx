import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== cpassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // User registered successfully
        navigate('/'); // Redirect to login page
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong!');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to register! Please try again later.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gradient-to-tr from-amber-300 to-teal-100">
      <div className="max-w-md w-full mx-auto shadow-xl rounded-2xl p-8 border-x-2 border-y-2 bg-slate-50 border-gray-500">
        <div className="text-center mb-12">
          <a href="javascript:void(0)">
            <h1 className='text-4xl font-semibold uppercase font-poppins'>InfraShare</h1>
          </a>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm font-semibold mb-2 block">Email Id</label>
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-800 bg-white border border-gray-600 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 font-semibold block">Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-gray-800 bg-white border border-gray-600 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 font-semibold block">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                className="text-gray-800 bg-white border border-gray-600 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter confirm password"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="!mt-12">
            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-black transition-all focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1">Login Here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
