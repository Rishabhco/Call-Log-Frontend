import React from 'react';
import {Link} from 'react-router-dom';

export default function Options() {
    return (
        <>
            <div className="container my-4 options">

                <div className="row justify-content-around">
                    <div className="col-3 col-6 col-sm-3">
                        <button type="button" className="btn btn-success"><Link to="/createUser" className="links">Create User</Link></button>
                    </div>
                    <div className="col-3 col-6 col-sm-3">
                        <button type="button" className="btn btn-info"><Link to="/" className="links linkt">Read User Info</Link></button>
                    </div>
                    <div className="col-3 col-6 col-sm-3">
                        <button type="button" className="btn btn-warning"><Link to="/updateUser" className="links linkt">Update User Info</Link></button>
                    </div>
                    <div className="col-3  col-6 col-sm-3">
                        <button type="button" className="btn btn-danger"><Link to="/deleteUser" className="links">Delete User</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
