import { getAllAnggotaInti, getIntiData } from "@/app/lib/data";
import { EditIntiForm } from "@/app/ui/admin/FormInti";
import { IntiTable } from "@/app/ui/admin/Tables";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default async function Inti() {
  const inti = await getIntiData();
  const AnggotaInti = await getAllAnggotaInti();
  return (
    <div className="container mb-20 pt-32">
      <div className="mb-5">
        <EditIntiForm detail={inti} />
      </div>
      <div className="mt-5">
        <Button href="/dashboard/pengurus/inti/add" as={Link} className="mb-3">
          Tambah Anggota
        </Button>
        <IntiTable inti={AnggotaInti} />
      </div>
    </div>
  );
}
