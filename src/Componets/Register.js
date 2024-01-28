import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [accountType, setAccountType] = useState('individual');
  const [portionInSociety, setPortionInSociety] = useState('');


  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handlePortionInSocietyChange = (e) => {
    setPortionInSociety(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      contactInfo,
      accountType,
      portionInSociety
    };

    try {
      const response = await fetch('http://localhost:5001/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Registration successful
      console.log('Registration successful');
  alert("Registration SuccessFull");
    window.location.href = '/login';

    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className='login-bg'>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 register">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleRegister}>
          {/* Form Inputs */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contactInfo" className="block text-sm font-medium leading-6 text-gray-900">
              Contact Information
            </label>
            <div className="mt-2">
              <input
                id="contactInfo"
                name="contactInfo"
                type="text"
                autoComplete="contact-info"
                value={contactInfo}
                onChange={handleContactInfoChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="accountType" className="block text-sm font-medium leading-6 text-gray-900">
              Account Type
            </label>
            <div className="mt-2">
              <select
                id="accountType"
                name="accountType"
                value={accountType}
                onChange={handleAccountTypeChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
              </select>
            </div>
          </div>

          {accountType === 'organization' && (
            <div>
              <label htmlFor="portionInSociety" className="block text-sm font-medium leading-6 text-gray-900">
                Portion in Society
              </label>
              <div className="mt-2">
                <select
                  id="portionInSociety"
                  name="portionInSociety"
                  value={portionInSociety}
                  onChange={handlePortionInSocietyChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select Postion</option>
                  <option value="urban">Secretary</option>
                  <option value="rural">Manager</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Register;
