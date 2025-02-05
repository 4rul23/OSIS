import { AnggotaIntiList } from "@/app/ui/pengurus/Anggota";
import { HomeInti } from "../../ui/pengurus/HomePengurus";
import { TugasUmumInti } from "../../ui/pengurus/TugasUmum";
import { getAllAnggotaIntiOnly, getIntiData, getKetos } from "@/app/lib/data";

export default async function Inti() {
  const inti = await getIntiData();
  const anggotas = await getAllAnggotaIntiOnly();
  const ketos = await getKetos();
  return (
    <>
      <HomeInti data={inti} />
      <TugasUmumInti data={ketos} tugas={inti.tugasumum} />
      <AnggotaIntiList anggotas={anggotas} />
    </>
  );
}
