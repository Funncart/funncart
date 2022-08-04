import React from 'react'
import Link from 'next/link'
const style = {
    heading: 'w-[100%] flex items-center justify-center flex-col',
    smallHeading: 'border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-stone-800 ',
    btn: 'text-lg md:text-lg rounded-full px-12 md:px-6 py-4 md:py-6 max-w-fit mx-auto bg-[#c8a165] text-stone-100 hover:bg-stone-500 transition duration-[300ms] my-5',

}

const NoProductFound = () => {

    return (
        <div className={style.heading}>
            <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Available Soon!</h2>
            <Link href="/contact">
                <button className={style.btn} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Contact Us Today
                </button>
            </Link>
        </div>

    )
}

export default NoProductFound;