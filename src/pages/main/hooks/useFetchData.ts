import axios from "axios";
import { useEffect, useState } from "react";
import { ICommitData } from "../interfaces/commitData.interface";
import { IparamFetch } from "../interfaces/paramFetch.interface";

const useFetchData = ({ repositorySelected, branchSelected }: IparamFetch) => {
  const [commitsData, setCommitsData] = useState<Array<ICommitData>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (!repositorySelected || !branchSelected) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const baseURL = `${import.meta.env.VITE_API_BASE_URL}:${
          import.meta.env.VITE_API_PORT
        }`;
        const url = `commits?repository=${repositorySelected}&branch=${branchSelected}`;  
        const {
          data: { data },
        } = await axios.get(url, {
          baseURL,
        });
        setCommitsData(data);
      } catch (e) {
        setError(true);
        setTimeout(() => setError(false), 3000);
        setCommitsData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [repositorySelected, branchSelected]);
  return { commitsData, loading, error };
};
export default useFetchData;
