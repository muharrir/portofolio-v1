import React, { useState } from "react";

function Card({ gambar, judul, subjudul, goto }) {
  const [ganti, setGanti] = useState(false);
  const [tambah, setTambah] = useState(Number());

  const gantiObject = () => {
    setGanti(!ganti);
    if (ganti === false) {
      setTambah(tambah + 1);
    } else {
      setTambah(tambah - 1);
    }
  };

  return (
    <div className="border-2 border-stone-700 rounded-lg ">
      <div className="p-6">
        <a href={goto} target="_blank">
          <img src={gambar} alt="" className="rounded-lg" />
        </a>
        <div className="flex justify-between items-center mt-5 ">
          <div>
            <h2 className="text-xl font-semibold">{judul}</h2>
            <p className="text-sm mt-2  ">{subjudul}</p>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              onClick={gantiObject}
              class={`cursor-pointer absolute w-6 h-6 right-0 ${
                ganti === true ? "fill-red-500" : "fill-none"
              }`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="mt-7">{tambah} persons liked this!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
