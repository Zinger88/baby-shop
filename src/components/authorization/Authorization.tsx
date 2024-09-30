import Link from "next/link"

export const Authorization = () => {
    return (
        <form className="pt-20">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 text-center dark:border-gray-700">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        Привет! Давай авторизируемся!
                    </h2>
                    <div className="mt-6 flex flex-col items-center gap-y-8">
                        <div className="w-full sm:w-2/5">
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    placeholder="Введите имя..."
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-2/5">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Введите пароль..."
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400  dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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
                    Сохранить
                </button>
            </div>
        </form>
    );
}
