import { useState } from 'react';

const Size = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-600 py-6 bg-black text-white">
      <h3 className="-my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between py-3 text-sm text-gray-300 hover:text-gold"
          aria-controls="filter-section-1"
          onClick={() => setOpen(!open)}
          aria-expanded={open ? 'true' : 'false'}
        >
          <span className="font-medium text-white">Size</span>
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
        <div className="pt-6  rounded-lg" id="filter-section-1">
          <div className="space-y-4">
            {['Small', 'Medium', 'Large', 'Extra Large'].map((size, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`filter-size-${index}`}
                  name="size[]"
                  value={size.toLowerCase()}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-gold focus:ring-gold"
                />
                <label
                  htmlFor={`filter-size-${index}`}
                  className="ml-3 text-sm text-gray-300"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Size;
