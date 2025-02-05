import { Bidang, Inti } from "@/app/lib/definitions";
import Image from "next/image";

export function HomePengurus({ data }: { data: Bidang }) {
  return (
    <div className="relative overflow-hidden text-center">
      <div className="w-full py-40">
        <div className="title mb-10 pb-40 md:pb-0">
          <h1 className="mb-3 text-6xl font-extrabold uppercase text-primary">
            Bidang {data.id}
          </h1>
          <h4 className="px-10 text-sm uppercase text-primary">{data.nama}</h4>
        </div>

        <Image
          src={data.introimage}
          alt={data.nama}
          quality={100}
          className="absolute bottom-16 left-1/2 w-full -translate-x-1/2 md:static md:translate-x-0"
          width={1300}
          height={500}
        />

        <img
          src="/shapes/Vector 3.png"
          className="absolute bottom-0 left-0 h-1/5 w-full md:h-1/3"
          alt="shape"
        />
      </div>
    </div>
  );
}

export function HomeInti({ data }: { data: Inti }) {
  return (
    <div className="relative overflow-hidden text-center">
      <div className="w-full py-40">
        <div className="title mb-10 pb-40 md:pb-0">
          <h1 className="mb-3 text-6xl font-extrabold uppercase text-primary">
            {data.nama}
          </h1>
        </div>

        <Image
          src={data.introimage}
          alt={data.nama}
          quality={100}
          className="absolute bottom-16 left-1/2 w-full -translate-x-1/2 md:static md:translate-x-0"
          width={1300}
          height={500}
        />

        <img
          src="/shapes/Vector 3.png"
          className="absolute bottom-0 left-0 h-1/5 w-full md:h-1/3"
          alt="shape"
        />
      </div>
    </div>
  );
}
