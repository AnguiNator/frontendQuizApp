
export function Subjects({ icon, subjectItem, bgIcon, onClick }) {

    return (

        <button className='card flex gap-4 p-4 bg-white items-center rounded-xl dark:bg-blue850 cursor-pointer md:gap-8 md:rounded-2xl lg:p-6 lg:rounded-3xl  focus-visible:outline-3 focus-visible:outline-purple600 hover:border-3 hover:border-purple600 ' onClick={onClick}>
            <div className={`${bgIcon}  flex justify-center items-center w-10 h-10 rounded-md md:w-14 md:h-14 md:rounded-xl`}>
                <div className="w-[1.786rem] h-[1.786rem] md:w-10 md:h-10">
                    <img src={icon} alt="Icon Exam" />
                </div>
            </div>
            <h2 className='textMobil-preset4 text-blue900 dark:text-white md:text-preset4'>{subjectItem}</h2>
        </button>

    )
}