import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddEmployee = () => {
    const [data,setData]=useState(
        {
            "id":"",
            "name":"",
            "salary":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8082/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully added")
                } else {
                    alert("Error!")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee ID</label>
                                <input type="text" className="form-control" name="id" value={data.id} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee Name</label>
                                <input type="text" className="form-control"  name="name" value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Salary</label>
                                <input type="text" className="form-control" name="salary" value={data.salary} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee