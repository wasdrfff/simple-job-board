import { useEffect, useState } from "react";
import { api } from "../../utils/api";

type TData = {
  formattedDescription: string[];
  id: string;
  title: string;
  description: string;
  address: string;
  name: string;
  email: string;
  salary: string;
  benefits: string[];
  phone: string;
  location: {
    lat: number;
    long: number;
  };
  pictures: string[];
  employment_type: string[];
  updatedAt: string;
};

export const useDetails = () => {
  const [infoForJobs, setInfoForJobs] = useState<TData[]>([]);
  const formatResult = (data: TData[]) => {
    return data.map((el) => {
      return {
        ...el,
        formattedDescription: el.description
          .split("\n")
          .map((el) => el.trim())
          .filter(Boolean),
      };
    });
  };

  useEffect(() => {
    api(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data/?access_token=${process.env.REACT_APP_SECRET_KEY}`
    ).then((result) => {
      setInfoForJobs(formatResult(result));
    });
  }, []);
  return { infoForJobs };
};
