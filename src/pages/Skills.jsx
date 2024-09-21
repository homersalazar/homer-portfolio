import Button from '../components/button/button'
import ArrowRight from '../components/icon/ArrowRight'

const Skills = () => {
    const frontend = [
        'HTML', 
        'CSS',
        'JavaScript',
        'React JS',
        'Tailwind',
        'Bootstrap',
        'Node',
        'Ajax',
        'JQuery',
        'Mobile Responsive',
        'Photoshop'
    ]

    const backend = [
        'PHP', 
        'Laravel',
        'Express',
        'Mysql',
        'Node',
        'DBMS'
    ]

    return (
        <>
            <div className='flex justify-center h-screen'>
                <div className='w-full'>
                    <div className='md:m-20 m-5'>
                        <div className='flex flex-row gap-3' data-aos="fade-right">             
                            <ArrowRight />
                            <h1 className='font-bold text-3xl '>
                                My Expertise
                            </h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <h1 
                                className='font-semibold text-2xl tracking-wide pb-3 text-center'
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                Frontend
                            </h1>
                            <div className='flex gap-3 flex-wrap justify-center px-5 sm:px-28 md:px-28'
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                {frontend.map((tools, index) => (
                                    <Button key={index} label={tools} />
                                ))}

                            </div>
                        </div>
                        <div>
                            <h1 
                                className='font-semibold text-2xl tracking-wide pb-3 text-center'
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                Backend
                            </h1>
                            <div 
                                className='flex gap-3 flex-wrap justify-center px-5 sm:px-28 md:px-28'
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                {backend.map((tools, index) => (
                                    <Button key={index} label={tools} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
