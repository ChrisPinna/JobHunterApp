import axios from "axios";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { JobHuntType } from "../typings";

const JobHuntsContext = createContext<any>(null);

const JobHuntContext = ({ children }: { children: any }) => {
  const [jobHunts, setJobHunts] = useState<JobHuntType[]>([]);

  useEffect(() => {
    const fetchJobHunts = async () => {
      const res = await axios.get("/jobhunts");
      setJobHunts(res.data);
    };

    fetchJobHunts();
  }, []);

  return <JobHuntsContext.Provider value={{ jobHunts }}>{children}</JobHuntsContext.Provider>;
};

export const JobHuntState = () => {
  return useContext(JobHuntsContext);
};

export default JobHuntContext;
