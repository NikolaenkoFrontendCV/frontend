"use client";

import { motion } from "framer-motion";
import Button from "../buttons/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { experience } from "@/data/experience";
import { useAppDispatch } from "@/lib/hooks/redux-store";

const variants = {
  initial: {opacity: 0, display: "none"},
  hidden: { opacity: 0, display: "none", transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export default function Dialog() {
  const dialogContent = useSelector((state: RootState) => state.dialogContent);
  const dispatch = useAppDispatch();

  function handleCloseDialog() {
    dispatch({ type: "dialogContent/closeDialog" });
  }

  return (
    <motion.div
      variants={variants}
      animate={dialogContent.isOpen ? "visible" : "hidden"}
      className="fixed top-0 left-0 z-100 flex h-screen w-full items-center justify-center bg-gray-900/50 backdrop-blur-sm"
    >
      <motion.div
        className="flex w-full max-w-xl flex-col items-center gap-4 rounded-lg border border-gray-400 bg-gray-900 p-6"
        animate={dialogContent.isOpen ? { scale: 1 } : { scale: 0.8 }}
      >
        {getContent(dialogContent)()}
        <Button onClick={handleCloseDialog}>Close</Button>
      </motion.div>
    </motion.div>
  );
}

function getContent(data: { type: string; itemId: number }) {
  const defaultValue = () => <div>No Content</div>;
  switch (data.type) {
    case "experience":
      return experience[data.itemId].content;
    default:
      return defaultValue;
  }
}
