type TProps = {
  benefits: string[];
};
export const ListBenefits = ({ benefits }: TProps) => {
  return (
    <>
      <span className="text-[18px] text-[#3A4562]">
        Our physicians enjoy a wide range of benefits, including:
      </span>
      <ul className="marker:text-gray-squere marker:text-[25px]  list-[square] pl-8">
        {benefits.map((benefit) => (
          <li className="text-[18px]" key={benefit}>
            {benefit + "."}
          </li>
        ))}
      </ul>
    </>
  );
};
