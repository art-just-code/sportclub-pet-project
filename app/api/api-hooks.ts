import { useState, useEffect } from "react";
import { getData } from "./api-utils";

export const useGetData = (endpoint: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getData(endpoint);
            setData(data);
        }
        fetchData();
    }, []);

    return data;
};
