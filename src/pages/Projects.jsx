import ProSynergy from '../assets/ProSynergy.png';
import Lms from '../assets/LMS.png';
import Sellers from '../assets/Sellers.png';
import Warehousing from '../assets/Warehouse.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/style.css'

import { Pagination } from 'swiper/modules';
import Link from '../components/button/Link';

const Projects = () => {
    const projects = [
        {
            src: ProSynergy,
            name: 'ProSynergy Inc.',
            description: 'Consulting Website',
            link: 'https://prosynergy.ph/'
        },
        {
            src: Lms,
            name: 'Leave Management System',
            description: 'Automates tracking and approvals of employee leave, streamlining time-off processes and boosting efficiency.',
            link: ''
        },
        {
            src: Sellers,
            name: 'Seller\'s Portal',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla risus, hendrerit ut sodales at, fringilla in ex.',
            link: ''
        },
        {
            src: Warehousing,
            name: 'Warehouse System',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla risus, hendrerit ut sodales at, fringilla in ex.',
            link: 'http://warehouse.lovestoblog.com/'
        },
        {
            src: 'https://github.com/homersalazar/SpendSense/assets/110954891/72ff8e6d-e8d0-4ad0-8d35-d377cc22f809',
            name: 'Spendsense',
            description: 'Spendsense streamlines expense tracking, helping you monitor and manage your finances with ease.',
            link: 'http://spendsenses.lovestoblog.com/'
        }
    ];

    return (
        <>
            <div className='flex justify-center mt-28'>
                <div className="h-screen w-full">
                    <div className="md:m-10 m-5 card bg-base-200">
                        <div className="flex flex-row md:m-10 m-5">
                            <div className='flex flex-row gap-3'>             
                                <svg 
                                    className='mt-1'
                                    xmlns="http://www.w3.org/2000/svg"                   
                                    height="24" 
                                    width="30"  
                                    viewBox="0 0 256 512"
                                >
                                    <path
                                        fill='#10F0FC'
                                        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"                                
                                    />
                                </svg>  
                                <h1 className='font-bold text-3xl '>
                                    Featured Creations
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-10 md:m-10 m-5">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    }
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index} className='hover:scale-90 transition-transform duration-200'>
                                        <div className="card bg-base-100 w-[22rem] shadow-xl">
                                            <figure className="h-[12.5rem] md:h-[11rem] lg:h-[11rem] xl:h-52">
                                                <img
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                    src={project.src}
                                                    alt={project.name}
                                                />
                                            </figure>
                                            <div className="card-body p-4 text-sm sm:text-base h-[10.6rem] md:h-[13.5rem] lg:h-52 xl:h-[12rem]">
                                                <h2 className="card-title">{project.name}</h2>
                                                <p>{project.description}</p>
                                                <div className="card-actions justify-end">
                                                    {project.link && (
                                                        <Link
                                                            label='Visit'
                                                            link={project.link}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
