interface CreateDateParams {
    locale?: string; //тернарный оператор говорит о том, что поле не обязательно
    date?: Date;
}

export const createDate = (params?: CreateDateParams) => {
    // также сам params не обязательный
    const locale = params?.locale ?? "default"; // оператор ?? нулевого слияния

    const d = params?.date ?? new Date();

    const dayNumber = d.getDate();
    const day = d.toLocaleDateString(locale, { weekday: "long" });
    const dayNumberInWeek = d.getDay() + 1;
    const dayShort = d.toLocaleDateString(locale, { weekday: "short" });
    const year = d.getFullYear();
    const month = d.toLocaleDateString(locale, { month: "long" });
    const monthNumber = d.getMonth() + 1;
    const monthIndex = d.getMonth();
    const timestamp = d.getTime();
    const dateString = d.toLocaleDateString(locale);

    return {
        date: d,
        dayNumber,
        day,
        dayNumberInWeek,
        dayShort,
        year,
        month,
        monthNumber,
        monthIndex,
        timestamp,
        dateString,
    };
};
