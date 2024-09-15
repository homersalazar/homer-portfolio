const Projects = () => {
    return (
        <>
            <div className='flex justify-center mt-28'>
                <div className="h-screen w-full card bg-base-200">
                    <div className="md:m-10 m-5">
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
                </div>
            </div>
        </>
    )
}

export default Projects
