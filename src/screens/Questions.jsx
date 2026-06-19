import { Options } from "../components/Options";
import { useContext } from "react"
import { QuizzContext } from "../context/QuizzContext"

export function Questions() {
    const { quizz, quizzNumber, finishQuiz, userSelection, handleUserSelection } = useContext(QuizzContext)
    return (
        <>
            <section className={` flex flex-col gap-10 pt-8 px-6  md:w-160 lg:w-290 lg:flex-row lg:gap-32`}>
                <div className="flex flex-col gap-6 md:gap-10 lg:gap-46">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <span className="textMobil-preset5 text-grey500 md:text-preset6 dark:text-blue300">Question {quizzNumber + 1} of {quizz.length}</span>
                        <p className="textMobil-preset3 text-blue900 md:text-preset3 dark:text-white">{quizz[quizzNumber].question}</p>
                    </div>
                    <div role="progressbar" aria-valuenow={quizzNumber + 1} aria-valuemin={1} aria-valuemax={quizz.length} aria-label={`Question ${quizzNumber + 1} of ${quizz.length}`} className="p-1 h-4 bg-white rounded-full dark:bg-blue850">
                        <div
                            className="h-full bg-purple600 rounded-full transition-all duration-500"
                            style={{ width: `${(quizzNumber / quizz.length) * 100}%` }}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 textMobil-preset4 md:gap-6 md:text-preset4 ">

                    {quizz[quizzNumber].options.map((option, index) => (
                        <Options onClick={() => handleUserSelection(option)} key={index} option={option} letter={String.fromCharCode(65 + index)} />
                    ))}

                    <button disabled={!userSelection} aria-disabled={!userSelection} onClick={finishQuiz} className="cursor-pointer w-full  bg-purple600 textMobil-preset4 text-white p-4 rounded-xl md:text-preset4 md:p-8 md:rounded-3xl">
                        {quizzNumber + 1 === quizz.length ? "See Results" : "Next Question"}
                    </button>
                </div>
            </section>
        </>
    )
}