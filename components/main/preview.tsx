"use client";

import { motion } from "framer-motion";
import TypingText from "../typography/typing-text";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, display: "none" },
  visible: { opacity: 1 },
};

export default function Preview() {
  const path = usePathname();

  let message: string = "";

  if (path.includes("/ru")) {
    message = "Добро пожаловать!";
  } else {
    message = "Welcome!";
  }

  return (
    <motion.div
      variants={variants}
      initial={"visible"}
      animate={"hidden"}
      transition={{ delay: 2.2, duration: 1.3 }}
      className="fixed top-0 left-0 z-110 flex h-screen w-screen items-center justify-center bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 10 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <TypingText
          className="text-7xl font-bold tracking-wide"
          text={message}
          typingSpeed={80}
        ></TypingText>
      </motion.div>
    </motion.div>
  );
}
