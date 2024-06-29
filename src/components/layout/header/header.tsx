import MaxWidthWrapper from "@/components/max-width-waraper";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { BiRightArrowAlt } from "react-icons/bi";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] border-b border-neutral-200 bg-white/85 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/85">
      <MaxWidthWrapper className="py-5">
        <nav className="flex">
          <Link href={"/"} className="group flex items-center">
            <Image
              src="/imgs/logos/block-holz-logo.webp"
              alt="blockholz logo"
              width={50}
              height={50}
              priority={true}
              className="z-30 mr-3"
            />
            <span className="z-30 mr-3 hidden pl-2 text-2xl font-black group-hover:text-primary sm:flex sm:text-3xl">
              block-holz
            </span>
          </Link>
          <nav className="flex flex-1 items-center justify-end space-x-2">
            <Link
              href={"/kontakt"}
              className={buttonVariants({
                size: "sm",
                variant: "default",
              })}
            >
              <span>Angebotsformular</span>{" "}
              <BiRightArrowAlt className="mt-0.5" />
            </Link>
            {/*  <ThemeToggle></ThemeToggle> */}
          </nav>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
