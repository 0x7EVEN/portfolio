import "./main.css";
import heroImg from "./icons/280624363_573847370727522_1347727002567774619_n.jpeg"
import debug from "./icons/debug.svg"

export default function Main () {
    return <div className="container-flex">
        <nav className="navbar navbar-expand-sm navbar-light mb-1 mx-3">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link resume-button" target="_blanck" rel="noreferrer" href="https://drive.google.com/drive/folders/1HPMPAFaVK0Z3NYjMmk4VKf9khfXKoaIx?usp=sharing">Resume</a>
                </li>
            </ul>
        </nav>
        <div className="container">
            <section className="landing mb-5">
                <div className="row vertical-center">
                    <div className="col-lg-8 text-left pb-5">
                        <h1 className="big-text">Arif Shaikh</h1>
                        <p className="lead pl-2">Full Stack Web Developer, ctf player</p>
                    </div>
                    <div className="col-lg-4 text-center my-auto pb-5">
                        {/* <img className="img-fluid blob"
                            src="https://avatars.githubusercontent.com/u/76391543?v=4" alt="hero" /></div> */}
                            <img src={heroImg} />
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <div className="mb-5 pb-5">
                    <h4 className="display-4">A little about me,</h4>
                    <div className="row">
                        <div className="col-12 wrap text-left">
                            <div className="about-desc">
                                <h1 className="bold-text">About</h1>
                                <div className="col pt-5 mx-0">
                                    {/* <h2 className="mb-3">Hello!</h2> */}
                                    <h4 className="about-big">Curious, learning enthusiast and detail-oriented
                                        aspiring full-stack developer with a specialization in MERN stack.
                                        Self motivated and hardworking, with a keen interest in implementing and learning.
                                        Apart from Web Development
                                        I have keen interest in Cybersecurity and CTF
                                        (Capture the flag competitions) primarily in Reverse Engineering and Web Expoitations.
                                    </h4>
                                    <ul className="social-links list-unstyled mt-4">
                                        <li><a target="_blanck" rel="noreferrer" href="https://discord.com/users/0xScar#6816">
                                            <i className="fab fa-discord icon-hero "></i>
                                        </a></li>
                                        <li><a target="_blanck" rel="noreferrer" href="https://github.com/0x7EVEN">
                                            <i className="fab fa-github icon-hero"></i>
                                        </a></li>
                                        <li><a target="_blanck" rel="noreferrer" href="https://www.linkedin.com/in/arif-shaikh-191669205/">
                                            <i className="fab fa-linkedin icon-hero"></i>
                                        </a></li>
                                        <li><a target="_blanck" rel="noreferrer" href="tel:+917057522644">
                                            <i className="fab fa-whatsapp icon-hero"></i>
                                        </a></li>
                                        <li><a target="_blanck" rel="noreferrer" href="https://twitter.com/ar1fshaikh">
                                            <i className="fab fa-twitter icon-hero"></i>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5"></div>
             <section className="mt-5">
                <h1 className="display-4 mt-5">Blogs</h1>
                <h1 className="bold-text bg-text">Writings</h1>
                <div className="row mt-5 mb-5">
                    <div className="col-12">

                        <div className="row my-5 mx-0 py-2">
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" src="https://miro.medium.com/max/1838/1*K5NCFC7xXtfj-E-HsmJT_A.png" alt="MPL hompage" />
                            </div>
                            <div className="col-12 col-md-6 py-2">
                                <h5>Pepperfry clone</h5>
                                <div>
                                    <p className="projects-info pt-1">Pepperfry is indian online marketplace for furniture and home decorations.</p>
                                </div>
                                <div>
                                    <p className="projects-info">Tech Stack : HTML5  |  CSS3  | MongoDB  | ExpressJS | JavaScript</p>
                                </div>
                                <div className="projects-info py-3">
                                    <a className="project-links mx-2" target="_blanck" rel="noreferrer" href="https://github.com/0x7EVEN/pepperfry-clone">Github</a>
                                    <a className="project-links mx-2" target="_blanck" rel="noreferrer" href="https://pepperfryclone-snilaji-gmailcom.vercel.app/">Demo</a>
                                </div>
                            </div>
                        </div>

                        <div className="row my-2 py-2">
                            <div className="col-12 col-md-6 p">
                                <img className="img-fluid" src="https://img.republicworld.com/republic-prod/stories/images/15863458015e8db749828e7.png" alt="MPL hompage" />
                            </div>
                            <div className="col-12 col-md-6 py-2">
                                <h5>MPL clone</h5>
                                <div>
                                    <p className="projects-info pt-1">Web application for providing information about MPL gaming app. Along with products page.</p>
                                </div>
                                <div>
                                    <p className="projects-info">Tech Stack : HTML5  |  CSS3  | MongoDB  | ExpressJS | JavaScript</p>
                                </div>
                                <div className="projects-info py-3">
                                    <a className="project-links mx-2" target="_blanck" rel="noreferrer" href="https://github.com/0x7EVEN/construct-week-2">Github</a>
                                    <a className="project-links mx-2" target="_blanck" rel="noreferrer" href="https://0x7even.github.io/project-presentation-MPL/mainScreen.html">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="row my-2 py-2">
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" src="https://repository-images.githubusercontent.com/286416324/2ab2f780-dfe8-11ea-8824-5b33a66808ac" alt="" />
                            </div>
                            <div className="col-12 col-md-6 py-3">
                                <h5>Tik-tac-toe</h5>
                                <div>
                                    <p className="projects-info pt-1">Two player puzzle game, wherer each player aims to fill all tiles in any direction with chosen sign to win.</p>
                                </div>
                                <div>
                                    <p className="projects-info">Tech Stack : HTML5  |  CSS3  | MongoDB  | ExpressJS | JavaScript</p>
                                </div>
                                <div className="projects-info py-3">
                                    <a className="project-links mx-2" target="_blanck" rel="noreferrer" href="https://github.com/0x7EVEN/Tik-tac-toe">Github</a>
                                    <a className="project-links mx-2" target="_blanck" rel="noreferrer" href="https://tik-tak-toe-0x7even.vercel.app/">Demo</a>
                                </div>
                            </div>                    </div>

                    </div>
                    {/* <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"/>
                            </a>
                            <div className="text p-4 d-block">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"/>
                            </a>
                            <div className="text p-4">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"/>
                            </a>
                            <div className="text p-4">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div> */}
                </div> 
            </section> 
            <section className="interests pt-5 pb-5">

                <h1 className="display-4">Tech I'm familiar with,</h1>
                <h1 className="bold-text bg-text">Tech Stack</h1>

                <div className="row pt-5">
                    <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                        <i class="fas fa-cat"></i>
                            <h3>Pentesting</h3>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                        {/* <i class="fa-solid fa-ban-bug"></i> */}
                        {/* <img src={debug}/> */}
                        {/* <i class="fas fa-bug"></i> */}
                        <i class="fas fa-flag"></i>
                            <h3>CTF compt</h3>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="fab fa-html5"></i>
                            <h3>Front-End Dev</h3>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box">
                            <i className="fas fa-server"></i>
                            <h3>Software dev</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-lg-0">
                        <div className="icon-box">
                        <i class="fas fa-code"></i>
                            <h3>Automation</h3>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="fas fa-database"></i>
                            <h3>DBMS</h3>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="fab fa-python"></i>
                            <h3>Python</h3>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="fas fa-code-branch"></i>
                            <h3>Github</h3>
                        </div>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-12 wrap align-content-center">
                        <div className="row mt-5 flex-column mx-0">
                            <div className="col-12">
                                <h3 className="mb-4 fw-light">Things I am good at :</h3>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="progress-wrap p-3">
                                    <h4 className="skill-title">Web Development</h4>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="progress-wrap p-3">
                                    <h4 className="skill-title">Reverse Engineering/Malware Hunting</h4>
                                    {/* <div className="progress progress-style my-3">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="progress-wrap p-3">
                                    <h4 className="skill-title">Chess</h4>
                                    {/* <div className="progress progress-style my-3">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5"></div>
            <section className="my-5">
                <h1 className="display-4 mt-5">Accomplishment</h1>
                <h1 className="bold-text bg-text">Ranks</h1>
                <div className="row d-flex">
                    <div className="col-md-10">
                        <h4 className="dmb-4 mt-2 profile-text">Participating in online Chess Competitions since 2016.
                            Playing in CTF competitions and Solving hacking challenges since Nov 2020.</h4>
                        <div className="mt-3">
                            <div className="py-3">
                                <div className="desc">
                                    <h2 className="skill-title">TryHackMe -  Top 3%</h2>
                                    <p className="my-2">TryHackMe is infosec learning platform focusing basic and introductory web and
                                        server vulnerabilities and mastering tools like nmap, metasploit, gobuster
                                        BurpSuite, GDB etc.
                                    </p>
                                </div>
                            </div>

                            <div className="py-3">
                                <div className="desc">
                                    <h2 className="skill-title">PortSwigger - Level 7</h2>
                                    <p className="my-2">These challenges aim to get familier with  OWSP top 10 vulnerabilities, completed 51 of web vulnerability labs.</p>
                                </div>
                            </div>

                            <div className="py-3">
                                <div className="desc">
                                    <h2 className="skill-title">Lichess - top 10% (blitz)</h2>
                                    <p className="my-2">Lichess is open source and one of the best chess platform.Current ELO 2050 with 2099 being hieghts of all time.</p>
                                </div>
                            </div>

                            <div className="py-3">
                                <div className="desc">
                                    <h2 className="skill-title">Certificates (Sololearn)  - C, C++, PHP, Python, React {"&"} Redux, SQL.</h2>
                                    <p className="my-2">Sololearn is the world's largest community of people learning to code. With over 25 programming courses, with options of both free and paid courses.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5"></div>
            <section>
                <div className="my-5">
                    <h1 className="display-4 mt-5">Achievements</h1>
                    <h1 className="bold-text bg-text">Academics</h1>
                    <div className="py-3">
                        <div className="desc">
                            <h2 className="light-text">Full stack web development</h2>
                            <p>Masai School, Banglore (Karnataka)</p>
                        </div>
                        <div>
                            <p>Apr 2021 - Dec 2021</p>
                        </div>
                    </div>

                    <div className="py-3">
                        <div className="desc">
                            <h2 className="light-text">Civil Engineering</h2>
                            <p>Dnyanshree Institute of Engineering, Satara (Maharastra)</p>
                        </div>
                        <div>
                            <p>Aug 2016 - Aug 2020</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5"></div>
            <section>
                <h1 className="display-4 mt-5">Let's Talk</h1>
                <h1 className="bold-text bg-text">Contact</h1>
                <div className="text-left">
                    <div className="pt-5">
                        <h2 className="mb-5">Have a great product and need a job profile or just want to have a chat?
                            <br />
                            My inbox is always open!</h2>
                        <ul className="social-links list-unstyled mt-4">
                            <li><a target="_blanck" rel="noreferrer" href="https://discord.com/users/0xScar#6818">
                                <i className="fab fa-discord icon-hero "></i>
                            </a></li>
                            <li><a target="_blanck" rel="noreferrer" href="mailto:ar1fshaikh@protonmail.com">
                                <i className="far fa-envelope icon-hero"></i>
                            </a></li>
                            <li><a target="_blanck" rel="noreferrer" href="https://www.linkedin.com/in/arif-shaikh-191669205/">
                                <i className="fab fa-linkedin icon-hero"></i>
                            </a></li>
                            <li><a target="_blanck" rel="noreferrer" href="https://twitter.com/ar1fshaikh">
                                <i className="fab fa-twitter icon-hero"></i>
                            </a></li>
                            <li><a target="_blanck" rel="noreferrer" href="tel:+917057522644">
                                <i className="fab fa-whatsapp icon-hero"></i>
                            </a></li>
                            <li><a target="_blanck" rel="noreferrer" href="https://instagram.com/ar1fshaikh">
                                <i className="fab fa-instagram icon-hero"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-5 pb-5 text-center">
                </div>
                <div className="pt-5 pb-2 text-center">
                </div>
            </section>
        </div>
    </div>;
}

// <li><a href="https://discord.com/users/0xScar#6816">
// <i className="fab fa-discord icon-hero "></i>
// </a></li>
// <li><a href="https://github.com/0x7EVEN">
// <i className="fab fa-github icon-hero"></i>
// </a></li>
// <li><a href="https://www.linkedin.com/in/arif-shaikh-191669205/">
// <i className="fab fa-linkedin icon-hero"></i>
// </a></li>
// <li><a href="tel:+917057522644">
// <i className="fab fa-whatsapp icon-hero"></i>
// </a></li>
// <li><a href="https://twitter.com/ar1fshaikh">
// <i className="fab fa-twitter icon-hero"></i>
// </a></li>