import { get3Events } from "@/app/lib/data";
import { CardRevealBottom, CardRevealTop } from "../Reveal";
import CardEvent from "./HomeComponent/CardEvent";

export default async function Events() {
  const events = await get3Events();
  return (
    <div className="container min-h-screen w-full py-28">
      <div className="w-full text-center">
        <CardRevealBottom>
          <h1 className="mb-2 text-3xl font-bold text-primary">Events</h1>
        </CardRevealBottom>
        <CardRevealTop>
          <p className="text-wrap text-sm italic text-slate-600">
            Berikut ini adalah event-event yang baru kami selesaikan.
          </p>
        </CardRevealTop>
      </div>
      <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {events &&
          events.map((event) => <CardEvent key={event.id} data={event} />)}
      </div>
    </div>
  );
}
