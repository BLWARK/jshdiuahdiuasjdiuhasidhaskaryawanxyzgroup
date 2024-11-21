import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md text-center">
      <h2 className="text-lg font-semibold">{employee.name}</h2>
      <p className="text-sm text-gray-600">{employee.position}</p>
      <p className="text-xs text-gray-500">NFC Tag: {employee.nfcTag}</p>
    </div>
  );
};

export default EmployeeCard;
