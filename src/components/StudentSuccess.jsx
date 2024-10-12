import React from 'react';


const StudentSuccess = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-12 text-center">
      {/* Success Button */}
   
   

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">
        Inspiring Stories from Our Students
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 mb-8">
        Hear from our students about their journey and how the Training and
        Placement Cell has helped them achieve their goals.
      </p>

      {/* Student Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.bysCjyPD6sPcGaVmErAsHgHaHx&pid=Api&P=0&h=180"
            alt="Samantha Doe"
            className="rounded-full h-20 w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Mansi Birla</h3>
          <p className="text-gray-500 mb-4">Software Engineer, Google</p>
          <p className="text-sm text-gray-700">
            "The Training and Placement Cell provided me with the resources
            and guidance I needed to land my dream job. I'm grateful for the
            support and opportunities they offered."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img

             src="https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png"
            alt="John Smith"
            className="rounded-full h-20 w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Priya Tripathi</h3>
          <p className="text-gray-500 mb-4">Product Manager, Amazon</p>
          <p className="text-sm text-gray-700">
            "The Training and Placement Cell helped me develop the skills and
            confidence I needed to excel in my interviews. I'm grateful for
            the support they provided."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img             src="https://statinfer.com/wp-content/uploads/dummy-user.png"
            alt="Emily Johnson"
            className="rounded-full h-20 w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">vicky </h3>
          <p className="text-gray-500 mb-4">Data Analyst, Microsoft</p>
          <p className="text-sm text-gray-700">
            "The Training and Placement Cell's resources and workshops were
            invaluable in helping me prepare for my career. I'm grateful for
            the opportunities they provided."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;
