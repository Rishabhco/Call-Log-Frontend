import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Read() {
    const [data, setData] = useState({
        getData: []
    })

    useEffect(() => {
        axios.get('https://callog.herokuapp.com/').then((response) => {
            setData({
                getData: response.data
            });
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <div className="container tableRead">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.getData.map((data) => {
                                return (
                                        <tr key={data._id}>
                                            <td >{data.name}</td>
                                            <td >{data.email}</td>
                                            <td >{data.phone}</td>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}