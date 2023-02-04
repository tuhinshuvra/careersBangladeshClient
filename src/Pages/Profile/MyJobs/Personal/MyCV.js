import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../../../assets/images/profile/profile.jpg';
import './MyCV.css';

const MyCV = () => {
    return (
        <div>

            <article className="resume-wrapper text-center position-relative">
                <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                    <header className="resume-header pt-4">
                        <div className=' d-flex justify-content-evenly'>
                            <div className="col-lg-3 ">
                                <img className="profile_pic" src={ProfilePic} alt="" />
                            </div>
                            {/* <!--//col--> */}
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className=' d-flex justify-content-evenly gap-1 mt-lg-4'>
                                        <div className=' col-lg-8'>
                                            <div className="primary-info col-auto">
                                                <h1 className="name mt-0 mb-1 text-uppercase">Abdur Razzak</h1>
                                                <div className="title mb-3 fw-bold">Full Stack Developer</div>
                                                <ul className="list-unstyled">
                                                    <li className="mb-2"><Link className="text-link text-decoration-none" to="#"><i className="far fa-envelope fa-fw" data-fa-transform="grow-3"></i>abdurrazzak@gmail.com</Link></li>
                                                    <li><Link className="text-link text-decoration-none" to="#"><i className="fas fa-mobile-alt fa-fw" data-fa-transform="grow-6"></i>0123 456 78900</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!--//primary-info--> */}
                                        <div className=' col-lg-4'>
                                            <div className="secondary-info col-auto mt-2">
                                                <ul className="resume-social list-unstyled">
                                                    <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/stevedoe</Link></li>
                                                    <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-github-alt fa-fw"></i></span>github.com/username</Link></li>
                                                    <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-codepen fa-fw"></i></span>codepen.io/username/</Link></li>
                                                    <li><Link className="text-link" to="#"><span className="fa-container text-center"><i className="fas fa-globe"></i></span>yourwebsite.com</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!--//secondary-info--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                            </div>

                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </header>
                    <div className="resume-body p-5">
                        <section className="resume-section summary-section mb-5">
                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                            <div className="resume-section-content">
                                <p className="mb-0">Summarise your career here. <Link className="text-reset text-link" to="https://themes.3rdwavemedia.com/resources/sketch-template/pillar-sketch-sketch-resume-template-for-developers/" target="_blank">You can make a PDF version of your resume using our free Sketch template here</Link>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                        </section>
                        {/* <!--//summary-section--> */}
                        <div className="row">
                            <div className="col-lg-9">
                                <section className="resume-section experience-section mb-5">
                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                                    <div className="resume-section-content">
                                        <div className="resume-timeline position-relative">
                                            <article className="resume-timeline-item position-relative pb-5">

                                                <div className="resume-timeline-item-header mb-2">
                                                    <div className="d-flex flex-column flex-md-row">
                                                        <h3 className="resume-position-title font-weight-bold mb-1">Lead Developer</h3>
                                                        <div className="resume-company-name ms-auto">Startup Hub</div>
                                                    </div>
                                                    {/* <!--//row--> */}
                                                    <div className="resume-position-time">2020 - Present</div>
                                                </div>
                                                {/* <!--//resume-timeline-item-header--> */}
                                                <div className="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                                                    <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                                    <ul>
                                                        <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                                                        <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                                        <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                                                        <li>Maecenas tempus tellus eget.</li>
                                                    </ul>
                                                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Angular</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Python</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">jQuery</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Webpack</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML/SASS</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">PostgresSQL</span></li>
                                                    </ul>
                                                </div>
                                                {/* <!--//resume-timeline-item-desc--> */}

                                            </article>
                                            {/* <!--//resume-timeline-item--> */}

                                            <article className="resume-timeline-item position-relative pb-5">

                                                <div className="resume-timeline-item-header mb-2">
                                                    <div className="d-flex flex-column flex-md-row">
                                                        <h3 className="resume-position-title font-weight-bold mb-1">Senior Software Developer</h3>
                                                        <div className="resume-company-name ms-auto">Google</div>
                                                    </div>
                                                    {/* <!--//row--> */}
                                                    <div className="resume-position-time">2016 - 2020</div>
                                                </div>
                                                {/* <!--//resume-timeline-item-header--> */}
                                                <div className="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">React</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Redux</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Django</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Webpack</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML/SASS</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">MySQL</span></li>
                                                    </ul>
                                                </div>
                                                {/* <!--//resume-timeline-item-desc--> */}

                                            </article>
                                            {/* <!--//resume-timeline-item--> */}

                                            <article className="resume-timeline-item position-relative pb-5">

                                                <div className="resume-timeline-item-header mb-2">
                                                    <div className="d-flex flex-column flex-md-row">
                                                        <h3 className="resume-position-title font-weight-bold mb-1">Co-Founder & Lead Developer</h3>
                                                        <div className="resume-company-name ms-auto">To-do Lists</div>
                                                    </div>
                                                    {/* <!--//row--> */}
                                                    <div className="resume-position-time">2012 - 2016</div>
                                                </div>
                                                {/* <!--//resume-timeline-item-header--> */}
                                                <div className="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Django</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">JavaScript</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Node.js</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Require.js</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML/SASS</span></li>
                                                    </ul>
                                                </div>
                                                {/* <!--//resume-timeline-item-desc--> */}

                                            </article>
                                            {/* <!--//resume-timeline-item--> */}

                                            <article className="resume-timeline-item position-relative">

                                                <div className="resume-timeline-item-header mb-2">
                                                    <div className="d-flex flex-column flex-md-row">
                                                        <h3 className="resume-position-title font-weight-bold mb-1">Web Developer <small className="text-muted">(Intern)</small></h3>
                                                        <div className="resume-company-name ms-auto">Amazon</div>
                                                    </div>
                                                    {/* <!--//row--> */}
                                                    <div className="resume-position-time">2011 - 2012</div>
                                                </div>
                                                {/* <!--//resume-timeline-item-header--> */}
                                                <div className="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.</p>
                                                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Ruby on Rails</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">jQuery</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML/LESS</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">MongoDB</span></li>
                                                    </ul>
                                                </div>
                                                {/* <!--//resume-timeline-item-desc--> */}

                                            </article>
                                            {/* <!--//resume-timeline-item--> */}


                                        </div>
                                        {/* <!--//resume-timeline--> */}






                                    </div>
                                </section>
                                {/* <!--//experience-section--> */}
                            </div>
                            <div className="col-lg-3">
                                <section className="resume-section skills-section mb-5">
                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                                    <div className="resume-section-content">
                                        <div className="resume-skill-item">
                                            <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                                            <ul className="list-unstyled mb-4">
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">Angular</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "98%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">React</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "94%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">JavaScript</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "96%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>

                                                <li className="mb-2">
                                                    <div className="resume-skill-name">Node.js</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "92%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "96%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!--//resume-skill-item--> */}

                                        <div className="resume-skill-item">
                                            <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">Python/Django</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">Ruby/Rails</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "92%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">PHP</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "86%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="resume-skill-name">WordPress/Shopify</div>
                                                    <div className="progress resume-progress">
                                                        <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "82%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!--//resume-skill-item--> */}

                                        <div className="resume-skill-item">
                                            <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><span className="badge badge-light">DevOps</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">Wireframing</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">Sketch</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">Balsamiq</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">WordPress</span></li>
                                                <li className="list-inline-item"><span className="badge badge-light">Shopify</span></li>
                                            </ul>
                                        </div>
                                        {/* <!--//resume-skill-item--> */}
                                    </div>
                                    {/* <!--resume-section-content--> */}
                                </section>
                                {/* <!--//skills-section--> */}
                                <section className="resume-section education-section mb-5">
                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                    <div className="resume-section-content">
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <div className="resume-degree font-weight-bold">MSc in Computer Science</div>
                                                <div className="resume-degree-org">University College London</div>
                                                <div className="resume-degree-time">2010 - 2011</div>
                                            </li>
                                            <li>
                                                <div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
                                                <div className="resume-degree-org">Imperial College London</div>
                                                <div className="resume-degree-time">2007 - 2010</div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                {/* <!--//education-section--> */}
                                <section className="resume-section reference-section mb-5">
                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
                                    <div className="resume-section-content">
                                        <ul className="list-unstyled resume-awards-list">
                                            <li className="mb-2 ps-4 position-relative">
                                                <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                                <div className="resume-award-name">Award Name Lorem</div>
                                                <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</div>
                                            </li>
                                            <li className="mb-0 ps-4 position-relative">
                                                <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                                <div className="resume-award-name">Award Name Ipsum</div>
                                                <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque.</div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                {/* <!--//interests-section--> */}
                                <section className="resume-section language-section mb-5">
                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                                    <div className="resume-section-content">
                                        <ul className="list-unstyled resume-lang-list">
                                            <li className="mb-2"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                                            <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">French</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                                            <li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                                        </ul>
                                    </div>
                                </section>
                                {/* <!--//language-section--> */}
                                <section className="resume-section interests-section mb-5">
                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                                    <div className="resume-section-content">
                                        <ul className="list-unstyled">
                                            <li className="mb-1">Climbing</li>
                                            <li className="mb-1">Snowboarding</li>
                                            <li className="mb-1">Cooking</li>
                                        </ul>
                                    </div>
                                </section>
                                {/* <!--//interests-section--> */}

                            </div>
                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//resume-body--> */}

                </div></article>
        </div>






    );
};

export default MyCV;