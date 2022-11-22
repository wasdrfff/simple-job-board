type TProps = {
  benefits: string[];
};
export const Benefit = ({ benefits }: TProps) => {
  return (
    <>
      {benefits.map((benefit) => {
        return (
          <div key={benefit} className="flex justify-center  border border-[#FFCF00] rounded-lg bg-rusty  py-4 max-w-[220px] w-full">
            <span className="text-[#988B49] font-bold">{benefit}</span>
          </div>
        );
      })}
    </>
  );
};
