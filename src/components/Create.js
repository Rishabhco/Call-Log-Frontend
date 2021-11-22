import axios from 'axios';
import React from 'react'

export default function Create() {

    const inputName = React.createRef();
    const inputEmail = React.createRef();
    const inputPhone = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://callog.herokuapp.com/create", {
            name: inputName.current.value,
            email: inputEmail.current.value,
            phone: inputPhone.current.value
        }).then((response) => {
            // console.log(response);
            alert(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input name="name" type="text" className="form-control" id="name" ref={inputName} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="mail" className="form-label">Email</label>
                        <input name="email" type="email" className="form-control" id="mail" ref={inputEmail} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input name="phone" type="number" className="form-control" id="phone" ref={inputPhone} />
                    </div>
                    <div className="col-auto" align="center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}