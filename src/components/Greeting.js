import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const generateGreeting = () => {
    if (name.trim() === "") {
      setGreeting("Please enter your name first!");
    } else {
      const timeOfDay = getTimeOfDay();
      setGreeting(`Good ${timeOfDay}, ${name}! Welcome to our app.`);
    }
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M96.65,62a20,20,0,0,1,34.64-20l30,52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M69.32,94.67,55.08,70A20,20,0,0,1,89.73,50l31.17,54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M158.87,160A40,40,0,0,1,168,105.58L161.32,94A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L88.57,128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M220.11,40.63a60.21,60.21,0,0,0-24-14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M58.23,228a121,121,0,0,1-18.16-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg> 
          Greeting App
        </h1>
        
        <div className="mb-4">
          <label htmlFor="nameInput" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your name:
          </label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        
        <button
          onClick={generateGreeting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Generate Greeting
        </button>
        
        {greeting && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <p className="text-center text-lg">{greeting}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Greeting;