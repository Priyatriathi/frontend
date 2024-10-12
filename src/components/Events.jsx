import React from 'react';

// EventCard Component
const EventCard = ({ title, date, location, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 m-4 w-full max-w-xs transform transition-transform duration-300 hover:scale-105 shadow-lg">
      <h2 className=" text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-2"><strong>Date:</strong> {date}</p>
      <p className="text-gray-600 mb-4"><strong>Location:</strong> {location}</p>
      <p className="text-gray-500 mb-4">{description}</p>
      <button className="bg-blue-950 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-500 transition duration-300 w-full">
        Register
      </button>
    </div>
  );
};

// Events data
const events = [
  {
    title: "Introduction to Web Development",
    date: "July 15, 2023 | 9:00 AM - 5:00 PM",
    location: "123 Main St, Anytown USA",
    description: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. This workshop will cover responsive design, web accessibility, and best practices."
  },
  {
    title: "Mastering Data Structures and Algorithms",
    date: "August 12, 2023 | 9:00 AM - 5:00 PM",
    location: "456 Oak Rd, Anytown USA",
    description: "Deep dive into the world of data structures and algorithms. Learn how to optimize your code for performance and efficiency."
  },
  {
    title: "AI and Machine Learning Workshop",
    date: "September 5, 2023 | 10:00 AM - 4:00 PM",
    location: "789 Elm St, Anytown USA",
    description: "Explore the world of AI and Machine Learning. Understand the concepts of supervised and unsupervised learning, and build your own models."
  },
  {
    title: "Cybersecurity Fundamentals",
    date: "October 10, 2023 | 9:00 AM - 3:00 PM",
    location: "101 Pine Ave, Anytown USA",
    description: "An essential workshop on how to protect yourself and your organization from cyber threats. Learn about network security, encryption, and risk management."
  },

];

// Events Component
const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-950 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
      </header>

      <section className="flex flex-wrap justify-center py-12">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Events;
