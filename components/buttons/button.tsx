"use client";

export default function Button({
  style = "filled",
  type = "button",
  children,
  onClick,
}: {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  style?: "filled" | "outlined";
}) {
  switch (style) {
    case "outlined":
      return (
        <button
          type={type}
          onClick={onClick}
          className="border border-[#f5f5f5] border-solid content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0"
        >
          <div
            className="flex flex-col font-lato justify-center leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap"
            data-node-id="I2109:223;2109:198"
          >
            <span className="leading-[99.91000366210938%]">{children}</span>
          </div>
        </button>
      );
    case "filled":
      return (
        <button
          type={type}
          onClick={onClick}
          className="bg-white content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0"
          data-node-id="2109:220"
        >
          <div
            className="flex flex-col font-lato justify-center leading-[0] not-italic relative shrink-0 text-gray-800 text-[20px] whitespace-nowrap"
            data-node-id="I2109:220;2109:201"
          >
            <span className="leading-[99.91000366210938%]">{children}</span>
          </div>
        </button>
      );
  }
}

export function ButtonSet({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="content-stretch flex gap-[20px] items-start relative shrink-0"
      data-name="Contact-buttons"
    >
      {children}
    </div>
  );
}
