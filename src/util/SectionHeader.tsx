// SectionHeader.tsx
import { SectionHeaderProps } from "@/constants/types";

const SectionHeader = ({
  title,
  description,
  titleClassName = "",
  descriptionClassName = ""
}: SectionHeaderProps) => {
  return (
    <>
      <h2
        className={`font-medium mb-2 md:mb-3 ${titleClassName}`}
        style={{ 
          color: "#000000", 
          fontSize: "clamp(1.5rem, 5vw, 1.875rem)", 
          fontWeight: "500",
          lineHeight: "1.3"
        }}
      >
        {title}
      </h2>
      <p
        className={`text-gray-600 ${descriptionClassName}`}
        style={{ 
          color: "#282828", 
          fontSize: "clamp(1rem, 3vw, 1.25rem)",
          fontWeight: "300",
          lineHeight: "1.5"
        }}
      >
        {description}
      </p>
    </>
  );
};

export default SectionHeader;