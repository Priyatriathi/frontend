import React from 'react';
import Announcements from './Announcements';
import Resources from './Resources';
import FeaturedCompanies from './FeaturedCompanies';
import Footer from './Footer';
import HomePageImage from './HomePageImage';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Home Page Banner */}
      <HomePageImage />

      {/* Main content: Announcements, Resources, and Featured Companies */}
      <main className="container mx-auto p-8 space-y-12">
        {/* Announcements */}
        <section className="space-y-6">
          <Announcements />
        </section>

        {/* Resources */}
        <section className="space-y-6">
          <Resources />
        </section>

        {/* Featured Companies */}
        <section className="space-y-6">
          <FeaturedCompanies />
        </section>
      </main>

   
    </div>
  );
};

export default Home;
