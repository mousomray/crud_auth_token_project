import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/Authcontext'
import Layout from '../Common/Layout'
import { Link } from 'react-router-dom'
import Loader2 from '../Common/Loader2'

const initialstate = {
    email: '',
    password: ''
}

const Login = () => {

    const [logins, setLogins] = useState(initialstate);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setLogins({ ...logins, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)

        const apiurl = "https://webskitters-student.onrender.com/login"

        try {
            const response = await axios.post(apiurl, logins)
            if (response && response?.data?.status === true) {
                console.log(response);
                toast.success(response?.data?.message)
                // Auth start 
                setAuth({
                    ...auth,
                    user: response.data.user,
                    token: response.data.token
                });
                localStorage.setItem("auth", JSON.stringify(response?.data))
                setLoader(false)
                navigate("/")
            } else {
                toast.error(response?.data?.message)
                setLoader(false)
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
            toast.error(error?.response?.data?.message)
            setLoader(false)
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
                                        <h1 class="m-0">Login Now</h1>
                                    </div>
                                    <div class="card-body rounded-bottom bg-primary p-5">
                                        <form method='post' onSubmit={handleOnSubmit}>

                                            <div class="form-group">
                                                <input type="email" class="form-control border-0 p-4" placeholder="Your email" required="required" name='email' value={logins.email} onChange={handleOnChange} />
                                            </div>

                                            <div class="form-group">
                                                <input type="password" class="form-control border-0 p-4" placeholder="Your password" required="required" name='password' value={logins.password} onChange={handleOnChange} />
                                            </div>

                                            <div>
                                                <button class="btn btn-dark btn-block border-0 py-3" type="submit">
                                                    {loader ? <Loader2/> : 'Login'}
                                                </button>
                                            </div>
                                            <div className='mt-3'>
                                                <Link to='/register'><p style={{color:'white',textAlign:'center'}}>You have an account? Register now</p></Link>
                                            </div>
                                            <div className='mt-3'>
                                                <Link to='/forget'><p style={{color:'white',textAlign:'center'}}>Forget Password</p></Link>
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

export default Login
