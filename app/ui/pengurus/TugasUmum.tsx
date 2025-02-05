import { Anggota, AnggotaInti } from "@/app/lib/definitions";
import { Instagram } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export function TugasUmumBidang({
  data,
  tugas,
}: {
  data: Anggota;
  tugas: string;
}) {
  console.log(data)
  return (
    <div className="bg-primary">
      <div className="container py-28 md:pt-0">
        <div className="mb-10 w-full text-center text-white">
          <h1 className="mb-5 text-4xl font-extrabold">Tugas Umum</h1>
          <p className="text-sm">{tugas}</p>
        </div>
        <div className="block items-center justify-center gap-5 md:flex">
          <div className="mb-5 flex w-full justify-center md:mb-0 md:w-fit">
            <Image
              src={data.image}
              width={250}
              height={250}
              alt={data.nama}
              className="max-w-sm"
            />
          </div>
          <div className="w-full px-5 text-white md:w-fit">
            <h2 className="mb-2">{data.jabatan}</h2>
            <h1 className="max-w-sm text-wrap text-4xl italic">{data.nama}</h1>
            <span className="my-5 block h-1 w-32 rounded-md bg-white"></span>
            <Link href={data.ig}>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TugasUmumInti({
  data,
  tugas,
}: {
  data: AnggotaInti;
  tugas: string;
}) {
  return (
    <div className="bg-primary">
      <div className="container py-28 md:pt-0">
        <div className="mb-10 w-full text-center text-white">
          <h1 className="mb-5 text-4xl font-extrabold">Tugas Umum</h1>
          <p className="text-sm">{tugas}</p>
        </div>
        <div className="block items-center justify-center gap-5 md:flex">
          <div className="mb-5 flex w-full justify-center md:mb-0 md:w-fit">
            <Image
              src={data.image}
              width={200}
              height={60}
              alt="ketos"
              className="max-w-sm"
            />
          </div>
          <div className="w-full px-5 text-white md:w-fit">
            <h2 className="mb-2">{data.jabatan}</h2>
            <h1 className="text-4xl italic">{data.nama}</h1>
            <span className="my-5 block h-1 w-32 rounded-md bg-white"></span>
            <Link href={data.ig}>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
