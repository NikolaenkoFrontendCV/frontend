import { motion } from "framer-motion";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`min-h-content flex h-full flex-col gap-2.5 rounded-[20px] border border-gray-400 p-2.5 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}
