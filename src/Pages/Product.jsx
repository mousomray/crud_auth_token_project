import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useAuth } from '../Context/Authcontext'
import Layout from '../Common/Layout'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../Common/Loader'


const Product = () => {

    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)
    const [auth] = useAuth()

    const getData = async () => {

        const apiUrl = 'https://webskitters-student.onrender.com/product'

        // Store token in a variable 
        const mytoken = {
            headers: {
                "x-access-token": auth.token,
            },
        };

        const response = await axios.get(apiUrl,mytoken)
        console.log("Data is fetching", response);
        setProd(response?.data?.data)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return (
            <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translet(-50,-50)' }}><Loader /></h1>
        )
    }

    // Create a function for delete
    const deleteUserData = async (id) => {
        const deleteurl = `https://webskitters-student.onrender.com/delete/product/${id}`
        const mytoken = {
            headers: {
                "x-access-token": auth.token,
            },
        }
        try {
            const response = await axios.delete(deleteurl, mytoken);
            console.log("Response:", response);
            getData(); // Refresh data
            toast.warn(response?.data?.message);
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error(error?.response?.data?.message);
        }
    };


    return (
        <>
            <Layout>
                <div className='container' style={{ marginTop: '100px' }}>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Image</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Price</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {prod?.slice(0, prod.length).reverse().map((value, index) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{value?.name}</td>
                                            <td>{value?.description}</td>
                                            <td><img src={value?.image} alt="Product Image" style={{ height: '50px' }} /></td>
                                            <td>{value?.brand}</td>
                                            <td>{value?.price}</td>
                                            <td><Link to={`/edit/${value._id}`}><button type="button" class="btn btn-primary">Edit</button></Link></td>
                                            <td><button type="button" class="btn btn-danger" onClick={() => deleteUserData(value?._id)}>Delete</button></td>
                                        </tr>

                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    )
}

export default Product
