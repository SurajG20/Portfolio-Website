import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#131516] text-[#A6ADBB] flex justify-center items-center flex-col h-fit px-12"
    >
      <form
        method="POST"
        action="https://getform.io/f/93105a61-a122-4241-8e0a-fca9c75fa23e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-gray-300">
            Let's Connect
          </p>
        </div>
        <input
          className="bg-gray-400 p-2 placeholder:text-gray-700   text-gray-900 focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 bg-gray-400 p-2 placeholder:text-gray-700   text-gray-900 focus:outline-none"
          type="email"
          placeholder="Enter email"
          name="email"
        />
        <textarea
          className="bg-gray-400 p-2 placeholder:text-gray-700   text-gray-900 focus:outline-none"
          name="message"
          rows="8"
          placeholder="Your Message"
        ></textarea>
        <button className="text-white border hover:bg-gray-400 hover:border-gray-600 hover:text-black px-4 py-3 my-6 mx-auto flex items-center ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
