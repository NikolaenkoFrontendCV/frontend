import Image from "next/image";

export default function CardMedia({
  className,
  src,
  alt = "",
}: {
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-620/387 w-full">
      <Image
        alt={alt}
        className={`overflow-hidden rounded-[10px] ${className || ""}`}
        src={src}
        fill
        objectFit="cover"
      ></Image>
    </div>
  );
}
