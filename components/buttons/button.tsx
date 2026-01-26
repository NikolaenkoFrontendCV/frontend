"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import AnimationContainer from "../containers/animation-container";

export default function Button({
  style = "filled",
  ...props
}: HTMLMotionProps<"button"> & {
  style?: "filled" | "outlined";
  children: React.ReactNode;
}) {
  let className = {
    background: "",
    text: "",
  };

  switch (style) {
    case "outlined":
      className = {
        background:
          "flex w-fit shrink-0 cursor-pointer content-stretch items-center justify-center rounded-[100px] border border-solid border-[#f5f5f5] px-5 py-2 disabled:cursor-alias disabled:border-gray-500",
        text: "font-lato relative flex shrink-0 flex-col justify-center text-[20px] leading-0 whitespace-nowrap text-[#f5f5f5] not-italic",
      };
      break;
    case "filled":
      className = {
        background:
          "flex w-fit shrink-0 cursor-pointer content-stretch items-center justify-center rounded-[100px] bg-white px-5 py-2 disabled:cursor-default disabled:bg-gray-500",
        text: "font-lato relative flex shrink-0 flex-col justify-center text-[20px] leading-0 whitespace-nowrap text-gray-800 not-italic",
      };
      break;
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{
        opacity: 0.75,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      {...props}
      className={className.background}
    >
      <div className={className.text}>
        <span className="leading-[99.91000366210938%]">{props.children}</span>
      </div>
    </motion.button>
  );
}

export function ButtonSet({ children }: { children: React.ReactNode }) {
  return (
    <AnimationContainer
      direction="bottomToTop"
      className="relative flex shrink-0 content-stretch items-start gap-5 max-[400px]:flex-col max-sm:items-center"
    >
      {children}
    </AnimationContainer>
  );
}
