import { CalendarMonth } from "@mui/icons-material";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { CardRevealBottom } from "../../Reveal";
import { Events } from "@/app/lib/definitions";

export default function CardEvent({ data }: { data: Events }) {
  return (
    <CardRevealBottom>
      <Card shadow="sm" className="w-full">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="none"
            radius="none"
            width="100%"
            alt="bukber"
            className="h-[200px] w-full object-center"
            src={`${data.foto}`}
          />
        </CardBody>
        <CardFooter className="border-t border-t-gray-300 text-small">
          <div className="w-full text-center">
            <b className="mt-2 text-xl">{data.nama}</b>
            <div className="my-3 flex items-center justify-center gap-2 text-default-500">
              <CalendarMonth />
              <p>{data.tanggal.split("-").reverse().join("-")}</p>
            </div>
            <Link
              href={`/events/${data.id}`}
              className="text-blue-700 underline"
            >
              Lihat Detail
            </Link>
          </div>
        </CardFooter>
      </Card>
    </CardRevealBottom>
  );
}
