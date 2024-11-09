import { useState } from 'react';

export default function Sort() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative inline-block text-left bg-black text-white">
      <button
        type="button"
        className="group inline-flex justify-center text-sm font-medium text-gray-300 "
        onClick={toggleMenu}
        aria-expanded={open ? "true" : "false"}
      >
        Sort
        <svg
          className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gold"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-800 shadow-2xl ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {['Most Popular', 'Best Rating', 'Newest', 'Price: Low to High', 'Price: High to Low'].map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-300  hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
