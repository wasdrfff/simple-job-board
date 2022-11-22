type TProps = {
  pictures: string[];
};
export const Picture = ({ pictures }: TProps) => {
  return (
    <>
      {pictures.map((picture, index) => {
        return (
          <img
            key={index}
            className="rounded-lg max-w-[209px] w-full h-[115px] tablet:min-w-[200px] tablet:w-full"
            src={picture + `?random={${index}}`}
            alt=""
          />
        );
      })}
    </>
  );
};
