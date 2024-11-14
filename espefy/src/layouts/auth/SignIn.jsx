import React from 'react';
import Button from '../../components/Button';

const SignIn = ({ onModeChange }) => (
  <div>
    <h2 className="text-2xl text-center text-brown432 font-bold mb-6">Sign In</h2>
    <form>
      <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-white text-brown432 rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-white text-brown432 rounded" />
      <Button type="submit" className="border-black text-brown432 hover:text-gold w-full">
        Sign In
      </Button>
    </form>
    <div className="mt-4 flex justify-between">
      <button onClick={() => onModeChange('signUp')} className="text-brown432 hover:text-gold">
        Create an Account
      </button>
      <button onClick={() => onModeChange('forgetPassword')} className="text-brown432 hover:text-gold">
        Forgot Password?
      </button>
    </div>
  </div>
);

export default SignIn;
