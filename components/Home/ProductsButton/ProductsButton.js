import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'flex flex-col my-12',
    headingContainer: 'flex items-center jusitfy-center flex-col my-12',
    smallHeading: ' text-4xl md:text-4xl max-w-fit mx-auto py-2 text-stone-800 text-center',
    btn: 'text-lg md:text-lg  px-12 md:px-24 py-4 md:py-4 max-w-fit mx-auto bg-[#c8a165] text-stone-100 hover:bg-opacity-[0.9] transition duration-[300ms]',
}
const ProductsButton = () => {
    return (
        <div className={style.wrapper}>
            {/* <div className={style.headingContainer}>
                <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Shop Online On Okeere</h2>
            </div> */}
            <Link href="/products" >
                <button className={style.btn} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    View Featured Products
                </button></Link>

        </div>
    )
}

export default ProductsButton