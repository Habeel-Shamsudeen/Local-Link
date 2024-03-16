import React from 'react';

const SelectButton = ({ label, selected, onClick }) => {
  let buttonClasses = '';

  // Basic Styles
  buttonClasses += 'inline-flex items-center justify-center py-2 px-4 rounded-lg transition duration-200 shadow-sm mx-1';

  // Selected Styles
  if (selected) {
    buttonClasses += ' bg-black text-white border-0 hover:bg-gray-800';
  } else {
    buttonClasses += ' bg-white text-gray-700 border border-gray-300 hover:bg-gray-100';
  }


  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className="font-bold">{label}</span>
    </button>
  );
};

export default SelectButton;