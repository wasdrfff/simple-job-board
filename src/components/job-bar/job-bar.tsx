import tab from "./images/tab.svg";
import picture from "./images/location.svg";
import Rating from "@mui/material/Rating";

type TProps = {
  pictures: string[];
  title: string;
  description: string;
  name: string;
  postedAgo: number;
  location: string;
  id: string;
};

export const JobBar = ({
  pictures,
  title,
  name,
  postedAgo,
  location,
  id,
}: TProps) => {
  return (
    <div className="flex justify-between   py-6 px-4	rounded-lg shadow-3xl gap-8 tablet:flex-col-reverse w-full  ">
      <div className="max-w-[1070px] w-full">
        <div className="flex flex-row gap-8 tablet:gap-4  ">
          <div className="max-w-[80px] max-h-[80px] tablet:max-w-[66px] tablet:max-h-[66px]">
            <img
              src={pictures[0] + `?random={${id}}`}
              alt=""
              className="rounded-full w-full h-full"
            />
          </div>
          <div className="flex  flex-col items-start gap-2">
            <span className="font-bold text-lg text-[#3A4562] tablet:font-normal	">
              {title}
            </span>
            <span className="text-[#878D9D] text-base 	">
              Department name • {name} AKH
            </span>
            <div className="flex items-center gap-2">
              <img src={picture} alt="location" />
              <span className="text-[#878D9D]">{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center tablet:hidden">
        <Rating
          defaultValue={5}
          sx={{
            color: "#384564",
          }}
        />
      </div>
      <div className="flex flex-col items-end justify-between">
        <img
          src={tab}
          alt="tab"
          className="tablet:hidden max-w-[25px] w-full"
        />
        <div className="flex justify-between w-full">
          <div className="hidden tablet:flex tablet:items-center ">
            <Rating
              defaultValue={5}
              sx={{
                color: "#384564",
              }}
            />
          </div>
          <span className="text-[#878D9D]">Posted {postedAgo} days ago</span>
        </div>
      </div>
    </div>
  );
};
