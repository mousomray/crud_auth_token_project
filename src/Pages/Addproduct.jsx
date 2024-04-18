import React, { useState } from 'react';
import Layout from '../Common/Layout';
import axios from 'axios';
import { useAuth } from '../Context/Authcontext'; // Import useAuth
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader2 from '../Common/Loader2';


const initialstate = {
    name: '',
    price: '',
    description: '',
    brand: '',
    image: ''
};

const Addproduct = () => {
    const [addp, setAddp] = useState(initialstate);
    const [auth] = useAuth(); // Custom Hook for auth
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAddp({ ...addp, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const apiUrl = "https://webskitters-student.onrender.com/create/product";

        // Store token in a variable 
        const mytoken = {
            headers: {
                "x-access-token": auth.token,
            },
        };

        let formdata = new FormData();
        formdata.append("name", addp.name);
        formdata.append("price", addp.price);
        formdata.append("description", addp.description);
        formdata.append("brand", addp.brand);
        formdata.append("image", image);

        try {
            const response = await axios.post(apiUrl, formdata, mytoken);
            console.log(response);
            toast.success(response?.data?.message);
            navigate('/product');
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
            setLoading(false);
        }
    };


    return (
        <>
            <Layout>
                {/* <!-- Contact Start --> */}
                <div class="container-fluid py-5">
                    <div class="container py-5">
                        <div class="text-center mb-5">
                            <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Product</h5>
                            <h1>Add Product</h1>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="contact-form bg-secondary rounded p-5">
                                    <div id="success"></div>

                                    <form method='post' onSubmit={handleOnSubmit}>
                                        <div class="control-group">
                                            <input type="text" class="form-control border-0 p-4" id="name" placeholder="Product Name" required="required" data-validation-required-message="Please enter product name" name='name' onChange={handleOnChange} value={addp.name} />
                                            <p class="help-block text-danger"></p>
                                        </div>

                                        <div class="control-group">
                                            <input type="number" class="form-control border-0 p-4" id="email" placeholder="Price" required="required" data-validation-required-message="Please enter price" name='price' onChange={handleOnChange} value={addp.price} />
                                            <p class="help-block text-danger"></p>
                                        </div>

                                        <div class="control-group">
                                            <textarea class="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Description" required="required" data-validation-required-message="Description" name='description' onChange={handleOnChange} value={addp.description}></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="text" class="form-control border-0 p-4" id="name" placeholder="Product brand" required="required" data-validation-required-message="Please enter product name" name='brand' onChange={handleOnChange} value={addp.brand} />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        {/*Image Area start*/}
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Image</label>
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
                                                <>{image === "" && <p>Drag or drop content here</p>}</>
                                            )}
                                        </div>
                                        {/*Image area end*/}
                                        <div class="text-center">
                                            <button class="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">
                                                {loading ? <Loader2/> : 'Submit'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End --> */}
            </Layout>
        </>
    )
}

export default Addproduct
