import { motion, Variants } from "framer-motion";

type VariantsType = {
  leftToRight: Variants;
  rightToLeft: Variants;
  topToBottom: Variants;
  bottomToTop: Variants;
};

export default function AnimationText({
  children,
  className,
  direction = "leftToRight",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "leftToRight" | "rightToLeft" | "topToBottom" | "bottomToTop";
}) {
  const variants: VariantsType = {
    leftToRight: {
      initial: { opacity: 0, transform: "translateX(-20px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    rightToLeft: {
      initial: { opacity: 0, transform: "translateX(20px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    topToBottom: {
      initial: { opacity: 0, transform: "translateY(-20px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    bottomToTop: {
      initial: { opacity: 0, transform: "translateY(20px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
  };

  return (
    <motion.div
      variants={variants[direction]}
      initial={"initial"}
      whileInView={"animate"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
