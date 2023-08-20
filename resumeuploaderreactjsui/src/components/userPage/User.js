import React, { useEffect, useState } from 'react'
import './User.css'
import { useGetRequestByIdQuery } from '../../services/candidateProfileApi'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
    const { data, isSuccess } = useGetRequestByIdQuery(id)
    const [candidate, setCandidate] = useState([])
    useEffect(() => {
        if (data && isSuccess) {
            setCandidate(data.candidates)
        }
    }, [data, isSuccess])
    return (
        <>
            <div className="user">
                {/* <h1>User name</h1> */}
                <div className="userCard">
                    <div className="fname">
                        <span>First name</span>
                        <span>{candidate.Fname}</span>
                    </div>
                    <div className="mname">
                        <span>Middle name</span>
                        <span>{candidate.Mname}</span>
                    </div>
                    <div className="lname">
                        <span>Last name</span>
                        <span>{candidate.Lname}</span>
                    </div>
                    <div className="email">
                        <span>Email</span>
                        <span>{candidate.email}</span>
                    </div>
                    <div className="state">
                        <span>state</span>
                        <span>{candidate.state}</span>
                    </div>
                    <div className="dob">
                        <span>date of birth</span>
                        <span>{candidate.dob}</span>
                    </div>
                    <div className="gender">
                        <span>gender</span>
                        <span>{candidate.gender}</span>
                    </div>
                    <div className="location">
                        <span>Location</span>
                        <span>{candidate.location}</span>
                    </div>
                </div>
            </div>
            <div className="profile">
                <span>image</span>
                <span>resume</span>
            </div>
            <div className="userButton">
                <button>Edit</button>
                <button className='userDeleteButton'>Delete</button>
            </div>
        </>
    )
}

export default User