// Auth.jsx
import React, { useState } from 'react';
import SignIn from '../layouts/auth/SignIn';
import SignUp from '../layouts/auth/SignUp';
import ForgetPassword from '../layouts/auth/ForgetPassword';

const Auth = () => {
  const [authMode, setAuthMode] = useState('signIn');

  const renderAuthComponent = () => {
    switch (authMode) {
      case 'signIn':
        return <SignIn onModeChange={setAuthMode} />;
      case 'signUp':
        return <SignUp onModeChange={setAuthMode} />;
      case 'forgetPassword':
        return <ForgetPassword onModeChange={setAuthMode} />;
      default:
        return <SignIn onModeChange={setAuthMode} />;
    }
  };

  return (
    <div className="flex  justify-center items-center min-h-[70vh]  text-white">
      <div className="p-8 w-full  bg-beigeB2    border-2 border-brown432 rounded-md  max-w-md  rounded-md shadow-lg">
        {renderAuthComponent()}
      </div>
    </div>
  );
};

export default Auth;
