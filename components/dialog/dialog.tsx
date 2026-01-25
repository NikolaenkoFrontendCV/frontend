"use client";

import { motion } from "framer-motion";
import Button from "../buttons/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { experience } from "@/data/experience";
import { useAppDispatch } from "@/lib/hooks/redux-store";
import { portfolioData } from "@/data/portfolio";
import useGetLang from "@/lib/hooks/get-lang";
import { useEffect, useState } from "react";

const variants = {
  initial: { opacity: 0, display: "none" },
  hidden: { opacity: 0, display: "none", transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export default function Dialog() {
  const dialogContent = useSelector((state: RootState) => state.dialogContent);
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useAppDispatch();
  const lang = useGetLang();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!isLoad) setIsLoad(true);
  }, [isLoad])

  function handleCloseDialog() {
    dispatch({ type: "dialogContent/closeDialog" });
  }

  return (
    <motion.div
      variants={variants}
      initial={!isLoad && 'hidden'}
      animate={dialogContent.isOpen && isLoad ? "visible" : "hidden"}
      className="fixed top-0 left-0 z-100 flex h-screen w-full items-center justify-center bg-gray-900/50 backdrop-blur-sm"
      style={!isLoad ? {display: 'none'} : {display: "flex"}}
    >
      <motion.div
        className="flex max-h-[calc(100vh-80px)] w-full max-w-xl flex-col items-center gap-4 rounded-lg border border-gray-400 bg-gray-900 p-6"
        animate={dialogContent.isOpen ? { scale: 1 } : { scale: 0.8 }}
      >
        <div className="h-full w-full overflow-y-scroll">
          {getContent(dialogContent, lang)}
        </div>
        <Button onClick={handleCloseDialog}>Close</Button>
      </motion.div>
    </motion.div>
  );
}

function getContent(data: { type: string; itemId: number }, lang: "ru" | "en") {
  const defaultValue = () => <div>No Content</div>;
  switch (data.type) {
    case "experience":
      return experience[data.itemId].content({ lang });
    case "cases":
      return portfolioData[data.itemId].content({ lang });
    default:
      return defaultValue();
  }
}
