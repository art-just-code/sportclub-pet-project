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

export const isResponseOk = (response: any) => {
    // позже исправить на корректный тип для объекта response
    return !(response instanceof Error);
};

export const getNormalizedDataByMonth = async (url: string, month: string) => {
    const data = await getData(`${url}?month.name=${month}`);
    return isResponseOk(data) ? data : data;
};
