import { getPesanKetos } from "@/app/lib/data";
import { ContainerReveal } from "@/app/ui/Reveal";
import Image from "next/image";

export default async function SambutanKetos() {
  const pesanketos = await getPesanKetos();
  return (
    <div className="container flex min-h-screen w-full translate-y-[8%] items-center">
      <ContainerReveal>
        <div className="flex flex-wrap items-center">
          <div className="order-2 flex w-full justify-center md:order-1 md:w-1/2">
            <Image
              src={`${pesanketos.image}`}
              className="max-w-full"
              height={500}
              width={500}
              alt="ketos"
            />
          </div>
          <div className="order-1 w-full md:order-2 md:w-1/2">
            <h1 className="mb-5 text-2xl font-extrabold text-primary md:text-4xl">
              <span className="mr-5">Pesan Ketua OSIS</span>
            </h1>
            <p className="mb-10">&quot;{pesanketos.pesan}&quot;</p>
            <h2 className="mb-2 text-xl font-bold text-primary md:text-2xl">
              {pesanketos.nama}
            </h2>
            <h4>
              Ketua OSIS Periode{" "}
              <span className="italic">{pesanketos.periode}</span>
            </h4>
          </div>
        </div>
      </ContainerReveal>
    </div>
  );
}
