import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { JobBar } from "../../components/job-bar";
import { Pagination } from "../../components/pagination";
import { useJobBoard } from "./use-job-board";

const JOBS_PER_PAGE = 5;

type TJobBoard = {
  id: string;
  title: string;
  description: string;
  name: string;
  location: {
    lat: number;
    long: number;
  };
  pictures: string[];
  updatedAt: string;
  reverseGeoCoding: string;
};

export const JobBoard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { jobBoardList } = useJobBoard();

  const jobsToShow = useMemo(() => {
    const firstJobIndex = currentPage * JOBS_PER_PAGE;
    return jobBoardList.slice(firstJobIndex, firstJobIndex + JOBS_PER_PAGE);
  }, [currentPage, jobBoardList]);

  return (
    <div className="flex flex-col items-center justify-center gap-12   bg-[#F5F5F5] h-[100vh] tablet:h-full tablet:p-4">
      <div className="flex flex-col gap-2">
        {jobsToShow.map((jobBoard: TJobBoard) => {
          const posteNDaysAgo = Math.round(
            (+new Date() - +new Date(jobBoard.updatedAt)) / 1000 / 60 / 60 / 24
          );

          return (
            <Link
              to={`/details/${jobBoard.name.toLowerCase()}`}
              className="max-w-[1400px] w-full  "
              key={jobBoard.id}
            >
              <JobBar
                key={jobBoard.id}
                pictures={jobBoard.pictures}
                title={jobBoard.title}
                description={jobBoard.description}
                location={jobBoard.reverseGeoCoding}
                name={jobBoard.name}
                postedAgo={posteNDaysAgo}
                id={jobBoard.id}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex max-w-[515px] w-full shadow-3xl rounded-xl">
        <Pagination
          pagesCount={Math.floor(jobBoardList.length / JOBS_PER_PAGE)}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
