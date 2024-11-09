import { useState } from 'react';

const Color = () => {
  const [open, setOpen] = useState(false);

  const colors = ['White', 'Beige', 'Blue', 'Brown', 'Green', 'Purple'];

  return (
    <div className="border-b border-gray-600 py-6 bg-black text-white">
      <h3 className="-my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gold"
          aria-controls="filter-section-0"
          onClick={() => setOpen(!open)}
          aria-expanded={open ? 'true' : 'false'}
        >
          <span className="font-medium text-white">Color</span>
          <span className="ml-6 flex items-center">
            {!open ? (
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </button>
      </h3>
      {open && (
        <div className="pt-6" id="filter-section-0">
          <div className="space-y-4">
            {colors.map((color, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`filter-color-${index}`}
                  value={color.toLowerCase()}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-gold focus:ring-gold"
                />
                <label
                  htmlFor={`filter-color-${index}`}
                  className="ml-3 text-sm text-gray-300"
                >
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Color;
