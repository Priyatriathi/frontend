import { Briefcase, Clock } from "lucide-react";
import { useState } from "react";

export default function JobBoard() {
  const jobListings = [
    {
      company: "Google",
      visitingDate: "4/09/2024, 9:00 PM",
    },
    {
      company: "Facebook",
      visitingDate: "16/09/2024, 1:00 PM",
    },
    {
      company: "Amazon",
      visitingDate: "7/09/2024, 8:00 AM",
    },
    {
      company: "Fico",
      visitingDate: "10/09/2024, 10:00 PM",
    },
    {
      company: "SAP Lab",
      visitingDate: "13/09/2024, 10:00 AM",
    },
    {
      company: "Dell",
      visitingDate: "1/09/2024, 10:00 AM",
    },
    {
      company: "TechCorp",
      visitingDate: "17/09/2024, 10:00 AM",
    },
    {
      company: "DesignHub",
      visitingDate: "18/09/2024, 2:30 PM",
    },
    {
      company: "DataSystems",
      visitingDate: "19/09/2024, 11:00 AM",
    },
    {
      company: "AI Solutions",
      visitingDate: "20/09/2024, 9:00 AM",
    },
    {
      company: "InnovateTech",
      visitingDate: "21/09/2024, 1:00 PM",
    },
    {
      company: "BrightWave",
      visitingDate: "22/09/2024, 3:00 PM",
    },
    {
      company: "Appify",
      visitingDate: "23/09/2024, 12:00 PM",
    },
    {
      company: "CloudWorks",
      visitingDate: "24/09/2024, 10:30 AM",
    },
    {
      company: "BuildIT",
      visitingDate: "25/09/2024, 4:00 PM",
    },
    {
      company: "DevStart",
      visitingDate: "26/09/2024, 11:00 AM",
    },
    {
      company: "NextGenTech",
      visitingDate: "27/09/2024, 1:30 PM",
    },
    {
      company: "FinTech Pro",
      visitingDate: "28/09/2024, 3:00 PM",
    },
    {
      company: "DataVision",
      visitingDate: "29/09/2024, 9:30 AM",
    },
    {
      company: "VisionaryTech",
      visitingDate: "30/09/2024, 2:00 PM",
    },
    {
      company: "QuantumWorks",
      visitingDate: "01/10/2024, 11:30 AM",
    },
    {
      company: "InfoGrid",
      visitingDate: "02/10/2024, 10:00 AM",
    },
    {
      company: "DeepCode",
      visitingDate: "03/10/2024, 9:00 AM",
    },
    {
      company: "NeuroTech",
      visitingDate: "04/10/2024, 4:00 PM",
    },
    {
      company: "SmartWave",
      visitingDate: "05/10/2024, 1:00 PM",
    },
    {
      company: "CyberZone",
      visitingDate: "06/10/2024, 3:30 PM",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10; // Number of jobs to display per page

  // Filter job listings based on search term
  const filteredJobs = jobListings.filter((job) =>
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Get current jobs for the page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous and Next button handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 font-sarif">Job Openings</h2>
          <div className="flex space-x-2">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search companies..."
                className="pl-8 p-2 border border-gray-300 rounded w-full"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
            </div>
            <button className="bg-blue-950 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="py-2 px-4">Company Name</th>
                <th className="py-2 px-4">Visiting Date & Time</th>
                <th className="py-2 px-4">Details</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.length > 0 ? (
                currentJobs.map((job, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 px-4">{job.company}</td>
                    <td className="py-2 px-4 flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.visitingDate}</span>
                    </td>
                    <td className="py-2 px-4">
                      <button className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Glance
                      </button>
                    </td>
                    <td className="py-2 px-4">
                      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Apply
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No companies found. Try adjusting your search terms.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1 ? "bg-gray-300" : "bg-blue-950 text-white"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-950 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages ? "bg-gray-300" : "bg-blue-950 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}