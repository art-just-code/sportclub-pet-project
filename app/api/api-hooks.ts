import { useState, useEffect } from "react";
import { getData, getDataByMonth } from "./api-utils";

export const useGetData = (endpoint: string) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getData(endpoint);
            setData(data);
        }
        fetchData();
    }, []);

    return data;
};

export const useGetDataByMonth = (endpoint: string, month: string) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getDataByMonth(endpoint, month);
            setData(data);
        }
        fetchData();
    }, []);

    return data;
};
