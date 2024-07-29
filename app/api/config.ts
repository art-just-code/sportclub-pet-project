const BASE_URL: string = "http://localhost:3001";

interface Endpoints {
    [key: string]: string;
}

export const endpoints: Endpoints = {
    dates: `${BASE_URL}/api/dates`,
};
