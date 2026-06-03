import { useState } from "react";

function SideBarButton({ title, onClick, active }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-15 hover:bg-[#D1BA96] text-white font-bold flex justify-center items-center border-3  border-[#926454]  font-pixel text-[22px]"
      style={{
        marginLeft: "8px",
        padding: "16px",
        borderRadius: "10px",
        backgroundColor: hovered ? "#D1BA96" : active ? "#C3996D" : "#E8CFA7",
        boxShadow:
          "0px 8px 6px rgba(0,0,0,0.3), inset 0px -7px 2px rgba(0,0,0,0.25)",

        textShadow:
          "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
        letterSpacing: "1.5px",
        lineHeight: "1",
      }}
    >
      {title}
    </button>
  );
}

export default SideBarButton;
