import React, { useRef, useState } from "react";
import useStore from "./Store/Store";

const CourseManager = () => {
  const { course, addCourse, removeCouse, updateCouse } = useStore(
    (state) => state
  );
  const [input, setInput] = useState("");
  const [courseDes, setDescription] = useState("");
  const [flag, setFlag] = useState(false);
  const myRef = useRef(null);
  const [temp, setTemp] = useState(-Infinity);

  const handleAdd = () => {
    const obj = {
      courseId: Date.now(),
      Name: input,
      Description: courseDes,
    };
    addCourse(obj);
    setInput("");
    setDescription("");
  };

  const handleRemove = (id) => {
    removeCouse(id);
  };

  const handleUpdate = (id) => {
    setFlag(true);
    setTemp(id);
    myRef.current.focus();
    let value = course.filter((m) => m.courseId === id);
    setDescription(value[0].Description);
    setInput(value[0].Name);
  };

  const updatating = () => {
    const obj = {
      courseId: temp,
      Name: input,
      Description: courseDes,
    };
    updateCouse(obj.courseId, obj);
    setInput("");
    setDescription("");
    setTemp(-Infinity);
    setFlag(false);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Course Manager
        </h1>

        {/* Add Course Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            {flag ? "Update Course" : "Add New Course"}
          </h2>
          <input
            type="text"
            placeholder="Course Name"
            className="border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 p-3 rounded-md w-full mb-4 transition-all duration-200"
            ref={myRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <textarea
            placeholder="Course Description"
            className="border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 p-3 rounded-md w-full mb-4 transition-all duration-200"
            value={courseDes}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            onClick={flag ? updatating : handleAdd}
            className={`w-full py-3 px-4 rounded-md text-white font-semibold text-lg ${
              flag
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            } transition-all duration-300`}
          >
            {flag ? "Update Course" : "Add Course"}
          </button>
        </div>

        {/* Course List */}
        <ul className="space-y-4">
          {course?.map((c) => (
            <li
              key={c.courseId}
              className="bg-white flex justify-between items-center p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800">{c.Name}</h3>
                <p className="text-gray-600 mt-1">{c.Description}</p>
              </div>
              <div className="flex gap-2">
                {!flag && (
                  <button
                    onClick={() => handleUpdate(c.courseId)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    Update
                  </button>
                )}
                <button
                  onClick={() => handleRemove(c.courseId)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseManager;
