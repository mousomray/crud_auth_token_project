import React, { useEffect, useState } from 'react';
import Layout from '../Common/Layout';
import axios from 'axios';
import { useAuth } from '../Context/Authcontext';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Loader2 from '../Common/Loader2';

const initialstate = {
    name: '',
    price: '',
    description: '',
    brand: '',
    image: ''
};

const EditProducts = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(initialstate);
    const [image, setImage] = useState(); // State for image
    const [loading, setLoading] = useState(false);
    const [auth] = useAuth();
    const navigate = useNavigate();

    // Function for onchange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    };


    // Function for fetch single data
    const getProduct = async () => {

        const singleAPI = `https://webskitters-student.onrender.com/edit/product/${id}`

        const myToken = {
            headers: {
                "x-access-token": auth.token,
            },
        }
        try {
            const response = await axios.get(singleAPI, myToken)
            const fitproduct = response?.data?.data;
            
            const reg = {
                name: fitproduct.name,
                price: fitproduct.price,
                description: fitproduct.description,
                brand: fitproduct.brand,
                image: fitproduct.image
            }
            
            setProduct(reg);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id, auth.token]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const apiUrl = `https://webskitters-student.onrender.com/update/product/${id}`;

        const myToken = {
            headers: {
                "x-access-token": auth?.token,
            },
        }

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("brand", product.brand);
        formData.append("image", image);


        try {
            const response = await axios.post(apiUrl, formData, myToken);
            navigate("/product");
            toast.success(response?.data?.message);
            setLoading(false)
        } catch (error) {
            console.log("Error occurred:", error);
            toast.error(error?.response?.data?.message);
            setLoading(false)
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

                                    <form method='post' onSubmit={handleSubmit}>
                                        <div class="control-group">
                                            <input type="text" class="form-control border-0 p-4" id="name" placeholder="Product Name" required="required" data-validation-required-message="Please enter product name" name='name' onChange={handleChange} value={product.name} />
                                            <p class="help-block text-danger"></p>
                                        </div>

                                        <div class="control-group">
                                            <input type="number" class="form-control border-0 p-4" id="email" placeholder="Price" required="required" data-validation-required-message="Please enter price" name='price' onChange={handleChange} value={product.price} />
                                            <p class="help-block text-danger"></p>
                                        </div>

                                        <div class="control-group">
                                            <textarea class="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Description" required="required" data-validation-required-message="Description" name='description' onChange={handleChange} value={product.description}></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="text" class="form-control border-0 p-4" id="name" placeholder="Product brand" required="required" data-validation-required-message="Please enter product name" name='brand' onChange={handleChange} value={product.brand} />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        {/*This form section is for submit image*/}
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">photo</label>
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
                                                {loading ? <Loader2 /> : 'Edit'}
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

export default EditProducts
