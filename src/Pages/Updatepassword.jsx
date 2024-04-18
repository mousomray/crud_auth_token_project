import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';
import Layout from '../Common/Layout';
import Loader2 from '../Common/Loader2';

const initialstate = {
    user_id: '',
    password: ''
}

const Updatepassword = () => {

    const [update, setUpdate] = useState(initialstate);
    const [loading, setLoading] = useState(false);
    const [auth] = useAuth();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setUpdate({ ...update, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const updateUrl = "https://webskitters-student.onrender.com/update-password"

        const mytoken = {
            headers: {
                "x-access-token": auth.token,
            },
        };

        try {
            const response = await axios.post(updateUrl, update, mytoken)
            if (response && response?.data?.success === true) {
                console.log(response);
                toast.success(response?.data?.msg)
                setLoading(false)
                navigate('/dashboard')
            } else {
                console.log(response);
                toast.error(response?.data?.msg)
            }
        } catch (error) {
            console.log("Error doing update", error);
            setLoading(false)
        }
    }

    return (
        <>
            <Layout>
                {/* <!-- Login Start --> */}
                <div class="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
                    <div class="container py-5">
                        <div class="row align-items-center">
                            <div class="col-md-6 mx-auto">
                                <div class="card border-0">
                                    <div class="card-header bg-light text-center p-4">
                                        <h1 class="m-0">Update Password</h1>
                                    </div>
                                    <div class="card-body rounded-bottom bg-primary p-5">
                                        <form method='post' onSubmit={handleOnSubmit}>

                                            <div class="form-group">
                                                <input type="text" class="form-control border-0 p-4" placeholder="User ID" required="required" name='user_id' value={update.user_id} onChange={handleOnChange} />
                                            </div>

                                            <div class="form-group">
                                                <input type="password" class="form-control border-0 p-4" placeholder="Your password" required="required" name='password' value={update.password} onChange={handleOnChange} />
                                            </div>

                                            <div>
                                                <button class="btn btn-dark btn-block border-0 py-3" type="submit">
                                                    {loading ? <Loader2/> : 'Update'}
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Login End --> */}
            </Layout>
        </>
    )
}

export default Updatepassword
