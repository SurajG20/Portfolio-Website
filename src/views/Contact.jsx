import React, { useContext } from 'react';
import { socialLinks } from '../data/constants';
import { ThemeContext } from '../themeProvider';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode
          ? 'bg-gray-100 pt-16 md:h-screen'
          : 'bg-black pt-16 text-white md:h-screen'
      }
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 ">
        <h2 className="title">Contact</h2>
        <div className="flex justify-center items-center  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8 flex justify-center items-center flex-col px-12 ">
            <form
              method="POST"
              action="https://getform.io/f/93105a61-a122-4241-8e0a-fca9c75fa23e"
              className="flex flex-col max-w-[600px] w-full"
            >
              <div class="my-6">
                <label
                  for="name"
                  class={
                    darkMode
                      ? 'block mb-2 text-lg font-medium text-gray-900'
                      : 'block mb-2 text-lg font-medium text-white'
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  class={
                    darkMode
                      ? 'block mb-2 text-lg font-medium text-gray-900'
                      : 'block mb-2 text-lg font-medium text-white'
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  class={
                    darkMode
                      ? 'block mb-2 text-lg font-medium text-gray-900'
                      : 'block mb-2 text-lg font-medium text-white'
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="8"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Say something..."
                  required
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  Let's Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? 'w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20'
            : 'w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20'
        }
      ></div>
    </div>
  );
};

export default Contact;
