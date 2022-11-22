type TProps = {
  employmentTypes: string[];
};
export const EmploymentType = ({ employmentTypes }: TProps) => {
  return (
    <>
      {employmentTypes.map((employment_type) => {
        return (
          <div
            key={employment_type}
            className="flex justify-center border border-custom-blue rounded-lg bg-turquoise py-4 max-w-[220px] w-full"
          >
            <span className="text-[#55699E] font-bold	">{employment_type}</span>
          </div>
        );
      })}
    </>
  );
};
