import { getAllBidang } from "@/app/lib/data";
import { CardRevealBottom } from "../Reveal";
import CardBidang from "./HomeComponent/CardBidang";

export default async function ListBidang() {
  const bidangs = await getAllBidang();

  return (
    <div className="container flex w-full items-center py-20">
      <div className="w-full">
        <div className="flex w-full justify-center">
          <CardRevealBottom>
            <div className="w-full max-w-screen-sm text-center">
              <h1 className="mb-5 text-3xl font-extrabold text-primary md:text-4xl">
                Bidang
              </h1>
              <p className="text-wrap text-sm italic text-slate-600">
                OSIS SMK Telkom Makassar terbagi menjadi 10 bidang agar dapat
                fokus menjalankan program kerja dan tugas masing-masing
              </p>
            </div>
          </CardRevealBottom>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-5">
          {bidangs.map((bidang) => (
            <CardBidang
              name={`bidang ${bidang.id}`}
              url={bidang.cardimage}
              to={`/pengurus/bidang/${bidang.id}`}
              key={bidang.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
