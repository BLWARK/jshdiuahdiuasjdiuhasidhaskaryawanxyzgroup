'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { employees } from '../../data/Employees';
import Image from 'next/image';

const ProfilePage = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get('username'); // Ambil parameter 'username'

  // Cari data karyawan berdasarkan username
  const employee = employees.find(
    (emp) => emp.name.toLowerCase() === username?.toLowerCase()
  );

  if (!employee) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">Employee Not Found</h1>
        <p>Sorry, we couldn&apos;t find the employee you&apos;re looking for.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="bg-white p-6 shadow-md rounded-md text-center space-y-4">
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src={employee.profilePic}
            alt={`${employee.name}&apos;s profile`}
            className="rounded-full object-cover"
            fill // Memenuhi elemen pembungkus
          />
        </div>
        <h1 className="text-2xl font-bold">{employee.name}</h1>
        <p className="text-sm text-gray-600">{employee.position}</p>
        <p className="text-xs text-gray-500">NFC Tag: {employee.nfcTag}</p>
        <p className="text-gray-700">{employee.about}</p>
        <a
          href={`mailto:${employee.email}`}
          className="text-blue-500 underline"
        >
          {employee.email}
        </a>
        <a
          href={`https://wa.me/${employee.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 underline block"
        >
          WhatsApp: {employee.whatsapp}
        </a>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <ProfilePage />
    </Suspense>
  );
}
