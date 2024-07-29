export const getData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (response.status !== 200) throw new Error("Ошибка получения данных");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};
