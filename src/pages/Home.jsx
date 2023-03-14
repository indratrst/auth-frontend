import React, { useEffect, useState } from 'react'
import Hero from "../images/hero.png"
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [projects, setProjects] = useState([]);
  const [achieve, setAchieve] = useState([]);


  useEffect(() => {
    getProjects();
    getAchieve();
  }, []);

  const getProjects = async () => {
    const response = await axios.get("http://localhost:5000/projects");
    setProjects(response.data);
  };

  const getAchieve = async () => {
    const response = await axios.get("http://localhost:5000/achieve");
    setAchieve(response.data);
  };

 
  return (
    <div>
      {/* <!-- Section Navbar Start --> */}
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-[9999]">
      <div className="container ">
        <div className="flex items-center justify-between relative ">
          <div className="px-4 ">
            <a href="#home" className="font-bold text-lg text-primary block py-6 ">Indra Tristia</a>
          </div>

          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none dark:bg-dark dark:lg:bg-transparent dark:shadow-red-900">

              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary ">Beranda</a>
                </li>
                <li className="group">
                  <a href="#about" className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary ">About Me</a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary ">Portfolio</a>
                </li>
                <li className="group">
                  <a href="#client" className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary ">Clients</a>
                </li>
                <li className="group">
                  <a href="#blog" className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary ">Blog</a>
                </li>
                <li className="flex items-center mt-3 lg:mt-0 sm:justify-center">
                  <div className="flex justify-center ml-4">
                    <span className="text-sm text-slate-500 mr-2">light</span>
                    <input type="checkbox" id="dark-toggle" className="hidden" />
                    <label htmlFor="dark-toggle">
                      <div className="w-9 h-5 bg-slate-800 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full toggle-circle transition duration-300 ease-in-out"></div>
                      </div>
                    </label>
                    <span className="text-sm text-slate-500 ml-2">dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    {/* <!-- Section Navbar  End--> */}

    {/* <!-- Hero Section Start --> */}
    <section id="home" className="pt-20 lg:pt-44 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">Welcome All 👋, Saya <span className="block text-dark text-4xl font-bold mt-1 lg:5xl dark:text-light"> Indra Tristia </span></h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Job Seeker & <span className="text-dark dark:text-light"> Front End Web Development </span></h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">Bekerja adalah selingan waktu  <span className="text-dark font-bold uppercase dark:text-light">Shalat !</span></p>

            <a href="#" className="text-base font-semibold bg-primary py-3 px-8 rounded-full text-white hover:shadow-lg hover:opacity-80 transition duration-400 ease-in-out cursor-pointer relative z-50">Hubungi Saya </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="-mt-24 relative lg:right-0">
              <img src={Hero} alt="pic hero" className="relative z-10 max-w-full mx-auto lg:-mt-64 transform " />
              <span className="absolute -bottom-3  left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#961c1c" d="M36.6,-20.9C50.5,-11.8,66.9,3.6,65,16.1C63.2,28.6,43.1,38.2,24,46C4.8,53.8,-13.4,59.8,-18.2,52C-23.1,44.3,-14.5,22.8,-21.7,1.9C-28.9,-19,-51.9,-39.4,-50.9,-45.5C-49.9,-51.7,-25,-43.6,-6.8,-38.2C11.4,-32.8,22.8,-30,36.6,-20.9Z" transform="translate(100 100) scale(1)" />
                </svg>
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Hero Section End --> */}

    {/* <!-- Section About Start --> */}
    <section id="about" className="pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
            <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-light">Yuk, Let Me Introduce Myself.</h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, dignissimos asperiores maxime nostrum facere error!</p>
          </div>
          <div className="w-full px-4 lg:w-1/2 lg:pt-10">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl dark:text-light">Let's Be Friend</h3>
            <p className="text-base font-medium text-secondary mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas, itaque a omnis obcaecati at repellendus ut explicabo!</p>
            <div className="flex items-center">
              {/* <!-- gmail --> */}
              <a href="https://www.instagram.com/indratrst/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center  border border-slate-300 text-light  hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </a>
  
              {/* <!-- instagram --> */}
              <a href="https://www.instagram.com/indratrst/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-light  hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram</title>
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  />
                </svg>
              </a>
  
              {/* <!-- twitter --> */}
              <a href="https://www.twitter.com/indratrst/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-light  hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Twitter</title>
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
  
              {/* <!-- facebook --> */}
              <a href="https://www.facebook.com/indratristia/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-light  hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook</title>
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Section About End --> */}

    {/* <!-- portfolio section start--> */}
    
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-light">My Project</h2>
            <p className="font-medium text-base text-secondary md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea facilis hic fugiat temporibus quam quo, optio repudiandae perspiciatis molestiae?</p>
          </div>
        </div>
       
        <div className="w-full px-4 flex flex-wrap justify-center">
        {projects.map((project) => (
          <>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Link to={project.link}>
              <img src={project.url} alt="portfolio1" width="w-full" />
              </Link>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">{project.title}</h3>
            <p className="font-medium text-base text-secondary md:text-lg">{project.description}</p>
          </div>
          </>
    ))
  }
        </div>
      </div>
    </section>
   
    
    {/* <!-- portfolio section end--> */}

    {/* <!-- Client Section Start --> */}
    <section id="client" className="pt-36 pb-32 bg-slate-800 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className=" mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang pernah bekerjasama</h2>
            <p className="font-medium text-base text-secondary md:text-lg ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor perferendis nesciunt unde.</p>
          </div>


          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a href="" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="dist/image/clients/client-2.svg" alt=""/>
              </a>
              <a href="" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="dist/image/clients/client-1.svg" alt=""/>
              </a>
              <a href="" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="dist/image/clients/client-2.svg" alt=""/>
              </a>
              <a href="" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="dist/image/clients/client-1.svg" alt=""/>
              </a>
              <a href="" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="dist/image/clients/client-2.svg" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    {/* <!-- Client Section End  --> */}

    {/* <!-- Gallery --> */}
    
    <section id="blog" className="pt-24 pb-12 dark:bg-slate-800">
      <div className="max-w-xl mx-auto text-center mb-16">
        <h4 className="font-semibold text-lg text-primary mb-2">Achieve</h4>
        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-light">Achievement Personal</h2>
        <p className="font-medium text-base text-secondary md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea facilis hic fugiat temporibus quam quo, optio repudiandae perspiciatis molestiae?</p>
      </div>
    <div className="container mx-auto mt-28  sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly lg:justify-around w-full px-4 mb-12">
    {achieve.map((item) => (
          <>
          <div className="grid-card">
        <img src={item.url} alt="pc" className="w-full" />

        <div className="py-4 px-5">
          <div className="font-semibold text-xl mb-2">{item.title}</div>
          <p className="text-sm text-slate-500 dark:text-light">{item.description}</p>
        </div>
        <a href="#" className=" inline-block mx-5 mb-3 text-sm bg-primary py-1 px-4 rounded-md text-white hover:shadow-lg hover:opacity-80 transition duration-400 ease-in-out">Baca Selengkapnya </a>
      </div>
          </>
    ))
  }
      
    </div>
    </section>
    {/* <!--  Gallery Section end--> */}


    {/* <!-- footer --> */}
    <footer className="bg-dark pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="font-bold text-4xl text-white mb-5 hover:text-primary transition duration-300 ease-in-out">Indra Tristia</h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p>tristia71@gmail.com</p>
            <p>Jalan Encep Kartawiria</p>
            <p>Cimahi</p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
            <ul className="text-slate-300 ">
              <li>
                <a href="" className="inline-block text-base hover:text-primary mb-3">Programming</a>
              </li>
              <li>
                <a href="" className="inline-block text-base hover:text-primary mb-3">Teknologi</a>
              </li>
              <li>
                <a href="" className="inline-block text-base hover:text-primary mb-3">Hobby</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300 ">
              <li>
                <a href="#home" className="inline-block text-base hover:text-primary mb-3">Beranda</a>
              </li>
              <li>
                <a href="#about" className="inline-block text-base hover:text-primary mb-3">Tentang Saya</a>
              </li>
              <li>
                <a href="#client" className="inline-block text-base hover:text-primary mb-3">Clients</a>
              </li>
              <li>
                <a href="#blog" className="inline-block text-base hover:text-primary mb-3">Blog</a>
              </li>
              <li>
                <a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a>
              </li>
            </ul>
          </div>
        </div>


        

        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
           {/* <!-- gmail --> */}
           <a href="https://www.instagram.com/indratrst/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
            <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
          </a>
            {/* <!-- instagram --> */}
            <a href="" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
              </svg>
            </a>

            {/* <!-- twitter --> */}
            <a href="" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title>
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>

            {/* <!-- facebook --> */}
            <a href="" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" className="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Facebook</title>
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
          </div>
          <p className="font-medium text-sm text-slate-500 text-center">Created BY <a href="" className="text-primary"> Indra Tristia </a> 2022</p>
        </div>
      </div>
    </footer>
    {/* <!-- footer end --> */}

    </div>
  )
}

export default Home