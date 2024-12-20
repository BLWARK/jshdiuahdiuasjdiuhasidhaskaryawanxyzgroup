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
          {/* <Image
            src={employee.banner} // Gunakan banner yang sesuai dengan karyawan
            alt="Banner"
            className="object-cover"
            fill
          /> */}
           <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/BN1.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>
          {/* Overlay Hitam */}
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Foto Profil */}
        <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2">
          <div className="w-[180px] h-[180px] relative rounded-full overflow-hidden border-4 border-cyan-400">
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
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-2xl font-bold">{employee.name}</h1>
            <p className="text-md -mt-4 text-white">{employee.position}</p>
            
            
          </div>

           {/* Ikon Media Sosial */}
           <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href={`${employee.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/Telegram.png" // Path gambar Telegram
                alt="Telegram"
                width={40}
                height={40}
              />
            </a>
            <a
              href={`${employee.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/Instagram.png" // Path gambar Instagram
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
            <a
              href={`${employee.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/Xtwit.png" // Path gambar Twitter
                alt="Twitter"
                width={40}
                height={40}
              />
            </a>
            <a
              href={`${employee.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/Linkedin.png" // Path gambar LinkedIn
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
            <a
              href={`mailto:${employee.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10"
            >
              <Image
                src="/Email.png" // Path gambar LinkedIn
                alt="Email"
                width={40}
                height={40}
              />
            </a>
            
          </div>

          {/* Garis Pemisah */}
          <div className="w-full h-[1px] bg-slate-200"></div>
          

          

          
          {/* <div className="w-full px-5 py-5 gap-3 flex flex-col justify-center items-center text-left font-bold">
            <p className="text-white text-[14px]">Phone: {employee.whatsapp}</p>
            <p className="text-white text-[14px]">Email: {employee.whatsapp}</p>
            <p className="text-white text-[14px]">Address: {employee.whatsapp}</p>
          </div> */}

         

          {/* Tombol Tambahan */}
          <div className="mt-5">
            <a
                    

            href={`https://wa.me/${employee.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white w-[380px] h-[65px] flex justify-center items-center gap-3 bg-gradient-to-bl from-cyan-200 to-cyan-600 rounded-full "
            >
                 <Image
                src="/WA.png" // Path gambar Telegram
                alt="Telegram"
                width={40}
                height={40}
              />
              Whatsapp
            </a>
            <a
              href="https://xyzgroup.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  w-[380px] h-[65px] flex justify-center items-center mt-5 gap-3 bg-gradient-to-bl from-cyan-200 to-cyan-600 rounded-full"
            >
                <Image
                src="/Web.png" // Path gambar Telegram
                alt="Telegram"
                width={40}
                height={40}
              />
              Website
            </a>
           
          </div>
          <div className="py-5 flex justify-center items-center text-[10px] italic font-light text-white">
        <p>© Copyrights 2024 XYZ Creative Group All rights reserved</p>
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
