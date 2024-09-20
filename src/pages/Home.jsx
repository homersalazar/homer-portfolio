import React from 'react';
import SocialMedia from '../components/social/SocialMedia';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const circleStyles = {
        position: "absolute",
        borderRadius: "50%",
    };

    const circleOne = {
        ...circleStyles,
        backgroundColor: "#3498db",
        width: "50vw",
        height: "50vw",
        maxWidth: "350px",
        maxHeight: "350px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 10s ease infinite",
        zIndex: 0,  
    };

    const circleTwo = {
        ...circleStyles,
        backgroundColor: "violet",
        width: "35vw",
        height: "35vw",
        maxWidth: "250px",
        maxHeight: "250px",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: "right 30s ease infinite",
        zIndex: 0
    };

    const circleThree = {
        ...circleStyles,
        backgroundColor: "#ffbe76",
        width: "30vw",
        height: "30vw",
        maxWidth: "200px",
        maxHeight: "200px",
        bottom: "5%",
        right: "5%",
        transform: "translate(50%, 50%)",
        animation: "left 30s ease infinite",
        zIndex: 0
    };

    const background = {
        backdropFilter: "blur(50px)",
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div style={circleOne}>
                <div style={circleTwo}></div>
                <div style={circleThree}></div>
            </div>
            <div className='relative flex flex-col w-full h-full' style={background}>
                <div className='flex flex-row justify-end w-full'>
                    <div className='flex flex-col sm:flex-row justify-end pt-5 sm:pt-5 md:pt-12 px-5 sm:px-5 md:px-10 z-10 gap-4' data-aos="fade-left">
                        <SocialMedia />
                    </div>
                </div>

                <div className='absolute inset-0 flex flex-col justify-center items-center w-full text-white'>
                    <h1 
                        className='text-4xl sm:text-6xl md:text-6xl text-center px-4 font-bold tracking-wide' 
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        Hi, I'm Homer!
                    </h1>
                    <h1 
                        className='text-4xl sm:text-6xl md:text-6xl text-center px-4 font-bold tracking-wide py-2' 
                        data-aos="fade-up"
                        data-aos-duration="2800"
                    >
                        Everything is a <span className='text-[var(--cyan)]'>learning experience.</span>
                    </h1>
                    <p 
                        className='py-4 tracking-wide leading-8 text-xl font-normal px-4 text-center' 
                        data-aos="fade-up"                         
                        data-aos-duration="2600"
                    >
                        I'm a Web Developer based in the Philippines.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;