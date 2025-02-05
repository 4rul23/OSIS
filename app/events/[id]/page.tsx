import { getDetailEvent } from "@/app/lib/data";
import { CalendarMonth } from "@mui/icons-material";
import Image from "next/image";

export default async function EventDetail({
  params,
}: {
  params: { id: string };
}) {
  const event = await getDetailEvent(params.id);
  return (
    <div className="container w-full max-w-screen-lg py-32">
      <h1 className="text-center text-4xl font-bold text-primary">
        {event.nama}
      </h1>
      <div className="my-5 flex w-full justify-center">
        <Image
          src={event.foto}
          alt="bukber"
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>
      <div>
        <p className="mb-5 flex items-center gap-2">
          <CalendarMonth />
          <span>{event.tanggal.split("-").reverse().join("-")}</span>
        </p>
        <p className="mb-2 text-default-500">{event.deskripsi}</p>
      </div>
    </div>
  );
}
