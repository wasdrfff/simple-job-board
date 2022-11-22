type TProps = {
  descriptions: string[];
};
export const Description = ({ descriptions }: TProps) => {
  return (
    <>
      {descriptions.map((text, index) => {
        return (
          <span key={text} className={index % 2 ? "italic font-bold text-[#3A4562]" : ""}>
            {text}
          </span> 
        );
      })}
    </>
  );
};
