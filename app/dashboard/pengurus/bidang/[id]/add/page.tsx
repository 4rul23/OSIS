import { AddAnggotaForm } from "@/app/ui/admin/FormBidang";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="container pb-20 pt-32">
      <AddAnggotaForm id={params.id} />
    </div>
  );
}
