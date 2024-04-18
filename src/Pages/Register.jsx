import React, { useState } from 'react'
import Layout from '../Common/Layout'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loader2 from '../Common/Loader2'

const initialstate = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    first_school: '',
    image: ''
}

const Register = () => {

    const [register, setRegister] = useState(initialstate)
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setRegister({ ...register, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const registerurl = 'https://webskitters-student.onrender.com/register'

        let formdata = new FormData();
        formdata.append("name", register.name);
        formdata.append("email", register.email);
        formdata.append("mobile", register.mobile);
        formdata.append("password", register.password);
        formdata.append("first_school", register.first_school);
        formdata.append("image", image);

        try {
            const response = await axios.post(registerurl, formdata)
            if (response && response?.data?.status === true) {
                console.log(response);
                toast.success(response?.data?.message)
                setRegister(initialstate)
                setLoading(false)
                navigate('/login')
            } else {
                console.log(response);
                toast.error(response?.data?.message)
                setLoading(false)
            }
        } catch (error) {
            console.log("Error fetching data", error);
            toast.error(error?.response?.data?.message)
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
                                        <h1 class="m-0">Register</h1>
                                    </div>
                                    <div class="card-body rounded-bottom bg-primary p-5">
                                        <form method='post' onSubmit={handleOnSubmit}>

                                            <div class="form-group">
                                                <input type="text" class="form-control border-0 p-4" placeholder="Name" required="required" name='name' value={register.name} onChange={handleOnChange} />
                                            </div>

                                            <div class="form-group">
                                                <input type="email" class="form-control border-0 p-4" placeholder="Your email" required="required" name='email' value={register.email} onChange={handleOnChange} />
                                            </div>

                                            <div class="form-group">
                                                <input type="number" class="form-control border-0 p-4" placeholder="Mobile" required="required" name='mobile' value={register.mobile} onChange={handleOnChange} />
                                            </div>

                                            <div class="form-group">
                                                <input type="password" class="form-control border-0 p-4" placeholder="Your password" required="required" name='password' value={register.password} onChange={handleOnChange} />
                                            </div>

                                            <div class="form-group">
                                                <input type="text" class="form-control border-0 p-4" placeholder="First School" required="required" name='first_school' value={register.first_school} onChange={handleOnChange} />
                                            </div>

                                            {/*This form section is for submit image*/}
                                            <div className="form-group">
                                                <input
                                                    type="file"
                                                    onChange={(e) => setImage(e.target.files[0])}
                                                    name="image"
                                                    accept="image/*"
                                                    class="form-control"
                                                />
                                                {image !== "" && image !== undefined && image !== null ? (
                                                    <img
                                                        style={{ height: "180px" }}

                                                        // createObjectURL use for make image url 
                                                        src={URL.createObjectURL(image)}
                                                        alt=""
                                                        className="upload-img"
                                                    />
                                                ) : (
                                                    <>{image === "" && <p style={{color:'white'}}>Drag or drop content here</p>}</>
                                                )}
                                            </div>
                                            {/*Image area end*/}

                                            <div>
                                                <button class="btn btn-dark btn-block border-0 py-3" type="submit">
                                                    {loading ? <Loader2/> : 'Register'}
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

export default Register
