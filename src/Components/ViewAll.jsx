import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8082/view").then(
            (response) => {
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 co-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee ID</th>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.name}</td>
                                                    <td>{value.salary}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll