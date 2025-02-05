import { getAbout } from "@/app/lib/data";
import { ContainerReveal } from "@/app/ui/Reveal";

export default async function AboutUS() {
  const { about } = await getAbout();

  return (
    <div className="relative">
      <div className="shapebg2 h-fulll">
        <ContainerReveal>
          <div className="container relative flex h-full w-full items-center py-32 text-white">
            <div className="flex flex-wrap items-center">
              <div className="w-full text-center">
                <h1 className="mb-10 text-2xl font-extrabold uppercase md:text-3xl">
                  Belajar dan bekerja sama
                </h1>
                <p className="text-slate-50">{about}</p>
              </div>
              {/* <div className="relative z-10 mt-10 flex w-full justify-center md:mt-0 md:w-1/2 md:pl-10">
                <img
                  src="/images/manfaat.png"
                  alt="manfaat"
                  className="relative z-30 rounded-md"
                />
                <div className="absolute -bottom-5 -right-2 z-20 h-full w-full max-w-80 rounded-md bg-white sm:right-20 md:-right-10 lg:right-20"></div>
              </div> */}
            </div>
          </div>
        </ContainerReveal>
      </div>
    </div>
  );
}
