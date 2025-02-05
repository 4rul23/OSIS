import { getDetailAnggota } from "@/app/lib/data";
import { EditAnggotaForm } from "@/app/ui/admin/FormBidang";

export default async function Page({
  params,
}: {
  params: { idOrang: string };
}) {
  const data = await getDetailAnggota(params.idOrang);
  return (
    <div className="container pb-20 pt-32">
      <EditAnggotaForm data={data} />
    </div>
  );
}
