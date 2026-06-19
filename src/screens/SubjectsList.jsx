import { useContext } from "react"
import { Subjects } from "../components/Subjects"
import { QuizzContext } from "../context/QuizzContext"


export function SubjectsList() {

    const { subjects, startQuiz } = useContext(QuizzContext)
    return (
        <main className={`flex flex-col gap-10 px-6 pt-8 md:w-160 md:gap-16 lg:flex-row lg:gap-32 lg:w-full `}>
            <div className='flex flex-col gap-4 lg:gap-12'>
                <div className='flex flex-col gap-2 text-blue900 dark:text-white'>
                    <h1 className='textMobil-preset2-light md:text-preset2-light'>Welcome to the </h1>
                    <h2 className='textMobil-preset2-medium md:text-preset2-medium'>Frontend Quiz!</h2>
                </div>
                <p className='textMobil-preset5 text-grey500 md:text-preset6 dark:text-blue300'>Pick a subject to get started</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-6 lg:gap-4 lg:w-141'>

                {subjects.map((subject, index) => {
                    return <Subjects onClick={() => { startQuiz(subject) }} key={index} icon={subject.icon} bgIcon={subject.bgIcon} subjectItem={subject.title} />
                })}

            </div>
        </main>
    )
}