import React from 'react';
import Button from '../../components/Button';

const ForgetPassword = ({ onModeChange }) => (
  <div>
    <h2 className="text-2xl text-center font-bold mb-6">Reset Password</h2>
    <form>
      <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>
    </form>
    <div className="mt-4 text-center">
      <button onClick={() => onModeChange('signIn')} className="text-white hover:text-gold">
        Back to Sign In
      </button>
    </div>
  </div>
);

export default ForgetPassword;
