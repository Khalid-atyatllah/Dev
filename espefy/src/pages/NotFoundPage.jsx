import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button'; // Assuming Button is a custom component

const NotFoundPage = () => (
  <div className="flex items-center justify-center h-screen text-white">
    <div className="text-center">
      <p className="text-base font-semibold text-gold">404</p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link to="/">
          <Button className="text-gold">Go back home</Button>
        </Link>
        
        <a href="#" className="text-sm font-semibold text-white">
          Contact support <span aria-hidden="true" className="text-gold">→</span>
        </a>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
