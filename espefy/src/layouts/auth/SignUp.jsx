import React from 'react';
import Button from '../../components/Button';

const SignUp = ({ onModeChange }) => (
  <div>
    <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
    <form>
      <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
    <div className="mt-4 text-center">
      <button onClick={() => onModeChange('signIn')} className="text-white hover:text-gold">
        Already have an account? Sign In
      </button>
    </div>
  </div>
);

export default SignUp;
