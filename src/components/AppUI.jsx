import { useContext } from "react";
import { QuizzContext } from "../context/QuizzContext";
import { Header } from "./Header";
import { Questions } from '../screens/Questions';
import { SubjectsList } from "../screens/SubjectsList";
import { Scored } from "../screens/Scored"

export function AppUI() {
    const { phase } = useContext(QuizzContext);
    return (

        <div className={`h-screen w-full relative md:flex md:flex-col md:items-center 
        bg-[url(./assets/images/pattern-background-mobile-light.svg)] 
        dark:bg-[url(./assets/images/pattern-background-mobile-dark.svg)]
        md:bg-[url(./assets/images/pattern-background-tablet-light.svg)] 
        dark:md:bg-[url(./assets/images/pattern-background-tablet-dark.svg)] 
        lg:bg-[url(./assets/images/pattern-background-desktop-light.svg)] 
        dark:lg:bg-[url(./assets/images/pattern-background-desktop-dark.svg)] 
        bg-cover bg-center`}>

            <div className='relative z-10 '>
                <Header />
                {phase === "selection" && <SubjectsList />}
                {phase === "quiz" && <Questions />}
                {phase === "result" && <Scored />}
            </div>
        </div>

    )
}