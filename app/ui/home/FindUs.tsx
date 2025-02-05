import Link from "next/link";
import { CardRevealBottom } from "../Reveal";

export default function FindUs() {
  const platforms = ["youtube", "instagram", "twitter"];
  return (
    <div className="w-full pt-20 text-center">
      <CardRevealBottom>
        <div className="container mb-10">
          <h1 className="mb-2 text-4xl">Find Us</h1>
          <p className="italic text-slate-600">
            Program Kerja kami di salurkan melalui platform berikut.
          </p>
        </div>
      </CardRevealBottom>

      {platforms &&
        platforms.map((platform) => (
          <div className="mb-10" key={platform}>
            <CardRevealBottom>
              <div className="findus-link">
                <Link href={""} className="inline">
                  {platform}
                </Link>
              </div>
            </CardRevealBottom>
          </div>
        ))}
    </div>
  );
}
