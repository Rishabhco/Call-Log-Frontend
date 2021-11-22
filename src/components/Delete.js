import React from 'react';
import axios from 'axios'

export default function Read() {
    const inputName = React.createRef();
    const inputEmail = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://callog.herokuapp.com/findByEmail",{
            email:inputEmail.current.value
        }).then((response)=>{
            const id=response.data[0]._id;
            axios.delete("https://callog.herokuapp.com/delete/"+id).then((response) => {
                alert(response.data)
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
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input name="name" type="text" className="form-control" id="name" ref={inputName} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="mail" className="form-label">Email</label>
                        <input name="email" type="email" className="form-control" id="mail" ref={inputEmail} />
                    </div>
                    <div className="col-auto" align="center">
                        <button type="submit" className="btn btn-danger">Delete User</button>
                    </div>
                </form>
            </div>
        </>
    )
}