import React, { useEffect, useState } from "react";
import StudentSidebar from "./StudentSidebar";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedFiles, setSelectedFiles] = useState({}); // Store file per assignment

  useEffect(() => {
    const token = localStorage.getItem("studentToken");

    axios
      .get("http://localhost:3000/student/assignments", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load assignments");
        setLoading(false);
      });
  }, []);

  const handleFileSelect = (assignmentId, event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedFiles((prev) => ({
      ...prev,
      [assignmentId]: file,
    }));
  };

  const handleSubmit = async (assignmentId) => {
    const selectedFile = selectedFiles[assignmentId];

    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const token = localStorage.getItem("studentToken");

      await axios.post(
        `http://localhost:3000/student/submit-assignment/${assignmentId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Assignment Submitted Successfully");

      // ✅ Clear the selected file after successful submission
      setSelectedFiles((prev) => {
        const updated = { ...prev };
        delete updated[assignmentId]; // remove the file for this assignment
        return updated;
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit assignment");
    }
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-xl">
        Loading Assignments...
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex justify-center items-center text-red-600 font-bold">
        {error}
      </div>
    );

  return (
    <div className="flex">
      <StudentSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Assignments</h1>

        {assignments.length === 0 ? (
          <p className="text-gray-500">No assignments available</p>
        ) : (
          assignments.map((a) => {
            const file = selectedFiles[a._id];

            return (
              <div
                key={a._id}
                className="bg-white p-5 rounded-lg shadow-md mb-4 border"
              >
                <h3 className="text-2xl font-semibold mb-2">{a.title}</h3>
                <p className="text-gray-700 mb-2">{a.description}</p>

                {/* Upload button */}
                <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
                  Upload File
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileSelect(a._id, e)}
                  />
                </label>

                {file && (
                  <div className="mt-3">
                    <p className="text-green-600 font-medium">
                      {file.name} added
                    </p>

                    <button
                      onClick={() => handleSubmit(a._id)}
                      className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Assignments;
