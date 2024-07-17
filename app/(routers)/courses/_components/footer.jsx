import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Learn Mate</h2>
            <p className="text-sm">Your platform for learning and growth.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-sm hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Courses</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Learn Mate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
