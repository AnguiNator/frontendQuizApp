import iconHtml from '../assets/images/icon-html.svg';
import iconCss from '../assets/images/icon-css.svg';
import iconJs from '../assets/images/icon-js.svg';
import iconAccessibility from '../assets/images/icon-accessibility.svg';
import datos from '../data/data.json';
import { createContext, useEffect, useState } from "react";

const QuizzContext = createContext();

function QuizzProvider({ children }) {
    const [isDark, setIsDark] = useState(false);
    const [phase, setPhase] = useState("selection") // "selection" | "quiz" | "result"
    const [quizzNumber, setQuizzNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [nameExam, setNameExam] = useState("");
    const [iconExam, setIconExam] = useState();
    const [bgExam, setBgExam] = useState("");
    const [userSelection, setUserSelection] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLocked, setIsLocked] = useState(false)
    const [quizz, setQuizz] = useState([]);

    const subjects = [
        { title: 'HTML', icon: iconHtml, bgIcon: 'bg-orange50' },
        { title: 'CSS', icon: iconCss, bgIcon: 'bg-green100' },
        { title: 'JavaScript', icon: iconJs, bgIcon: 'bg-blue50' },
        { title: 'Accessibility', icon: iconAccessibility, bgIcon: 'bg-purple100' },
    ]


    const startQuiz = (subject) => {
        setNameExam(subject.title)
        setBgExam(subject.bgIcon)
        setIconExam(subject.icon)

        const examList = datos.quizzes.find(element => element.title === subject.title).questions;
        setQuizz(examList)
        setPhase("quiz")
    }

    const finishQuiz = () => {
        if (answer === userSelection) {
            setScore(score + 1)
        }

        if (quizzNumber + 1 !== quizz.length) {
            setQuizzNumber(quizzNumber + 1);
        } else {
            setPhase("result")
        }

        setIsLocked(false)
        setUserSelection("")

    }
    const resetQuiz = () => {
        setScore(0)
        setBgExam("")
        setIconExam("")
        setNameExam("")
        setQuizz([])
        setQuizzNumber(0)
        setPhase("selection")
    }


    const handleUserSelection = (option) => {
        setUserSelection(option)
        const correctAnswer = quizz[quizzNumber].answer
        setAnswer(correctAnswer);
        setIsLocked(true);
    }


    useEffect(() => {
        const root = window.document.body;
        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark]);


    return (
        <QuizzContext.Provider value={{
            isDark,
            toggleDark: () => setIsDark(!isDark),
            nameExam,
            quizz,
            iconExam,
            bgExam,
            subjects,
            score,
            phase,
            quizzNumber,
            userSelection,
            answer,
            isLocked,
            // acciones
            startQuiz,
            finishQuiz,
            resetQuiz,
            handleUserSelection,
        }}>
            {children}
        </QuizzContext.Provider>
    );
}

export { QuizzContext, QuizzProvider }