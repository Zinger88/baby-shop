'use client';

import Link from "next/link";
import { useState } from "react";

interface DataSubmit {
    userName: string;
    password: string;
    confirmPassword: string;
}

export const Registration: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<DataSubmit>({
        userName: '',
        password: '',
        confirmPassword: ''
    });

    const encryptionData = (unsafe: string): string => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/\(/g, "&#x28;")
            .replace(/\)/g, "&#x29;");
    };

    const validateForm = (): DataSubmit => {
        const newErrors: DataSubmit = {
            userName: '',
            password: '',
            confirmPassword: ''
        };

        if (!userName.trim()) {
            newErrors.userName = "Логин обязателен";
        }

        if (!password.trim()) {
            newErrors.password = "Пароль обязателен";
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = "Подтверждение пароля обязательно";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Пароли не совпадают";
        }

        return newErrors;
    };

    const onSubmitHander = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validateForm();
        const hasErrors = Object.values(validationErrors).some(error => error !== '');

        if (hasErrors) {
            setErrors(validationErrors);
        } else {
            const secureData: DataSubmit = {
                userName: encryptionData(userName),
                password: encryptionData(password),
                confirmPassword: encryptionData(confirmPassword)
            };

            console.log(secureData);

            setUserName('');
            setPassword('');
            setConfirmPassword('');
            setErrors({ userName: '', password: '', confirmPassword: '' });
        }
    };

    return (
        <form className="pt-20" onSubmit={onSubmitHander}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 text-center dark:border-gray-700">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        Введите данные
                    </h2>
                    <div className="mt-6 flex flex-col items-center gap-y-8">
                        <div className="w-full sm:w-2/5">
                            <label
                                htmlFor="userName"
                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Логин
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    autoComplete="given-name"
                                    placeholder={errors.userName || 'Введите логин...'}
                                    value={userName}
                                    onChange={e => {
                                        setUserName(e.target.value);
                                        if (errors.userName) {
                                            setErrors(prevErrors => ({ ...prevErrors, userName: '' }));
                                        }
                                    }}
                                    className={`${errors.userName ? 'dark:placeholder:text-red-500 placeholder:text-red-500 dark:ring-red-500 ring-red-500' : 'placeholder:text-gray-400 ring-gray-300'} block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-2/5">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Пароль
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder={errors.password || 'Введите пароль...'}
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value);
                                        if (errors.password) {
                                            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
                                        }
                                    }}
                                    className={`${errors.password ? 'dark:placeholder:text-red-500 placeholder:text-red-500 dark:ring-red-500 ring-red-500' : 'placeholder:text-gray-400 ring-gray-300'} block w-full rounded-md py-1.5 px-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm ring-1 ring-inset dark:ring-gray-600  dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-2/5">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Подтвердите пароль
                            </label>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder={errors.confirmPassword || 'Подтвердите пароль...'}
                                    value={confirmPassword}
                                    onChange={e => {
                                        setConfirmPassword(e.target.value);
                                        if (errors.confirmPassword) {
                                            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
                                        }
                                    }}
                                    className={`${errors.confirmPassword ? 'dark:placeholder:text-red-500 placeholder:text-red-500 dark:ring-red-500 ring-red-500' : 'placeholder:text-gray-400 ring-gray-300'} block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                />
                                {errors.confirmPassword && errors.confirmPassword.includes("Пароли не совпадают") && (
                                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
                <button type="button" className="px-3 py-2 text-sm leading-6 bg-sky-100 rounded-2xl shadow-md font-bold transition duration-300 hover:bg-sky-200 dark:text-slate-800">
                    <Link href="/">Отмена</Link>
                </button>
                <button
                    type="submit"
                    className="px-3 py-2 text-sm leading-6 bg-sky-100 rounded-2xl shadow-md font-bold transition duration-300 hover:bg-sky-200 dark:text-slate-800"
                >
                    Регистрация
                </button>
            </div>
        </form>
    );
}

export default Registration;
