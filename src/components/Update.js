import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Read() {

    let navigate =useNavigate();

    function navigation(){
        navigate('/');
    }
    
    const inputEmail = React.createRef();
    const inputNewEmail = React.createRef();
    const inputPhone = React.createRef();
    const inputNewPhone = React.createRef();

    const handleSubmitEmail = (event) => {
        event.preventDefault();
        axios.post("https://callog.herokuapp.com/findByEmail",{
            email:inputEmail.current.value
        }).then((response)=>{
            const id=response.data[0]._id;
            axios.patch(`https://callog.herokuapp.com/update/${id}`,{
                email:inputNewEmail.current.value
            }).then((response) => {
                navigation();
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleSubmitPhone = (event) => {
        event.preventDefault();
        axios.post("https://callog.herokuapp.com/findByPhone",{
            phone:inputPhone.current.value
        }).then((response)=>{
            const id=response.data[0]._id;
            axios.patch(`https://callog.herokuapp.com/update/${id}`,{
                phone:inputNewPhone.current.value
            }).then((response) => {
                navigation();
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <div className="container">
                <div className="my-4 upthd">For Updating Email</div>
                <form onSubmit={handleSubmitEmail}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input name="name" type="text" className="form-control" id="name" />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="mail" className="form-label">Current Email</label>
                        <input name="email" type="email" className="form-control" id="mail" ref={inputEmail} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="mail" className="form-label"> New Email</label>
                        <input name="email" type="email" className="form-control" id="mail" ref={inputNewEmail} />
                    </div>
                    <div className="col-auto my-4" align="center">
                        <button type="submit " className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <div className="my-4 upthd">For Updating Phone</div>
                <form onSubmit={handleSubmitPhone}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input name="name" type="text" className="form-control" id="name" />
                    </div>
                   
                    <div className="row mb-3">
                        <label htmlFor="phone" className="form-label">Current Phone Number</label>
                        <input name="phone" type="number" className="form-control" id="phone" ref={inputPhone} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phone" className="form-label">New Phone Number</label>
                        <input name="phone" type="number" className="form-control" id="phone" ref={inputNewPhone} />
                    </div>
                    <div className="col-auto my-4" align="center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>   
        </>
    )
}