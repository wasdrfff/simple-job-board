import leftArrow from "./assets/images/left-arrow.svg";
import rightArrow from "./assets/images/right-arrow.svg";

type TProps = {
  pagesCount: number;
  onPageChange: (pageIndex: number) => void;
  currentPage: number;
};

export const Pagination = ({
  pagesCount,
  onPageChange,
  currentPage,
}: TProps) => {
  const onPrevClick = () => {
    if (currentPage !== 0) {
      onPageChange(currentPage - 1);
      console.log(currentPage);
    }
  };
  const onNextClick = () => {
    if (currentPage !== Array(pagesCount).length - 1) {
      onPageChange(currentPage + 1);
    }
    console.log(currentPage);
  };

  return (
    <div className="flex  w-full justify-around">
      <div className="flex items-center gap-[26px]">
        <button onClick={onPrevClick} className="font-bold text-[#7D859C]">
          <img src={leftArrow} alt="left-arrow" />
        </button>
        <div className="pl-[1px] h-[31px] bg-[#DEE3EF]"></div>
      </div>
      <div className="flex gap-2 py-3">
        {Array(pagesCount)
          .fill(0)
          .map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => onPageChange(i)}
                className={
                  i === currentPage
                    ? "flex justify-start text-[#5876C5] w-8 font-bold"
                    : "flex justify-start w-8 text-[#70778B] font-bold"
                }
              >
                {i + 1}
              </button>
            );
          })}
      </div>
      <div className="flex items-center gap-[26px]">
        <div className="pl-[1px] h-[31px] bg-[#DEE3EF]"></div>
        <button onClick={onNextClick} className="font-bold text-[#7D859C]">
          <img src={rightArrow} alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};
