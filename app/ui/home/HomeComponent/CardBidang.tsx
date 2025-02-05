"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardBidang({
  url,
  name,
  to,
}: {
  name: string;
  url: string;
  to: string;
}) {
  return (
    <Link
      href={to}
      className="group relative h-fit max-h-[150px] overflow-hidden rounded-md"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black bg-opacity-20 transition-all duration-200 group-hover:bg-opacity-100"></div>
      <Image
        src={url}
        alt={name}
        width={200}
        height={200}
        className="h-full w-full"
      />
      <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold uppercase tracking-wide text-white">
        {name}
      </h1>
    </Link>
  );
}
