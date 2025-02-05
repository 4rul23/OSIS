import Link from "next/link";
import { getAllBidang } from "../lib/data";

export default async function Pengurus() {
  const bidangs = await getAllBidang();

  return (
    <div className="py-28">
      <h1 className="mb-5 w-full text-center text-4xl font-bold text-primary">
        Pengurus-Pengurus OSIS
      </h1>
      <ul>
        <li className="mb-5">
          <Link href={"/pengurus/inti"} className="findus-link text-center">
            Inti OSIS
          </Link>
        </li>
        {bidangs.map((bidang, index) => (
          <li className="mb-5" key={index}>
            <Link
              href={`/pengurus/bidang/${bidang.id}`}
              className="findus-link text-center"
            >
              Bidang {bidang.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
