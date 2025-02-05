"use client";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="v bg-slate-950 px-5 py-32">
      <div className="block w-full justify-around gap-5 text-white md:flex">
        <div className="mb-10 w-full max-w-sm">
          <h1 className="mb-3 text-2xl">Contact Us</h1>
          <p className="mb-1 text-slate-50">
            Jl. A. P. Pettarani No.4, Gn. Sari, Kec. Rappocini, Kota Makassar.
          </p>
          <p className="mb-3">osisstelkmks@gmail.com</p>
        </div>
        <div className="mb-10 mt-2 w-fit min-w-52">
          <h1 className="mb-3 text-2xl">Follow Us</h1>
          <div className="text-slate-50">
            <ul className="flex gap-5">
              <li className="transition duration-200 hover:-translate-y-1">
                <Link href={"https://www.instagram.com/osisstelkmks/"}>
                  <FaInstagram size={24} />
                </Link>
              </li>
              <li className="transition duration-200 hover:-translate-y-1">
                <Link href={"https://www.tiktok.com/@osisstelkmks"}>
                  <FaTiktok size={24} />
                </Link>
              </li>
              {/* <li className="transition duration-200 hover:-translate-y-1">
                <Link href={""}>
                  <FaYoutube size={24} />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="mt-2 w-fit min-w-52">
          <h1 className="mb-3 text-2xl">Usefull Links</h1>
          <div className="text-slate-50">
            <ul>
              <li className="mb-2">
                <Link
                  href={"/"}
                  className="underline transition duration-200 hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={"/pengurus"}
                  className="underline transition duration-200 hover:text-primary"
                >
                  Bidang
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={"/events"}
                  className="underline transition duration-200 hover:text-primary"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
