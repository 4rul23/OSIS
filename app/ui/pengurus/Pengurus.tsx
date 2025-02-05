import { getAllAnggotaOnly, getDetailBidang, getKoor } from "@/app/lib/data";
import { TugasUmumBidang } from "./TugasUmum";
import { AnggotaBidangList } from "./Anggota";
import { HomePengurus } from "./HomePengurus";

export default async function PengurusContent({ id }: { id: string }) {
  const bidang = await getDetailBidang(id);
  const anggota = await getAllAnggotaOnly(id);
  const koor = await getKoor(id);
  return (
    <>
      <HomePengurus data={bidang} />
      <TugasUmumBidang data={koor} tugas={bidang.tugasumum} />
      <AnggotaBidangList anggotas={anggota} nama={`Bidang ${id}`} />
    </>
  );
}
