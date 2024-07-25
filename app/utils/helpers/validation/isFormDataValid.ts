"use client";

interface FormData {
    phone: string;
    count: string;
}

export function isFormDataValid(value: FormData) {
    let error: FormData = { phone: "", count: "" };

    if (value.phone.length < 9) error.phone = "Введите корректный номер, к примеру +79876543210";

    if (!value.count) error.count = "Укажите количество комплектов";

    return error;
}
