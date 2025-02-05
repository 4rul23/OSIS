import { getAllEvents } from "@/app/lib/data";
import { EventsTable } from "@/app/ui/admin/Tables";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default async function Events() {
  const events = await getAllEvents();
  return (
    <div className="container pb-20 pt-32">
      <Button href={"/dashboard/events/add"} as={Link} className="mb-5">
        Tambah Event
      </Button>
      <EventsTable events={events} />
    </div>
  );
}
