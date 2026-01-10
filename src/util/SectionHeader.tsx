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
        className={`font-medium mb-2 ${titleClassName}`}
        style={{ color: "#000000", fontSize: "30px", fontWeight: "500" }}
      >
        {title}
      </h2>
      <p
        className={`text-gray-600 ${descriptionClassName}`}
        style={{ color: "#282828", fontSize: "20px", fontWeight: "300" }}
      >
        {description}
      </p>
    </>
  );
};

export default SectionHeader;