"use client";

interface FormAndErrorData {
    phone: string;
    count: string;
}

export function isFormDataValid(value: FormAndErrorData) {
    let error: FormAndErrorData = { phone: "", count: "" };

    if (!/^([79|89]{2}[0-9]{9})?$/.test(value.phone)) {
        error.phone = "Введите корректный номер, без знаков +, - и пробелов, например 79876543210";
    }

    if (!value.count) error.count = "Укажите количество комплектов";

    return error;
}
