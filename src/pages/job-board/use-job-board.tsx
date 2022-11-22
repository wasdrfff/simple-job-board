import { useEffect, useState } from "react";
import { api } from "../../utils/api";

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

export const useJobBoard = () => {
  const [jobBoardList, setJobBoardList] = useState<TJobBoard[]>([]);

  useEffect(() => {
    api(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data/?access_token=${process.env.REACT_APP_SECRET_KEY}`
    )
      .then((result) => {
        return Promise.all(
          result.map((jobBoard: TJobBoard) => {
            return api(
              `https://api.geoapify.com/v1/geocode/reverse?lat=${jobBoard.location.lat}&lon=${jobBoard.location.long}&apiKey=${process.env.REACT_APP_SECRET_KEY_REVERSE_GEOCODING}`
            ).then((res) => {
              jobBoard.reverseGeoCoding = res.features[0].properties.formatted;
              return jobBoard;
            });
          })
        );
      })
      .then(setJobBoardList);
  }, []);
  return { jobBoardList };
};
