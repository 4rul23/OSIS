import { Anggota, AnggotaInti } from "@/app/lib/definitions";
import { Instagram } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export function CardAnggotaBidang({
  data,
  index,
}: {
  data: Anggota;
  index: number;
}) {
  return (
    <div className="w-[300px]">
      <div className="relative h-[300px] w-[300px] px-5">
        <div className="absolute bottom-0 left-0 right-0 top-16 -z-[99] w-full rounded-md bg-primary"></div>
        <Image
          src={data.image}
          width={250}
          height={250}
          alt={data.nama}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
        />
      </div>
      <div className="px-5 py-2">
        <h1 className="mb-2 mt-1 text-xl italic text-primary">{data.nama}</h1>
        <h3 className="font-bold text-primary">
          {data.jabatan} {index + 1}
        </h3>
        <span className="my-2 block h-1 w-32 rounded-md bg-primary"></span>
        <Link href={data.ig} className="text-primary">
          <Instagram />
        </Link>
      </div>
    </div>
  );
}

export function CardAnggotaInti({ data }: { data: AnggotaInti }) {
  return (
    <div className="w-[300px]">
      <div className="relative h-[300px] w-[300px] px-5">
        <div className="absolute bottom-0 left-0 right-0 top-16 -z-[99] w-full rounded-md bg-primary"></div>
        <Image
          src={data.image}
          width={250}
          height={250}
          className="absolute bottom-0 left-1/2 h-[330px] -translate-x-1/2 object-cover"
          alt="waketos"
        />
      </div>
      <div className="px-5 py-2">
        <h1 className="mb-2 mt-1 text-xl italic text-primary">{data.nama}</h1>
        <h3 className="font-bold text-primary">{data.jabatan}</h3>
        <span className="my-2 block h-1 w-32 rounded-md bg-primary"></span>
        <Link href={data.ig} className="text-primary">
          <Instagram />
        </Link>
      </div>
    </div>
  );
}
