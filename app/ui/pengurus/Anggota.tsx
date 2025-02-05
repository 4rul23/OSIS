import { Anggota, AnggotaInti } from "@/app/lib/definitions";
import { CardAnggotaBidang, CardAnggotaInti } from "./components/CardAnggota";

export function AnggotaBidangList({
  anggotas,
  nama,
}: {
  anggotas: Array<Anggota>;
  nama: string;
}) {
  return (
    <div className="container min-h-screen py-28">
      <div className="mb-10 w-full text-center">
        <h3 className="italic text-primary">{nama}</h3>
        <h1 className="mb-4 text-4xl font-bold italic text-primary">
          Anggota Tim
        </h1>
        <p className="text-primary">Terdiri dari {anggotas.length} Anggota</p>
      </div>
      <div className="flex justify-center">
        <div className="flex max-w-screen-sm flex-wrap justify-center gap-10">
          {anggotas &&
            anggotas.map((anggota, index) => (
              <CardAnggotaBidang
                key={anggota.id}
                data={anggota}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export function AnggotaIntiList({
  anggotas,
}: {
  anggotas: Array<AnggotaInti>;
}) {
  return (
    <div className="container min-h-screen py-28">
      <div className="mb-10 w-full text-center">
        <h3 className="italic text-primary">INTI OSIS</h3>
        <h1 className="mb-4 text-4xl font-bold italic text-primary">
          Anggota Tim
        </h1>
        <p className="text-primary">
          Terdiri dari 2 Wakil Ketua dan 4 Anggota Inti
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex max-w-screen-sm flex-wrap justify-center gap-10">
          {anggotas &&
            anggotas.map((anggota) => (
              <CardAnggotaInti key={anggota.id} data={anggota} />
            ))}
        </div>
      </div>
    </div>
  );
}
