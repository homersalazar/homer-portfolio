import ArrowRight from "../components/icon/ArrowRight"
import GraduationHat from "../components/icon/GraduationHat"
import SuitCase from "../components/icon/SuitCase"

const Personal = () => {
    const education = [
        {
            school: 'Datamex College of Saint Adeline',
            level: 'Bachelor of Science in Information Technology',
            year: '2015 - 2019'
        },
        {
            school: 'Gen T. De Leon National High School',
            level: 'High School',
            year: '2011 - 2015'
        }
    ]

    const works = [
        {
            name: 'Homemark Inc.',
            position: 'Jr. Web Developer',
            year: '2023 - Current'
        },
        {
            name: 'Global Heavy Equipment and Construction Corp.',
            position: 'Document Controller/ IT Assistant',
            year: '2020 - 2023'
        },
        {
            name: 'Phoenix Publishing House, Inc.',
            position: 'Filling Clerk',
            year: '2019 - 2020'
        }
    ]
    return (
        <>
            <div className='flex justify-center mt-28'>
                <div className="h-screen w-full">
                    <div className="md:m-10 m-5 card bg-base-200">
                        <div className="flex flex-row md:m-10 m-5">
                            <div className='flex flex-row gap-3'>             
                                <ArrowRight />
                                <h1 className='font-bold text-3xl '>
                                    Education & Work Experience
                                </h1>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 grid-row-1 gap-10 md:m-10 m-5">
                            <div className="flex flex-col">
                                <div className='flex flex-row gap-3'>
                                    <hr />     
                                    <GraduationHat />
                                    <h1 className='font-bold text-2xl'>
                                        Education
                                    </h1>
                                </div>
                                <div className="divider"></div>

                                <div className="flex flex-col gap-8">
                                    {education.map((educ, index) => (
                                        <div key={index} className="flex flex-col md:flex-row md:justify-between md:gap-2 px-5">
                                            <div>
                                                <h1 className="text-lg md:text-xl font-semibold">{educ.school}</h1>
                                                <p>{educ.level}</p>
                                            </div>
                                            <p>{educ.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className='flex flex-row gap-3'>
                                    <hr />     
                                    <SuitCase />
                                    <h1 className='font-bold text-2xl'>
                                        Work Experience
                                    </h1>
                                </div>
                                <div className="divider"></div>
                                <div className="flex flex-col gap-8">
                                    {works.map((work, index) => (
                                        <div key={index} className="flex flex-col md:flex-row md:justify-between md:gap-2 px-5">
                                            <div>
                                                <h1 className="text-lg md:text-xl font-semibold">{work.name}</h1>
                                                <p>{work.position}</p>
                                            </div>
                                            <p>{work.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal