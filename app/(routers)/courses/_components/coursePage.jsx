import React from 'react';
import courses from '../../../courseData'; // Adjust path as per your file structure

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {courses.map(course => (
        <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Course Thumbnail */}
          <img src={course.thumbnailUrl} alt={course.title} className="w-full h-40 object-cover" />

          {/* Course Details */}
          <div className="p-4">
            {/* Course Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full overflow-hidden h-2 mb-2">
              <div className="bg-cyan-600 h-full" style={{ width: `${course.progress}%` }}></div>
            </div>

            {/* Price or Free */}
            <div className="flex items-center mb-2">
              <span className="text-gray-600">
                {course.isPaid ? `Price: $${course.price}` : 'Free'}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              {course.isEnrolled ? (
                <>
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md shadow">
                    Continue Learning
                  </button>
                  
                </>
              ) : (
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md shadow">
                  {course.isPaid ? 'Enroll Now' : 'Start Learning'}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
