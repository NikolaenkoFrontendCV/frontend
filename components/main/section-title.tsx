import { motion } from "framer-motion";

export default function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      className="relative flex h-54.75 w-fit shrink-0 items-end"
      data-name="About-title"
      data-node-id="2109:196"
    >
      <div
        className="absolute top-0 left-0 z-5 flex -translate-x-1/2 flex-col items-center justify-center max-sm:top-auto max-sm:bottom-0"
        data-name="01"
        data-node-id="2109:185"
      >
        <div
          className="relative flex w-full shrink-0 flex-col justify-center bg-linear-to-b from-[#bdbdbd] to-[#171717] bg-clip-text text-[160px] leading-0 max-sm:text-[100px]"
          data-node-id="2109:168"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          <span className="font-manrope leading-54.75 font-bold whitespace-pre-wrap max-sm:leading-34.25 max-[400px]:text-[78px]">
            {number}
          </span>
        </div>
      </div>
      <div
        className="font-manrope top-[165.5px] z-10 flex flex-col justify-center text-[78px] font-bold whitespace-nowrap text-white  max-sm:text-[56px]"
        data-node-id="2109:172"
      >
        <h2 className="leading-[normal] max-[400px]:text-[48px]">{title}</h2>
      </div>
    </motion.div>
  );
}
