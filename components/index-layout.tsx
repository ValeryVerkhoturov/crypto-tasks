import IndexNavigateButton from "@/components/index-navigate-button";

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
          </div>
        </div>
        <div className="flex items-center justify-center lg:col-span-7 lg:order-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg">
            <ul className="divide-y">
              <IndexNavigateButton name={"Задание 1. Шифр биграммами"} path={"/task1"} />
              <IndexNavigateButton name={"Задание 2"} path={"/task2"} disabled badge={"Coming soon"} />
              <IndexNavigateButton name={"Задание 3"} path={"/task3"} disabled badge={"Coming soon"} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

