import React from 'react';

const SideBanner = () => {
  // Sample data for recent courses
  const recentCourses = [
    { id: 1, title: 'Introduction to Machine Learning', progress: 30 },
    { id: 2, title: 'Web Development Basics', progress: 20 },
    { id: 3, title: 'Python Programming Fundamentals', progress: 10 },
  ];

  // Function to handle subscribing
  const handleSubscribe = () => {
    // Replace with your actual subscription logic
    alert('You have subscribed!');
  };

  // Function to handle clicking on a course
  const handleCourseClick = (courseId) => {
    // Replace with your logic to navigate to the course page or handle the click event
    console.log(`Clicked on course with ID: ${courseId}`);
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow ml-5">
      {/* Recent Courses */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Recent Courses</h2>
        <ul className="divide-y divide-gray-200">
          {recentCourses.map(course => (
            <li key={course.id} className="py-2 cursor-pointer" onClick={() => handleCourseClick(course.id)}>
              <div className="flex justify-between items-center">
                <span>{course.title}</span>
                <span className="text-gray-600">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full overflow-hidden h-2 mt-1">
                <div className="bg-cyan-600 h-full" style={{ width: `${course.progress}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Subscription Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">Subscribe for Updates</h2>
        <p className="text-gray-600 mb-4">Receive notifications about new courses and updates.</p>
        <button
          onClick={handleSubscribe}
          className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md shadow"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default SideBanner;
