import { CardRevealTop } from "../../Reveal";

export default function CardMisi({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <CardRevealTop>
      <div className="glass flex min-h-56 items-center rounded-md p-5 text-black transition duration-150 hover:scale-105">
        <div>
          <h1 className="mb-2 text-2xl">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </CardRevealTop>
  );
}
