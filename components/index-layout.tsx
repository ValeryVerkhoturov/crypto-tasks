import IndexNavigateButton from "@/components/index-navigate-button";
import Link from "next/link";
import {ThemeToggle} from "@/components/theme-toggle";

export default function IndexLayout() {

  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="container grid gap-4 min-h-screen py-6 px-4 sm:gap-6 lg:grid-cols-12 lg:gap-0 lg:py-12 lg:px-6">
        <div className="flex items-center justify-center lg:col-span-5 lg:order-2">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Криптографическая защита информации</h1>
              <p className="mx-auto max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Задания. Выполнил В. С. Верхотуров
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <Link
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://github.com/ValeryVerkhoturov/crypto-tasks"
              >
                GitHub
              </Link>
              <Link
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://github.com/ValeryVerkhoturov/crypto-tasks/blob/main/report/verkhoturov.pdf"
              >
                Paper
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:col-span-7 lg:order-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg">
            <ul className="divide-y">
              <IndexNavigateButton name={"Задание 1. Шифр многоалфавитной замены Вижинера"} path={"/task1"} />
              <IndexNavigateButton name={"Задание 2. Шифр Магический квадрат"} path={"/task2"} />
              <IndexNavigateButton name={"Задание 3"} path={"/task3"} disabled badge={"Coming soon"} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

