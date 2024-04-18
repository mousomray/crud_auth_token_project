import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/Authcontext'
import { toast } from 'react-toastify'

const Nav = () => {

    const [auth, setAuth] = useAuth() // Create custom hook

    // Make handle for Logout 
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth')
        toast.success('Successfully logout')
    }

    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="col-lg-3 ml-5">
                    <h1 class="m-0"><span class="text-primary">W</span>EBSKITTERS</h1>
                </div>
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto mr-5">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/addproduct">Add product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/product">Product</Link>
                        </li>
                        {
                            !auth.user ? (
                                <>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/login">Login</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <div class="nav-item dropdown">
                                        <Link href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"><img src={auth.user.image} alt={auth.user.name} style={{ width: '50px', height: '50px' }} /></Link>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/dashboard"> Dashboard</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/updatepassword">Update</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link onClick={handleLogout} class="nav-link" to="/login">Logout </Link>
                                            </li>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Nav
