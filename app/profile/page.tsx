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
      <div className="text-center">
        <h1 className="text-xl font-bold">Employee Not Found</h1>
        <p>Sorry, we couldn&apos;t find the employee you&apos;re looking for.</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="text-white rounded-md text-center relative">
        {/* Banner */}
        <div className="w-full h-[250px] bg-gray-800 relative">
          {/* Gambar Banner */}
          <Image
            src={employee.banner} // Gunakan banner yang sesuai dengan karyawan
            alt="Banner"
            className="object-cover"
            fill
          />
          {/* Overlay Hitam */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Foto Profil */}
        <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2">
          <div className="w-[180px] h-[180px] relative rounded-full overflow-hidden border-4 border-white">
            <Image
              src={employee.profilePic}
              alt={`${employee.name}&apos;s profile`}
              className="object-cover"
              fill
            />
          </div>
        </div>

        {/* Informasi Karyawan */}
        <div className="flex flex-col justify-center items-center gap-4 py-20 px-3">
          <div className="flex flex-col gap-4 mt-5">
            <h1 className="text-2xl font-bold">{employee.name}</h1>
            <p className="text-md -mt-4 text-white">{employee.position}</p>
            <p className="text-white font-thin text-[14px] ">{employee.about}</p>
          </div>

           {/* Ikon Media Sosial */}
           <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/images/icons/telegram.png" // Path gambar Telegram
                alt="Telegram"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/images/icons/instagram.png" // Path gambar Instagram
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/images/icons/twitter.png" // Path gambar Twitter
                alt="Twitter"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/images/icons/linkedin.png" // Path gambar LinkedIn
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
          </div>

          {/* Garis Pemisah */}
          <div className="w-full h-[1px] bg-slate-200"></div>
          

          

          
          <div className="w-full px-5 py-5 gap-3 flex flex-col justify-center items-center text-left font-bold">
            <p className="text-white text-[14px]">Phone: {employee.whatsapp}</p>
            <p className="text-white text-[14px]">Email: {employee.whatsapp}</p>
            <p className="text-white text-[14px]">Address: {employee.whatsapp}</p>
          </div>

         

          {/* Tombol Tambahan */}
          <div className="mt-10">
            <a
              href={`${employee.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline block px-[120px] py-5 bg-blue-300 rounded-full"
            >
              {employee.whatsapp}
            </a>
            <a
              href={`${employee.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline block px-[120px] mt-5 py-5 bg-blue-300 rounded-full"
            >
              {employee.whatsapp}
            </a>
            <a
              href={`https://wa.me/${employee.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline block px-[120px] mt-5 py-5 bg-blue-300 rounded-full"
            >
              {employee.whatsapp}
            </a>
          </div>
        </div>
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
