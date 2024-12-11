import { useState, useEffect } from "react";
import { getNormalizedDataByMonth } from "./api-utils";

export const useGetDataByMonth = (endpoint: string, month: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getNormalizedDataByMonth(endpoint, month);
            setData(data);
        }
        fetchData();
    }, []);

    return data;
};
