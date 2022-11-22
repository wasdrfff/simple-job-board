import { useHistory, useParams } from "react-router-dom";
import { Benefit } from "../../components/benefit/benefit";
import { Description } from "../../components/description";
import { EmploymentType } from "../../components/empoyment-type";
import { Picture } from "../../components/image/image";
import { ListBenefits } from "../../components/list-befit/list-benefit";
import { SimpleMap } from "../../components/map";
import arrow from "./assets/images/arrow.svg";
import share from "./assets/images/share.svg";
import tab from "./assets/images/tab.svg";
import star from "./assets/images/star.svg";
import { useDetails } from "./use-details";

export const Details = () => {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  const { infoForJobs } = useDetails();

  const jobDetails = infoForJobs.find((detail) => {
    return detail.name.toLowerCase() === name;
  });

  if (!jobDetails) return null;

  const formatingDescriptions = jobDetails.formattedDescription;

  const listBefits = formatingDescriptions[4]
    .split(".")
    .filter((el) => el !== "");

  const posteNDaysAgo = Math.round(
    (+new Date() - +new Date(jobDetails.updatedAt)) / 1000 / 60 / 60 / 24
  );

  return (
    <div className="flex items-center flex-col py-12 px-2 gap-y-24  tablet:gap-0 tablet:block 	">
      <div className="flex  tablet:flex-col  tablet:items-center tablet:gap-8 gap-20 ">
        <div className="flex flex-col max-w-3xl w-full gap-8">
          <div className="flex justify-between ">
            <span className="text-[#3A4562] font-bold text-3xl">
              Job Details
            </span>
            <div className="flex gap-6 items-center justify-center tablet:hidden">
              <div className="flex gap-4 ">
                <img src={tab} alt="" className="min-w-[18px] min-w-[20px]" />
                <span className="text-[#3A4562] text-lg 	">Save to my list</span>
              </div>
              <div className="flex gap-4">
                <img src={share} alt="" className="min-w-[18px] min-w-[20px]" />
                <span className="text-[#3A4562] text-lg	">Share</span>
              </div>
            </div>
          </div>
          <div className="pb-[1px] bg-[#3A4562]"></div>
          <div className="hidden tablet:flex tablet:gap-6  tablet:justify-start">
            <div className="flex gap-4 ">
              <img src={star} alt="" className="min-w-[18px] min-w-[20px]" />
              <span className="text-[#3A4562] text-lg 	">Save to my list</span>
            </div>
            <div className="flex gap-4">
              <img src={share} alt="" className="min-w-[18px] min-w-[20px]" />
              <span className="text-[#3A4562] text-lg	">Share</span>
            </div>
          </div>
          <div className="tablet:hidden">
            <button className="bg-[#384564] text-white	rounded-lg py-4 px-7   ">
              Apply now
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-32 tablet:gap-8 tablet:justify-between">
                <span className="text-[#3A4562] font-bold  ">
                  {jobDetails.title}
                </span>
                <div className="flex flex-col tablet:flex-col-reverse max-w-[136px] w-full tablet:max-w-[120px]	">
                  <span className="text-[#3A4562] font-bold max-w-[160px] w-full	 ">
                    € {jobDetails.salary.replace(/[k]/g, " 000")}
                  </span>
                  <span className="text-[#3A4562]">Brutto, per year</span>
                </div>
              </div>
              <span className="text-gray">Posted {posteNDaysAgo} days ago</span>
            </div>

            <div className="flex flex-col gap-4">
              <Description descriptions={formatingDescriptions} />
              <ListBenefits benefits={listBefits} />
            </div>
            <div className="flex tablet:justify-center ">
              <button className="bg-[#384564] text-white	rounded-lg py-4 px-7  ">
                Apply now
              </button>
            </div>
            <div className="flex flex-col gap-12 tablet:flex-col-reverse ">
              <div className="flex flex-col gap-4 ">
                <span className="text-[#3A4562] text-custom font-bold">
                  Additional info
                </span>
                <div className="pb-[1px] bg-[#3A4562]"></div>
                <span className="text-lg text-[#3A4562]">Employment type</span>
                <div className="flex gap-2">
                  <EmploymentType
                    employmentTypes={jobDetails.employment_type}
                  />
                </div>
                <span className="text-lg text-[#3A4562]">Benefits</span>
                <div className="flex gap-2">
                  <Benefit benefits={jobDetails.benefits} />
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <span className="text-[#3A4562] text-custom font-bold">
                  Attached images
                </span>
                <div className="pb-[1px] bg-[#3A4562]"></div>
                <div className="flex gap-2 tablet:w-full tablet:overflow-x-scroll ">
                  <Picture pictures={jobDetails.pictures} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  h-full w-full flex  items-center flex-col gap-4">
          <div className="hidden tablet:flex tablet:gap-2 tablet:flex-col  w-full ">
            <span className="text-[#3A4562] text-custom font-bold">
              Contacts
            </span>
            <div className="py-px bg-[#3A4562] "></div>
          </div>
          <div className="flex flex-col items-center bg-[#2A3047] relative max-w-[402px]	w-full	rounded-lg ">
            <div className="w-[180px] h-[273px] bg-[#202336] absolute left-0 rounded-r-full"></div>
            <div className="flex flex-col justify-start z-10 pt-8">
              <span className="text-[#E7EAF0]">Departament name.</span>
              <span className="text-[#E7EAF0]">{jobDetails.name}.</span>
              <span className="text-[#E7EAF0]">{jobDetails.address}</span>
              <span className="text-[#E7EAF0] tablet:text-custom-green">
                {jobDetails.phone}
              </span>
              <span className="text-[#E7EAF0] tablet:text-custom-green">
                {jobDetails.email}
              </span>
            </div>
            <SimpleMap
              key={jobDetails.id}
              lat={jobDetails.location.lat}
              long={jobDetails.location.long}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] w-full">
        <button
          onClick={handleClick}
          className="flex gap-4 justify-center items-center bg-turquoise rounded-lg 	py-4 px-4 tablet:hidden"
        >
          <img src={arrow} alt="" />
          <span className="text-[#3A4562] font-semibold ">
            RETURN TO JOB BOARD
          </span>
        </button>
      </div>
    </div>
  );
};
