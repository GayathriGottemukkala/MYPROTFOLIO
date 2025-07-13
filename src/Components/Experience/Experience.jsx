// import React, { useContext } from "react";
// import { themeContext } from "../../Context";
// import "./Experience.css";
// const Experience = () => {
//     const theme = useContext(themeContext);
//     const darkMode = theme.state.darkMode;

//     return (
//         <div className="experience" id='experience' data-aos="zoom-in-right"
//             data-aos-anchor-placement="top-bottom">
//             <div className="achievement">

//                 <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>1+</div>
//                 <span style={{ color: darkMode ? 'white' : '' }}>years </span>
//                 <span>Experience</span>
//             </div>
//             <div className="achievement">
//                 <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>10+</div>
//                 <span style={{ color: darkMode ? 'white' : '' }}>completed </span>
//                 <span>Projects</span>
//             </div>
//             <div className="achievement">
//                 <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>1+</div>
//                 <span style={{ color: darkMode ? 'white' : '' }}>companies </span>
//                 <span>Work</span>
//             </div>
//         </div>
//     );
// };

// export default Experience;



import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="experience" id="experience" data-aos="zoom-in-right"
            data-aos-anchor-placement="top-bottom">
            <div className="experience-header">
                <h2 style={{ color: darkMode ? 'white' : '#333' }}>Professional Experience</h2>
            </div>

            <div className="experience-content">
                <div className="job-card">
                    <h3 >
                        Jobs Territory – Full Stack Developer
                    </h3>
                    <p className="project-title">Project: Streelancer <span>(June 2025 – Present)</span></p>
                    <ul>
                        <li>Individually developed and deployed a scalable freelancing platform using React.js, Node.js, Express, and MongoDB.</li>
                        <li>Integrated user authentication, multi-step forms, image uploads, and dynamic dashboards.</li>
                        <li>Configured production deployment with PM2, Nginx, and SSL on AWS EC2.</li>
                    </ul>
                </div>

                <div className="job-card">
                    <h3 >
                        Neuzen AI – Full Stack Developer
                    </h3>
                    <p className="project-title">Project: JioMatrimony <span>(July 2024 – Nov 2024)</span></p>
                    <ul>
                        <li>Built a responsive matrimonial web app from scratch using React.js, Node.js, and MongoDB.</li>
                        <li>Optimized backend and frontend for 30% faster load time, with responsive UI for mobile and desktop.</li>
                        <li>Implemented real-time profile filtering and image storage using GridFS and base64 encoding.</li>
                    </ul>
                </div>

                <div className="job-card">
                    <h3 >
                        CodeGene Software Solutions – Frontend Developer
                    </h3>
                    <p className="project-title">Project: KYC Platform <span>(Oct 2023 – Jan 2024)</span></p>
                    <ul>
                        <li>Individually developed UI components for a KYC verification portal using React, HTML, CSS, and JavaScript.</li>
                        <li>Improved user satisfaction by 20% and reduced design-to-code time by 15% through optimized workflows.</li>
                        <li>Collaborated closely with the backend team for integration and testing.</li>
                    </ul>
                </div>
            </div>

            <div className="summary-cards">
                <div className="achievement">
                    <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>1+</div>
                    <span style={{ color: darkMode ? 'white' : '' }}>years </span>
                    <span>Experience</span>
                </div>
                <div className="achievement">
                    <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>10+</div>
                    <span style={{ color: darkMode ? 'white' : '' }}>Completed</span>
                    <span>Projects</span>
                </div>
                <div className="achievement">
                    <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>3</div>
                    <span style={{ color: darkMode ? 'white' : '' }}>Companies</span>
                    <span>Worked</span>
                </div>
            </div>
        </div>
    );
};

export default Experience;
