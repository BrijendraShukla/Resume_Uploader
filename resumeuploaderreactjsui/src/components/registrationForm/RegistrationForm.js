import React, { useState } from 'react'
import { usePostRequestMutation } from '../../services/candidateProfileApi';
// import { format } from 'date-fns';
import './RegistrationForm.css'

function RegistrationForm() {
    const initialValues = { Fname: '', Mname: '', Lname: '', Email: '', dob: null, state: '', gender: '', location: '', img: '', file: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const [saveProfile] = usePostRequestMutation()

    const handleChange = (e) => {
        // const file = e.target.file[0];
        const { name, value, file } = e.target;
        setFormValues({ ...formValues, [name]: value || file })
    }
    const resetForm = () => {
        setFormValues(initialValues)
        document.getElementsByTagName('form').reset()
    }
    async function Register(e) {
        e.preventDefault()
        const data = new FormData()
        data.append('Fname', formValues.Fname)
        data.append('Mname', formValues.Mname)
        data.append('Lname', formValues.Lname)
        data.append('email', formValues.Email)
        data.append('dob', formValues.dob == null ? null : formValues.dob)
        data.append('state', formValues.state)
        data.append('gender', formValues.gender)
        data.append('location', formValues.location)
        data.append('pimage', formValues.img)
        data.append('rdoc', formValues.file)
        if (formValues.Fname && formValues.Email) {
            const res = await saveProfile(data)
            console.log(res.data.msg)
            resetForm()
            if (res.data.status === "success") {
                setError({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })
            }
        } else {
            setError({ status: false, msg: "All Fields are Required", type: 'error' })
        }
        console.log("this is Register values", formValues)

    }
    return (
        <>
            <div className='formBody'>
                <div className='form'>
                    <form onSubmit={Register} id="resume-form">
                        <h2>User Form</h2>
                        <div className='box'>
                            <div className='inputBox'>
                                <span>First name</span>
                                <input type="text" name='Fname' value={formValues.Fname} onChange={handleChange}
                                />
                            </div>
                            <div className='inputBox'>
                                <span>Middle name</span>
                                <input type="text" name='Mname' value={formValues.Mname} onChange={handleChange} />
                            </div>
                            <div className='inputBox'>
                                <span>Last name</span>
                                <input type="text" name='Lname' value={formValues.Lname} onChange={handleChange} />
                            </div>
                            <div className='inputBox'>
                                <span>Email</span>
                                <input type="email" name='Email' value={formValues.Email} onChange={handleChange} />
                            </div>
                            <div className='inputDOB'>
                                <span>Date of Birth</span>
                                <input type="date" name='dob' value={formValues.dob} onChange={handleChange} />
                            </div>
                            <div className='inputBox'>
                                <div className='state'>
                                    <span>State : </span>
                                    <select name="state" id="state" value={formValues.state} onChange={handleChange} >
                                        <option value=""></option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className='inputBox'>
                                <div className='gender'>
                                    <span>Gender :</span>
                                    <div className='radio'>
                                        <div className='male'>
                                            <label htmlFor='male'>Male</label>
                                            <input type="radio" id='male' name="gender" value='male' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='radio'>
                                        <div className='female'>
                                            <label htmlFor='female'>Female</label>
                                            <input type="radio" id='female' name="gender" value='female' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='radio'>
                                        <div className='others'>
                                            <label htmlFor='others'>Others</label>
                                            <input type="radio" id='others' name="gender" value='others' onChange={handleChange} />

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='inputBox'>
                                <div>
                                    <span>Preferred location : </span>
                                    <select name="location" id="location" value={formValues.location} onChange={handleChange} >
                                        <option value="volvo"></option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='updoadButton'>
                            <label htmlFor='img' >Upload photo</label>
                            <input type="file" id='img' accept='image/*' name='img' value={formValues.img} onChange={handleChange} />
                            <label htmlFor='file' >Upload resume/file</label>
                            <input type="file" id='file' accept="doc/*" name='file' value={formValues.file} onChange={handleChange}
                            />
                        </div>
                        <div className='submitButton'>
                            <button type='reset'>Reset</button>
                            <button type='submit'>Submit</button>
                        </div>
                        {error.status ? console.log("yes data send ") : console.log("no data is not valid ")}
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm