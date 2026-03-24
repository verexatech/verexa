import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 sm:gap-3">
        <Image
          src="/logo.png"
          alt="Verexa Logo"
          width={100}
          height={50}
          className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-105"
          priority
        />
        <div className="flex flex-col justify-center items-center drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          <span className="font-heading text-[20px] sm:text-[25px] font-medium leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent uppercase">
            verexa
          </span>
          <span className="text-[7px] sm:text-[9px] font-light tracking-[0.2em] text-foreground/70 uppercase mt-1 leading-none">
            technologies
          </span>
        </div>
      </div>
    </Link>
  );
}
