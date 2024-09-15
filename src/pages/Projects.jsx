const Projects = () => {
    return (
        <>
            <div className='flex justify-center mt-28'>
                <div className="h-screen w-full">
                    <div className="md:m-10 m-5 card bg-base-200">
                        <div className="flex flex-row justify-between m-10">
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
                            <div>
                                See all
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-10 m-10">
                            <div className="card bg-base-100 w-[22rem] shadow-xl">
                                <figure>
                                    <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-[22rem] shadow-xl">
                                <figure>
                                    <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-[22rem] shadow-xl">
                                <figure>
                                    <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
