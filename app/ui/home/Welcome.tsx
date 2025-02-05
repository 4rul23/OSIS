import { ContainerReveal } from "@/app/ui/Reveal";
import Image from "next/image";
import { raleway } from "../fonts";
import { getIntroImage } from "@/app/lib/data";

export default async function WelcomePage() {
  const { image } = await getIntroImage();
  return (
    <div className="relative min-h-screen">
      <ContainerReveal>
        <div className="container w-full">
          <div className="block w-full py-28 lg:py-52 xl:flex xl:items-center">
            <div className="w-full xl:w-1/2">
              <h3
                className={`text-2xl lg:text-4xl ${raleway.className} antialiased`}
              >
                Welcome
              </h3>
              <div className="block text-5xl font-extrabold text-primary md:text-6xl">
                <h1>OSIS SMK TELKOM</h1>
                <span className="block">MAKASSAR</span>
              </div>
            </div>
          </div>
        </div>
      </ContainerReveal>
      <Image
        src={image}
        alt="intro"
        className="absolute bottom-10 right-1/2 -z-10 translate-x-1/2 md:bottom-20 lg:bottom-0 xl:bottom-16 xl:right-16 xl:translate-x-16"
        width={600}
        height={600}
      />
      <Image
        src="/shapes/Vector 3.svg"
        className="absolute -bottom-1 left-0 w-full md:-bottom-10 lg:-bottom-1/4"
        alt="shape"
        width={1000}
        height={400}
      />
    </div>
  );
}
