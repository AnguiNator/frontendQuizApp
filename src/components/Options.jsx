import { useContext } from 'react';
import iconCorrect from '../assets/images/icon-correct.svg';
import iconError from '../assets/images/icon-error.svg';
import { QuizzContext } from '../context/QuizzContext';

export function Options({ option, letter, onClick }) {
    const { userSelection, answer, isLocked } = useContext(QuizzContext)

    let borderStyle = "";
    let letterStyle = "bg-grey50";
    let letterColor = "text-grey500";


    if (answer === option && option === userSelection) {
        borderStyle = "border-3 border-green500";
        letterStyle = "bg-green500"
        letterColor = "text-white"

    } else if (option === userSelection) {
        borderStyle = "border-3 border-red500";
        letterStyle = "bg-red500"
        letterColor = "text-white"
    }




    return (

        <button disabled={isLocked} aria-label={`${letter}: ${option}${isLocked && answer === option ? ', correct answer' : ''}${isLocked && userSelection === option && answer !== option ? ', incorrect' : ''}`} className={`cursor-pointer options flex gap-4 justify-between p-4 bg-white rounded-xl items-center ${borderStyle} md:rounded-3xl lg:w-141 lg:p-6 dark:bg-blue850 focus-visible:outline-3 focus-visible:outline-purple600  ${userSelection ? "" : "hover:border-3 hover:border-purple600 group"}`}
            onClick={onClick}>
            <div className='flex justify-center items-center gap-4 md:gap-8'>
                <div className={`${letterStyle} w-10 h-10 shrink-0 flex justify-center items-center  rounded-md md:w-14 md:h-14 md:rounded-xl group-hover:bg-purple600 group-focus-visible:bg-purple600`}>
                    <span className={`${letterColor} group-hover:text-white group-focus-visible:text-white`}>{letter}</span>
                </div>
                <p className="text-blue900 dark:text-white text-left">{option}</p>
            </div>
            <img src={iconCorrect} alt="answer Correct" className={`${option === answer ? "block" : "hidden"}  w-6 h-6 md:w-10 md:h-10`} />
            <img src={iconError} alt="answer incorrect" className={`${userSelection === option && userSelection !== answer ? "block" : "hidden"}  w-6 h-6 md:w-10 md:h-10`} />

        </button>

    )

}