import axios from "axios";
import { useEffect, useState } from "react";
import { ICommitData } from "../interfaces/commitData.interface";

const useFetchData = ({ repoSelected, branchSelected }: { repoSelected: string, branchSelected: string }) => {
    const [commitsData, setCommitsData] = useState<Array<ICommitData>>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        if (!repoSelected || !branchSelected) return;
        const fetchData = async () => {
            try {
                setLoading(true);
                const url = `http://localhost:5000/commits?repository=${repoSelected}&branch=${branchSelected}`;
                const { data } = await axios.get(url);
                setCommitsData(data);
            } catch (e) {
                setError(true);
                console.log(e);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [repoSelected, branchSelected]);
    return { commitsData, loading, error }
}
export default useFetchData;
