import { motion } from "framer-motion";

export default function EllipsFon({
  top,
  bottom,
  left,
  right,
  x,
  y,
  rotate,
}: {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  x: number;
  y: number;
  rotate: number;
}) {
  return (
    <motion.svg
      className="absolute z-0"
      style={{
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        width: x * 2 + "px",
        height: y * 2 + "px",
        transform: "rotate(" + rotate + "deg)",
      }}
    >
      {/* <defs>
                <filter id="blur">
                    <feGaussianBlur stdDeviation="120" />
                </filter>
            </defs> */}
      <defs>
        {/* <radialGradient
                    id="ellipseGradient"
                    cx="50%"
                    cy="50%"
                    rx="50%"
                    ry="50%"
                    gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#D9D9D9" stopOpacity="0.1" />
                        <stop offset="10%" stopColor="#D9D9D9" stopOpacity="0.1" />
                        <stop offset="65%" stopColor="#D9D9D9" stopOpacity="0" />
                </radialGradient> */}
        <radialGradient
          id="ellipseGradient"
          cx="50%"
          cy="50%"
          rx="50%"
          ry="50%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#D9D9D9" stopOpacity="0.1" />
          <stop offset="30%" stopColor="#D9D9D9" stopOpacity="0.09" />
          <stop offset="70%" stopColor="#D9D9D9" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#D9D9D9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={x} cy={y} rx={x} ry={y} fill="url(#ellipseGradient)" />
      {/* <ellipse cx={x} cy={y} rx={x} ry={y}/> */}
    </motion.svg>
  );
}
