import Image from "next/image";
export function Logo({ large = false }: { large?: boolean }) {
  return (
    <Image
      src="/logo/liam-logo.webp"
      alt="Liam Pressure Cleaning"
      width={1070}
      height={930}
      className={large ? "logo logo-large" : "logo"}
      sizes={large ? "240px" : "82px"}
      priority={!large}
    />
  );
}
