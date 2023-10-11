

import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClipboardJS from 'clipboard';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-56">
      <h1>Continue:</h1>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="mx-auto py-3 px-16 ml-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
      >
        Login
      </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

function Modal({ onClose }) {
   // Define a unique ID for the code element to copy.
  const codeElementId = 'code-to-copy';

  // Function to copy the code to the clipboard.
  const copyCodeToClipboard = () => {
    const codeElement = document.getElementById(codeElementId);
    const clipboard = new ClipboardJS('.copy-icon', {
      text: () => codeElement.textContent,
    });

    clipboard.on('success', () => {
      clipboard.destroy();
      alert('Code copied to clipboard!');
    });

    clipboard.on('error', () => {
      alert('Failed to copy code. You can manually select and copy it.');
    });

    clipboard.onClick({ delegateTarget: codeElement }); // Trigger Clipboard.js manually
  
  };
  return (
     <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg z-10 relative">
        <h2 className="text-xl font-semibold mb-4">Button Styles</h2>
        <button
          onClick={copyCodeToClipboard}
          className="absolute top-2 right-2 p-2 cursor-pointer copy-icon"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <div className="max-h-60 overflow-y-auto">
          <pre id={codeElementId}>
            <code>{`
${"mx-auto py-4 px-17 ml-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"}`}
            </code>
          </pre>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
    // npm start
  );
}

export default App;
