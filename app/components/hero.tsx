"use client";

import foto from "../fotosaya.jpg";
function Profile() {
    return (
      <img
        src={foto.src}
        alt="Muhammad Ashif Barkhiya Warman"
        className="fotosaya"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-gray-400 font-bold" > CV Online</h1>
                <h1 className="text-3xl text-red-400 font-bold">Muhammad Ashif Barkhiya Warman</h1>
                <Profile />
                <p>Saya Adalah Seorang Model Bazzpack, Programmer sejak 2023 dan sedang berkuliah di Masoem University</p>
                </div>
    );
}