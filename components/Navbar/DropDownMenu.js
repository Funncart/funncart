import React from 'react'


const style = {
    wrapper: 'flex flex-col text-md md:text-md tracking-wider mx-auto z-10 bg-red-300',
    list: 'mx-auto block my-4 py-2 px-2 border-b-2 border-green-800 font-bold  transition duration-[300ms] text-lg text-green-800 text-center',


}
const DropDownMenu = () => {
    return (
        <ul clasName={style.wrapper} style={{fontFamily: 'Poppins, sans-serif'}}>
                <li>
                    <a href="/" className={style.list} aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/about" className={style.list}>About</a>
                </li>
                {/* <li>
                    <a href="/products" className={style.list}>Products</a>
                </li> */}
                <li>
                    <a href="/contact" className={style.list}>Contact</a>
                </li>
                {/* for REGISTER AND LOGIN PART */}
                {/* <li>
                    <a href="/login" className={style.list}>Login</a>
                </li> 
                <li>
                    <a href="/register" className={style.list}>Register</a>
                </li> */}
        </ul>
    )
}

export default DropDownMenu;