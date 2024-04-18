import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../Common/Layout';
import { useAuth } from '../Context/Authcontext';
import Loader2 from '../Common/Loader2';

const initialState = {
    email: '',
    first_school: '',
    newPassword: ''
};

const Forget = () => {
    const [forget, setForget] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [auth] = useAuth();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForget({ ...forget, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const forgetUrl = "https://webskitters-student.onrender.com/forget-password";

        const myToken = {
            headers: {
                "x-access-token": auth.token,
            },
        };

        try {
            const response = await axios.post(forgetUrl, forget, myToken);
            if (response && response.data && response.data.success) {
                toast.success(response.data.message);
                setLoading(false);
                navigate('/login');
            } else {
                toast.error(response.data.message);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error forgotten password", error);
            toast.error(error.response ? error.response.data.message : "An error occurred");
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 mx-auto">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Forget Password</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form onSubmit={handleOnSubmit}>

                                        <div className="form-group">
                                            <input type="email" className="form-control border-0 p-4" placeholder="Your email" required name='email' value={forget.email} onChange={handleOnChange} />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control border-0 p-4" placeholder="First School" required name='first_school' value={forget.first_school} onChange={handleOnChange} />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control border-0 p-4" placeholder="New password" required name='newPassword' value={forget.newPassword} onChange={handleOnChange} />
                                        </div>

                                        <div>
                                            <button className="btn btn-dark btn-block border-0 py-3" type="submit">
                                                {loading ? <Loader2/> : 'Forget'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Forget;
