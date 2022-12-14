import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { MdHighQuality } from 'react-icons/md'

const style = {
    wrapper: 'flex flex-col md:flex-row w-[100%] md:w-[100%] mx-auto justify-around items-center my-2 md:my-12 bg-white ',
    featuresContainer:"w-[100%] lg:w-[30%] my-2 lg:my-4 md:my-1 px-24 md:px-12 lg:px-12 py-2 md:py-4 my-4 flex flex-col items-center justify-center",
    para:'text-green-800 text-sm md:text-xs lg:text-sm my-3 font-bold text-center',

}
const Features = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.featuresContainer}>
                <MdHighQuality className="text-green-900 text-2xl lg:text-3xl"/>
                <p className={style.para}>BEST QUALITY</p>
            </div>
            <div className={style.featuresContainer}>
                <FaMoneyBillWave className="text-green-900 text-2xl lg:text-3xl"/>
                <p className={style.para}>MONEY BACK GUARANTEE</p>
            </div>
            <div className={style.featuresContainer}>
                <BiSupport className="text-green-900 text-2xl  lg:text-3xl"/>
                <p className={style.para}>24/7 SUPPORT</p>
            </div>

        </div>
    )
}
export default Features