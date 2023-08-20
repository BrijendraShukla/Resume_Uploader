import React, { useEffect, useState } from 'react'
import './UserList.css'
import { useGetRequestQuery } from '../../services/candidateProfileApi';
import { Link } from 'react-router-dom';

function UserList() {
    const [candidates, setCandidates] = useState([])
    const [search, setSearch] = useState('')
    const { data, isSuccess } = useGetRequestQuery()
    useEffect(() => {
        if (data && isSuccess) {
            setCandidates(data.candidates)
        }
    }, [data, isSuccess])

    return (
        <>
            <div className="helper">
                <div className="search">
                    <label htmlFor="search">Search  </label>
                    <input type="search" id='search' onChange={(e) => { setSearch(e.target.value) }} />
                </div>
                <div className="filter">
                    <button>Filter</button>
                </div>
            </div>
            <table className='content-table'>
                <thead>
                    <tr>
                        <th>S no.</th>
                        <th>First name</th>
                        <th>Email name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Location</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.Fname.includes(search) || item.email.includes(search)
                    }).map((candidate, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td className='userName'><Link to={`user/${candidate.id}`}>{candidate.Fname}</Link></td>
                                <td>{candidate.email}</td>
                                <td>{candidate.dob}</td>
                                <td>{candidate.gender}</td>
                                <td>{candidate.location}</td>
                                <td>
                                    <button>Download</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UserList