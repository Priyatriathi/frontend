import React from 'react';

function Announcements() {
  return (
    <section className="bg-gradient-to-r from-white-50 to-blue-50 p-8 shadow-lg rounded-2xl mt-8 max-w-8xl w-full mx-auto">
      {/* Announcement Section Header */}
      <div className="flex items-center mb-6">
        <div className=" text-white p-4 rounded-lg mr-4">
          <span className="text-2xl font-bold">📢</span>
        </div>
        <h1 className="text-4xl font-serif text-gray-800">
          Announcements
        </h1>
      </div>

      {/* Announcement Description */}
      <p className="text-lg text-gray-600 mb-6">
        Stay updated on the latest news, events, and updates from the Training and Placement Cell. Check out our latest announcements to stay informed.
      </p>
      
      {/* Action Buttons */}
      <div className="space-x-4">
        <button className="bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300">
          View Announcements
        </button>
        <button className="bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300">
          Upcoming Events
        </button>
      </div>
    </section>
  );
}

export default Announcements;