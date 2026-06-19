import sunD from "../assets/images/icon-sun-dark.svg"
import moonD from "../assets/images/icon-moon-dark.svg"
import moonL from "../assets/images/icon-moon-light.svg"
import sunL from "../assets/images/icon-sun-light.svg"
import { useContext } from "react"
import { QuizzContext } from "../context/QuizzContext"


export function Header() {
    const { isDark, toggleDark, nameExam, iconExam, bgExam } = useContext(QuizzContext)
    return (

        <header className="py-4 px-6 md:w-160 lg:w-289.25">

            <div className="flex justify-between items-center gap-2 ">
                <div className=" flex gap-4 items-center md:gap-6">
                    {iconExam && (
                        <div className={`w-10 h-10 ${bgExam} rounded-sm flex justify-center items-center md:w-14 md:h-14`}>
                            <div className="w-[1.786rem] h-[1.786rem] md:w-10 md:h-10">
                                <img src={iconExam} alt={`${nameExam} icon`} />
                            </div>
                        </div>
                    )}
                    {nameExam && <h2 className="textMobil-preset4 text-blue900 md:text-preset4 dark:text-white">{nameExam}</h2>}
                </div>

                <div className="flex gap-2 md:gap-4">

                    <label htmlFor="switch-component-on" className="cursor-pointer">
                        <img src={isDark ? sunL : sunD} alt="light or dark" className="w-4 h-4 md:w-6 md:h-6" />
                    </label>

                    <div className="relative inline-block w-8 h-5">
                        <input id="switch-component-on" type="checkbox" aria-label="Toggle dark mode" checked={isDark} className="peer appearance-none w-8 h-5 bg-purple600 rounded-full cursor-pointer transition-colors duration-300 md:w-9 md:h-6" onChange={toggleDark} />
                        <label htmlFor="switch-component-on" className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-3 cursor-pointer pointer-events-none md:w-4 md:h-4">
                        </label>
                    </div>

                    <label htmlFor="switch-component-on" className="cursor-pointer"><img src={isDark ? moonL : moonD} alt="" className="w-4 h-4 md:w-6 md:h-6" />
                    </label>
                </div>
            </div>
        </header>

    )
}