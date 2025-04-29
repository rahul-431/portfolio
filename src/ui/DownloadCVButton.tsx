import React from "react";

const DownloadCVButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Path to your CV in the public folder
    link.download = "Rahul_Mijar_CV.pdf"; // Desired file name
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700 transition"
    >
      Download CV
    </button>
  );
};

export default DownloadCVButton;
