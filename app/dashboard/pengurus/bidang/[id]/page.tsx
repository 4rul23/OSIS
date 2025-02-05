import { getAllAnggota, getDetailBidang } from "@/app/lib/data";
import { EditBidangForm } from "@/app/ui/admin/FormBidang";
import { AnggotaTable } from "@/app/ui/admin/Tables";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default async function Bidang({ params }: { params: { id: string } }) {
  const detail = await getDetailBidang(params.id);
  const anggotas = await getAllAnggota(params.id);

  return (
    <div className="container pb-20 pt-32">
      <div className="mb-5">
        <EditBidangForm params={params} detail={detail} />
      </div>

      <div className="mt-5 w-full rounded-lg border border-gray-200 p-5 shadow">
        <h1 className="text-4xl">List Anggota Bidang {params.id}</h1>
        <Button
          href={`/dashboard/pengurus/bidang/${params.id}/add`}
          as={Link}
          className="my-4"
        >
          Tambah Anggota
        </Button>
        <AnggotaTable anggotas={anggotas} />
      </div>
    </div>
  );
}
