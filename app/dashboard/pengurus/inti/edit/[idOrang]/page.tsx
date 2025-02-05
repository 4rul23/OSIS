import { getDetailAnggotaInti } from "@/app/lib/data";
import { EditAnggotaForm } from "@/app/ui/admin/FormInti";

export default async function Page({
  params,
}: {
  params: { idOrang: string };
}) {
  const detail = await getDetailAnggotaInti(params.idOrang);
  return (
    <div className="container pb-20 pt-32">
      <EditAnggotaForm data={detail} />
    </div>
  );
}
