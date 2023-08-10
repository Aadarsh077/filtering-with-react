import React from 'react'
import Data from './Data'

const Buttons = ({ filterItem ,setItem, menuItems }) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                {menuItems.map((val, id) => {
                    return (
                        <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold" key={id} onClick={()=>filterItem(val)}>
                            {val}
                        </button>
                    )
                })}
                <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold" onClick={()=>setItem(Data)}>
                    All
                </button>
            </div>
        </>
    )
}

export default Buttons
