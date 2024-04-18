import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Common/Layout'
import Loader from '../Common/Loader'

const Homedetails = () => {

    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchDetails = async () => {
        const response = await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`)
        setDetails(response.data.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchDetails()
    }, [])
    if (loading) {
        return (
            <h1 style={{position:'absolute',top:'50%',left:'50%',transform:'translet(-50,-50)'}}><Loader/></h1>
        )
    }

    return (
        <>
            <Layout>
                <div className='container' style={{ marginTop: '150px' }}>
                    <div className='mx-auto text-centre'>
                        <img src={`https://restapinodejs.onrender.com/api/blog/image/${id}`} style={{ marginLeft: "15%", width: "60%" }} />
                        <h1>{details?.title}</h1>
                        <p
                        
                        dangerouslySetInnerHTML={{__html:details.postText}}
                        
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Homedetails
