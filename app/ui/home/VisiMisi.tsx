import { getAbout } from "@/app/lib/data";
import { ContainerReveal } from "../Reveal";
import { Misi } from "@/app/lib/definitions";

export default async function VisiMisi() {
  const { visi, misi } = await getAbout();

  return (
    <div className="relative z-[999] bg-primary py-20 text-white">
      <ContainerReveal>
        <div className="container mb-10 max-w-screen-lg">
          <h1 className="mb-4 text-center text-4xl font-extrabold uppercase">
            Visi & misi Osis stelk
          </h1>
        </div>
      </ContainerReveal>
      <div className="flex w-full justify-center">
        <div className="container max-w-screen-lg text-center">
          <ContainerReveal>
            <div id="visi" className="mb-10">
              <h1 className="mb-5 text-2xl">Visi</h1>
              <p className="text-sm text-slate-50">{visi}</p>
            </div>
          </ContainerReveal>

          <ContainerReveal>
            <div id="misi">
              <h1 className="mb-5 text-2xl">Misi</h1>
              <ol className="ml-5 list-decimal text-justify">
                {misi &&
                  misi.map((m: Misi) => (
                    <li className="mb-2 text-sm text-slate-50" key={m.id}>
                      {m.misi}
                    </li>
                  ))}
              </ol>
            </div>
          </ContainerReveal>
        </div>
      </div>
    </div>
  );
}
