import { getDetailEvent } from "@/app/lib/data";
import { EditEventForm } from "@/app/ui/admin/FormEvents";

export default async function EditEvent({
  params,
}: {
  params: { id: string };
}) {
  const detail = await getDetailEvent(params.id);
  return (
    <div className="container pb-20 pt-32">
      <EditEventForm data={detail} />
    </div>
  );
}
