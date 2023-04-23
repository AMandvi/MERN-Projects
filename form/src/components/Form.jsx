import React, {useState} from 'react'
// import './App.css';

// state variable for each item
const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")

    let[listOfPersons, setListOfPersons] = useState([])  ///empty array of persons

    const submitHandler = (e) => {
        e.preventDefault()
        let personObj = {firstName, lastName, email, password,confPassword}        //new inbound data
        console.log("Form was submitted", personObj)

        setListOfPersons([...listOfPersons, personObj])

    }
    const deletePerson = (e, idx) => {
        console.log("I'm deleting this person!", idx)

        let copy = listOfPersons.filter((person, i) => {
            console.log("Person, i, looks like this: ", person, i, idx )
            return i !== idx;
        })
        setListOfPersons(copy)
    }

//return can onlly return one div
// use <> </>
    return (
    <>
        <div>
            
            <form onSubmit= {submitHandler}>
                <div className='form-group'>
                    <label>First Name:</label>
                    <input onChange = {(e) => setFirstName(e.target.value)} type="text" className="form-control"></input>
                    {/* validations */}
                    {
                    firstName.length < 2 && firstName.length > 0 ? <p className='text-danger'>First Name must be 2 characters long</p> : ""
                    }
                </div>
                <div className='form-group'>
                    <label>Last Name:</label>
                    <input onChange = {(e) => setLastName(e.target.value)} type="text" className="form-control"></input>
                    {/* validations */}
                    {
                    lastName.length < 2 && lastName.length > 0 ? <p className='text-danger'>Last Name must be 2 characters long</p> : ""
                    }
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input onChange = {(e) => setEmail(e.target.value)} type="text" className="form-control"></input>
                    {/* validations */}
                    {
                    email.length < 2 && email.length > 0 ? <p className='text-danger'>Email must be 2 characters long</p> : ""
                    }
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input onChange = {(e) => setPassword(e.target.value)} type="text" className="form-control"></input>
                    {/* validations */}
                    {
                    password.length < 8 && password.length > 0 ? <p className='text-danger'>Password must be at least 8 characters</p> : ""
                    }
                </div>
                <div className='form-group'>
                    <label>Confirm Password:</label>
                    <input onChange = {(e) => setConfPassword(e.target.value)} type="text" className="form-control"></input>
                    {/* validations */}
                    {
                    password !== confPassword ? <p className='text-danger'>Password must match</p> : ""
                    }
                </div>
                
                <br />
                <button type="submit" className='btn btn-outline-warning'>Add Me</button>
            </form>
        </div>
        {/* // map over my data */}
        <div>       
            {
                listOfPersons.map((person,i) => {
                    return(
                        // provide the key to avoid the warning msg
                        //when we return a div we need to return key that is equal to its index(idx)
                        <div key ={i}>           
                        <h2>This is the index value:{i}</h2>
                        <h3>{person.firstName}</h3>
                        <h3>{person.lastName}</h3>
                        <h3>{person.email}</h3>
                        <h3>{person.password}</h3>
                        <h3>{person.confPassword}</h3>
                        <button onClick= {(e) => deletePerson(e,i)} className = "btn btn-danger">DeleteMe</button>
                        </div>
                    ) })
            }
        </div>
    </>
    )
}

export default Form
