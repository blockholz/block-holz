import HeroImage from "@/components/layout/hero/hero-image";
import MaxWidthWrapper from "@/components/max-width-waraper";
import Image from "next/image";
import { BiCheck, BiSolidStar } from "react-icons/bi";

export default function Home() {
  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="absolute -top-20 left-0 hidden w-28 lg:block">
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-50 via-neutral-50/50 dark:bg-gradient-to-t dark:from-neutral-950 dark:via-neutral-950/50" />
              <Image
                src="/imgs/logos/block-holz-logo.webp"
                className="w-full"
                width={1024}
                height={756}
                priority={true}
                alt="block-holz-logo"
              />
            </div>
            <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Alles aus{" "}
              <span className="bg-red-600 px-2 text-white dark:text-neutral-950">
                Holz
              </span>{" "}
              für Ihr Hause
            </h1>
            <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
              Die besten Die besten Holzprodukte für Ihr Zuhause. Schnelle
              Online-Angebote, zügige Ausführungen, hohe Qualität und kostenlose
              Messungen. Die beste Qualität, der beste Preis, direkt aus Polen.
              Füllen Sie das Angebotsformular aus.
            </p>

            <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
              <div className="space-y-2">
                <li className="flex items-center gap-1.5 text-left">
                  <BiCheck className="h-5 w-5 shrink-0 text-green-600" />
                  Die beste Qualität
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <BiCheck className="h-5 w-5 shrink-0 text-green-600" />
                  Der beste Preis
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <BiCheck className="h-5 w-5 shrink-0 text-green-600" />
                  Direkt aus Polen
                </li>
              </div>
            </ul>

            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="flex -space-x-4">
                <Image
                  className="inline-block rounded-full ring-2 ring-orange-300"
                  src="/imgs/website/users-icons/user-1.webp"
                  alt="user image"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block rounded-full ring-2 ring-orange-300"
                  src="/imgs/website/users-icons/user-2.webp"
                  alt="user image"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block rounded-full ring-2 ring-orange-300"
                  src="/imgs/website/users-icons/user-3.webp"
                  alt="user image"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block rounded-full ring-2 ring-orange-300"
                  src="/imgs/website/users-icons/user-1.webp"
                  alt="user image"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block rounded-full ring-2 ring-orange-300"
                  src="/imgs/website/users-icons/user-2.webp"
                  alt="user image"
                  width={40}
                  height={40}
                />
              </div>

              <div className="flex flex-col items-center justify-between sm:items-start">
                <div className="flex gap-0.5">
                  <BiSolidStar className="h-4 w-4 fill-orange-300 text-orange-300" />
                  <BiSolidStar className="h-4 w-4 fill-orange-300 text-orange-300" />
                  <BiSolidStar className="h-4 w-4 fill-orange-300 text-orange-300" />
                  <BiSolidStar className="h-4 w-4 fill-orange-300 text-orange-300" />
                  <BiSolidStar className="h-4 w-4 fill-orange-300 text-orange-300" />
                </div>

                <p>
                  <span className="font-semibold">Hunderte </span>
                  zufriedene Kunden
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full mt-12 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
          <div className="relative md:max-w-xl">
            <img
              src="/imgs/website/schnelles-online-angebotsformular.webp"
              className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
            />
            <img
              src="/imgs/website/lines-around-phone.webp"
              className="absolute -bottom-6 -left-6 w-20 select-none"
            />
            <HeroImage
              className="w-64"
              imgSrc="/imgs/website/block-holz-hero-section-tarrasen.webp"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
