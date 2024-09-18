import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Извините, что-то пошло не так…
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-50">
          Данной страницы не существует
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-lg bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-gray-900"
            >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  );
}
