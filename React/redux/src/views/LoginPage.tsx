import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent/LoginComponent';

export default function LoginPage() {
    return (

        <div className="d-md-flex h-md-100 ">
            <div className="col-md-8 p-0 bg-indigo h-md-100">
                <div className="text-white d-md-flex align-items-center h-md-100 p-5 text-center justify-content-center" style={{ height: "1000px" }}>
                    <LoginComponent />
                </div>
            </div>

            <div className="col-md-4 p-0 bg-white h-md-100 loginarea">
                <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center" style={{ background: "#202430", height: "1000px" }}>
                    <div style={{ color: "white" }}>Hello World</div>
                </div>
            </div>
        </div>
    )
};
