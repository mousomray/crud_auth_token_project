import React, { useEffect, useState } from 'react'
import Layout from '../Common/Layout'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [course, setCourse] = useState([])

    const fetchcourse = async () => {
        const response = await axios.get('https://restapinodejs.onrender.com/api/allBlog')
        setCourse(response.data.data)
    }
    useEffect(() => {
        fetchcourse()
    }, [])

    return (
        <>
            <Layout>
                {/* <!-- Carousel Start --> */}
                <div class="container-fluid p-0 pb-5 mt-5">
                    <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#header-carousel" data-slide-to="1"></li>
                            <li data-target="#header-carousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active" style={{ minHeight: '300px' }}>
                                <img class="position-relative w-100" src="img/c1.jpg" style={{ minHeight: '300px', objectFit: 'cover' }} />
                                <div class="carousel-caption d-flex align-items-center justify-content-center">
                                    <div class="p-5" style={{ width: '100%', maxWidth: '900px' }}>
                                        <h5 class="text-white text-uppercase mb-md-3">Best Courses</h5>
                                        <h1 class="display-3 text-white mb-md-4">Best Education For Develop Your Skills</h1>
                                        <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style={{ minHeight: '300px' }}>
                                <img class="position-relative w-100" src="img/carousel-2.jpg" style={{ minHeight: '300px', objectFit: 'cover' }} />
                                <div class="carousel-caption d-flex align-items-center justify-content-center">
                                    <div class="p-5" style={{ width: '100%', maxWidth: '900px' }}>
                                        <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                        <h1 class="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                                        <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style={{ minHeight: '300px' }}>
                                <img class="position-relative w-100" src="img/carousel-3.jpg" style={{ minHeight: '300px', objectFit: 'cover' }} />
                                <div class="carousel-caption d-flex align-items-center justify-content-center">
                                    <div class="p-5" style={{ width: '100%', maxWidth: '900px' }}>
                                        <h5 class="text-white text-uppercase mb-md-3">Best Online Learning</h5>
                                        <h1 class="display-3 text-white mb-md-4">Online Learning Facility</h1>
                                        <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Carousel End --> */}


                {/* <!-- About Start --> */}
                <div class="container-fluid py-5">
                    <div class="container py-5">
                        <div class="row align-items-center">
                            <div class="col-lg-5">
                                <img class="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt="" />
                            </div>
                            <div class="col-lg-7">
                                <div class="text-left mb-4">
                                    <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>About Us</h5>
                                    <h1>Innovative Way To Learn</h1>
                                </div>
                                <p>Webskitters Academy Pvt. Ltd, the best IT training Institute in Kolkata, providing top-notch professional IT training online / offline courses to our students. Webskitters been awarded by the Indian government with. “Pride of India” , “Fastest 500 Asia Pacific Award 2014 (by Thailand Govt.)” as well as “Best IT Place To Work”. For eminent work in Web development and design along with Mobile Apps development, Webskitters holds good ranking in international business. We claim 94% client retention with more than 1000+ satisfied clients around the globe.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}

                {/* <!-- Category Start --> */}
                <div class="container-fluid py-5">
                    <div class="container pt-5 pb-3">
                        <div class="text-center mb-5">
                            <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Subjects</h5>
                            <h1>Explore Top Subjects</h1>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-1.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">Web Design</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-2.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">Development</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-3.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">Game Design</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-4.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">Apps Design</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-5.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">Marketing</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-6.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">Research</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-7.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">Content Writing</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/cat-8.jpg" alt="" />
                                    <a class="cat-overlay text-white text-decoration-none" href="">
                                        <h4 class="text-white font-weight-medium">SEO</h4>
                                        <span>100 Courses</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Category Start --> */}

                {/* <!-- Courses Start --> */}
                <div class="container-fluid py-5">
                    <div class="container py-5">
                        <div class="text-center mb-5">
                            <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Courses</h5>
                            <h1>Our Popular Courses</h1>
                        </div>


                        <div class="row">
                            {course?.map((value) => {
                                return (
                                    <>
                                        <div class="col-lg-6 col-md-6 mb-4">
                                            <div class="rounded overflow-hidden mb-2" style={{ height: '500px' }}>
                                                <img class="img-fluid" src={`https://restapinodejs.onrender.com/api/blog/image/${value?._id}`} alt="" style={{ height: '300px' }} />
                                                <div class="bg-secondary p-4">
                                                    <Link class="h5" to={`/homedetails/${value?._id}`}>{value?.title}</Link>
                                                    <div class="border-top mt-4 pt-4">
                                                        <div class="d-flex justify-content-between">
                                                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                            <h5 class="m-0">$99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
                {/* <!-- Courses End --> */}

                {/* <!-- Team Start --> */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-5">
                            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Teachers</h5>
                            <h1>Meet Our Teachers</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3 text-center team mb-4">
                                <div className="team-item rounded overflow-hidden mb-2">
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4">
                                        <h5>Jhon Doe</h5>
                                        <p className="m-0">UI UX Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center team mb-4">
                                <div className="team-item rounded overflow-hidden mb-2">
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4">
                                        <h5>Jhon Doe</h5>
                                        <p className="m-0">Web Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center team mb-4">
                                <div className="team-item rounded overflow-hidden mb-2">
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4">
                                        <h5>Jhon Doe</h5>
                                        <p className="m-0">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center team mb-4">
                                <div className="team-item rounded overflow-hidden mb-2">
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4">
                                        <h5>Jhon Doe</h5>
                                        <p className="m-0">App Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Team End --> */}



            </Layout >
        </>
    )
}

export default Home
