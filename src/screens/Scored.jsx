import { useContext } from "react"
import { QuizzContext } from "../context/QuizzContext"

export function Scored() {

    const { score, resetQuiz, bgExam, iconExam, nameExam, quizz } = useContext(QuizzContext);
    return (

        <main aria-live="polite" className="flex flex-col gap-10 px-6 pt-8 md:w-160 md:gap-16 lg:w-full lg:gap-36 lg:flex-row lg:justify-center">
            <section className="flex flex-col gap-2 text-blue900 dark:text-white">

                <h2 className="textMobil-preset2-light md:text-preset2-light">Quiz completed</h2>
                <h3 className="textMobil-preset2-medium md:text-preset2-medium">You scored...</h3>

            </section>
            <section className="flex flex-col gap-4 md:gap-8 lg:w-141">
                <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl md:gap-10 md:p-12 md:rounded-3xl dark:bg-blue850">
                    <div className="flex gap-4 items-center md:gap-6">
                        <div className={`w-10 h-10 ${bgExam} rounded-sm flex justify-center items-center md:w-14 md:h-14`}>
                            <div className="w-[1.786rem] h-[1.786rem] md:w-10 md:h-10">
                                <img src={iconExam} alt="icon exam finish" />
                            </div>
                        </div>
                        <h4 className="text-blue900 textMobil-preset4 md:text-preset4 dark:text-white">{nameExam}</h4>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <p className="textMobil-preset1 text-blue900 md:text-preset1 dark:text-white">{score}</p>
                        <p className="textMobil-preset4 text-grey500 md:text-preset5-medium lg:text-preset5-regular dark:text-blue300">out of {quizz.length}</p>
                    </div>
                </div>
                <button className="cursor-pointer p-4 bg-purple600 rounded-xl text-white textMobil-preset4 md:p-8 md:text-preset4 md:rounded-3xl" onClick={resetQuiz}>
                    Play Again
                </button>
            </section>
        </main>

    )
}