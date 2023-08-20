import React from 'react'
import './Filter.css'

function Filter() {
    return (
        <>
            <div className="filterBody">
                <h1>Filter By</h1>
                <form className='formFilter'>
                    <div className="formGender">
                        <label>Gender :</label>
                        <ul>
                            <li>
                                <span>Male</span>
                                <input type="checkbox" Male />
                            </li>
                            <li>
                                <span>Female</span>
                                <input type="checkbox" Female />
                            </li>
                            <li>
                                <span>Others</span>
                                <input type="checkbox" Others />
                            </li>
                        </ul>
                    </div>
                    <div className="formState">
                        <label>State : </label>
                    </div>
                    <div className="formLocation">
                        <label>Location : </label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filter