/* Logic for Search functionality:  At first what we type in input element we have to catch it. After clicking button we have to pass this Search term in parent. Because in parent there are states. We are maintaining state in parent. Telling child what to do. For this, we pass props. We are doing the whole process on "lifting the state up". */
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
const SearchTask = ({onSearch}) => {
  /* To store what we write in input textbox, we need state. Because when the button will be clicked we have to send the Search term on parent component. So that, using the Search term we can search on task list */
  const [searchTerm, setSearchTerm] = useState("");
  // defining handleClick function
  const handleClick = (event) => {
    // Default behavior of form is submit. We don't want to submit. we just want to do clickHandler.
    event.preventDefault(); 
    // After click i have to pass the search term to the parent anyhow.
    /* from parent i can pass a function. That function listen when search term is ready and handleClick triggered. After triggering handleClick the onSearch function pass from parent will populate. */ 
    onSearch(searchTerm);
  }
  return (
    <>
      <div className="p-2 flex justify-end">
        <form>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input
                type="search"
                id="search-dropdown"
                className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                placeholder="Search Task"
                // what we type in search box
                value = {searchTerm}
                // set the search term in setSearchTerm state on the basis of what user typing. 
                onChange = { () => setSearchTerm(event.target.value) }
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                onClick={handleClick}
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchTask;
