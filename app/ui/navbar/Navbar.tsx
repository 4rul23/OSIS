import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLink";
import { getAllBidang } from "@/app/lib/data";

export default async function Navbar() {
  const bidangs = await getAllBidang();
  return (
    <div
      id="navbar"
      className="relative z-[9999] flex w-full items-center justify-between bg-white px-5 py-7 md:px-10"
    >
      <div className="flex max-w-80 items-center gap-7">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image src="/icon/telkom.svg" alt="" width={60} height={60} />
          </Link>
          <Link href={"/"}>
            <Image src="/icon/osis.svg" alt="" width={45} height={45} />
          </Link>
        </div>
        <h1 className="mt-1 text-wrap font-extrabold text-black">
          OSIS SMK TELKOM MAKASSAR
        </h1>
      </div>
      <NavLinks bidangs={bidangs} />
    </div>
  );
}
