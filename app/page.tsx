import React from 'react';
// import { employees } from '../data/Employees'; // Mengimpor data karyawan
// import EmployeeCard from '../components/employe-card/EmployeeCard'; // Mengimpor komponen EmployeeCard

const HomePage = () => {
  return (
    <div className="">
      <h1 className="text-2xl  font-bold text-center mb-6">No data</h1>
      <div className="space-y-4">
        {/* {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))} */}
      </div>
    </div>
  );
};

export default HomePage;
