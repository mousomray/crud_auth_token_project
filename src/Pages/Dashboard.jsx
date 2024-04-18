import React from 'react'
import Layout from '../Common/Layout'
import { useAuth } from '../Context/Authcontext' // Import useAuth

const Dashboard = () => {

    const [auth] = useAuth(); // Custom Hook

    return (
        <>
            <Layout>
                {/* <!--About section with Grid start--> */}
                <div class="container">
                    <div class="row">
                        <div class="col text-center mt-5">
                            <h1>User</h1>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-6 align-self-center">
                            <img src={auth?.user?.image} alt="Error" style={{ maxWidth: '100%' }} />
                        </div>
                        <div class="col-md-6 p-3  align-self-center">
                            <li style={{ fontSize: '30px', listStyle: 'none' }}><b>Id : </b>{auth?.user?._id}</li>
                            <li style={{ fontSize: '30px', listStyle: 'none' }}><b>Name : </b>{auth?.user?.name}</li>
                            <li style={{ fontSize: '30px', listStyle: 'none' }}><b>Email : </b>{auth?.user?.email}</li>
                            <li style={{ fontSize: '30px', listStyle: 'none' }}><b>First School : </b>{auth?.user?.first_school}</li>
                            <li style={{ fontSize: '30px', listStyle: 'none' }}><b>Role : </b>{auth?.user?.role}</li>

                        </div>

                    </div>

                </div>
                {/* <!--About section with Grid end--> */}
            </Layout>
        </>
    )
}

export default Dashboard
