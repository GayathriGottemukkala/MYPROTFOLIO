// import React from 'react';
// import './Portfolio.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// import gamming from "../../img/gamming.png";
// import Weather from "../../img/weather.png";
// import Elearning from "../../img/elearning.png";
// import Bookstore from "../../img/bookstore.png";
// import jiomatrimony from "../../img/jiomatrimony.png";
// import unstop from "../../img/blogs.png";
// import ipl from "../../img/ipl.png";
// import bookFound from "../../img/bookfind.png";
// import portfolio from "../../img/portfolio.png";
// import streelancer from "../../img/streelancer.png";

// const Portfolio = () => {
//     const projects = [
        
//         { src: gamming, link: 'https://gammingcart.vercel.app/', text: 'Click to see my project' },
//         { src: Weather, link: 'https://firefly-s1gh-gayathris-projects-d17c1cfd.vercel.app/', text: 'Click to see my project' },
//         { src: unstop, link: 'https://unstop-blog-app.vercel.app/', text: 'Click to see my project' },
//         { src: streelancer, link: 'https://streelancer.com', text: 'Click to see my project' },
//         {src:bookFound,link:'https://book-finder-beta-seven.vercel.app/', text: 'Click to see my project' },
//         { src: jiomatrimony, link: 'https://jiomatrimony.com/dashboard', text: 'Click to see my project' },
//         { src: Elearning, link: 'https://gammingcart.vercel.app/gaming', text: 'Click to see my project' },
//         { src: ipl, link: 'https://ipldashboard-pink.vercel.app/', text: 'Click to see my project' },
//         { src: Bookstore, link: 'https://firefly-nine-opal.vercel.app/', text: 'Click to see my project' },
//         { src: portfolio, link: 'https://myportfolio2-chi.vercel.app/', text: 'Click to see my project' },
        
//     ];

//     console.log("Projects:", projects);

//     return (
//         <div data-aos="fade-up">

//             <div className="portfolio" id="portfolio" >
//                 <span>Recent Projects</span>
//                 <span>Portfolio</span>
//             </div>
//             <Swiper
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 modules={[Navigation, Pagination, A11y, Autoplay]}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1,
//                         spaceBetween: 20,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                         spaceBetween: 40,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                         spaceBetween: 50,
//                     },
//                 }}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 {/* {projects.map((project, index) => (
//                     <SwiperSlide key={index}>
//                         <a href={project.link} target="_blank" rel="noopener noreferrer">
//                             <img src={project.src} alt={`Slide ${index + 1}`} />
//                             <div className="slide-text">{project.text}</div>
//                         </a>
//                     </SwiperSlide>
//                 ))} */}
//                 {projects.map((project, index) => (
//   <SwiperSlide key={index}>
//     {project.src === jiomatrimony ? (
//       <a href="/jiomatrimony">
//         <img src={project.src} alt={`Slide ${index + 1}`} />
//         <div className="slide-text">{project.text}</div>
//       </a>
//     ) : (
//       <a href={project.link} target="_blank" rel="noopener noreferrer">
//         <img src={project.src} alt={`Slide ${index + 1}`} />
//         <div className="slide-text">{project.text}</div>
//       </a>
//     )}
//   </SwiperSlide>
// ))}

//             </Swiper>
//         </div>);
// };

// export default Portfolio;



import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import gamming from "../../img/gamming.png";
import Weather from "../../img/weather.png";
import Elearning from "../../img/elearning.png";
import Bookstore from "../../img/bookstore.png";
import jiomatrimony from "../../img/jiomatrimony.png";
import unstop from "../../img/blogs.png";
import ipl from "../../img/ipl.png";
import bookFound from "../../img/bookfind.png";
import portfolio from "../../img/portfolio.png";
import streelancer from "../../img/streelancer.png";

const Portfolio = () => {
    const allProjects = [
        { src: gamming, link: 'https://gammingcart.vercel.app/', text: 'Click to see my project' },
        { src: Weather, link: 'https://firefly-s1gh-gayathris-projects-d17c1cfd.vercel.app/', text: 'Click to see my project' },
        { src: unstop, link: 'https://unstop-blog-app.vercel.app/', text: 'Click to see my project' },
        { src: streelancer, link: 'https://streelancer.com', text: 'Click to see my project' },
        { src: bookFound, link: 'https://book-finder-beta-seven.vercel.app/', text: 'Click to see my project' },
        { src: jiomatrimony, link: 'https://jiomatrimony.com/dashboard', text: 'Click to see my project' },
        { src: Elearning, link: 'https://gammingcart.vercel.app/gaming', text: 'Click to see my project' },
        { src: ipl, link: 'https://ipldashboard-pink.vercel.app/', text: 'Click to see my project' },
        { src: Bookstore, link: 'https://firefly-nine-opal.vercel.app/', text: 'Click to see my project' },
        { src: portfolio, link: 'https://myportfolio2-chi.vercel.app/', text: 'Click to see my project' },
    ];

    const featuredProjects = allProjects.filter(p =>
        p.src === streelancer || p.src === jiomatrimony
    );

    const carouselProjects = allProjects.filter(p =>
        p.src !== streelancer && p.src !== jiomatrimony
    );

    return (
        <div data-aos="fade-up">
            <div className="portfolio" id="portfolio">
                <span>Recent Projects</span>
                <span>Portfolio</span>
            </div>


            {/* Carousel for Other Projects */}
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                }}
            >
                {carouselProjects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.src} alt={`Slide ${index + 1}`} />
                            <div className="slide-text">{project.text}</div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

                        {/* Featured Projects: Streelancer & Jiomatrimony */}
      <div className="featured-projects">
        <h2 className="featured-heading">Industry-Level Projects</h2>
<div>
  {featuredProjects.map((project, index) => {
    return (
      project.src === jiomatrimony ? (
        <a key={index} href="/jiomatrimony" target="_blank" rel="noopener noreferrer" className="featured-project-card">
          <img src={project.src} alt={`Slide ${index + 1}`} />
          <div className="slide-text">{project.text}</div>
        </a>
      ) : (
        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="featured-project-card">
          <img src={project.src} alt={`Slide ${index + 1}`} />
          <div className="slide-text">{project.text}</div>
        </a>
      )
    );
  })}
  </div>
</div>



        </div>
    );
};

export default Portfolio;
