import ResponsiveMockupCode from "../components/mockup/ResponsiveMockUpCode"

const About = () => {
    return (
        <>
            <div className="md:m-10 m-5 my-36">
                <div className="flex justify-center items-end flex-col lg:flex-row gap-3 h-screen">
                    <p className="w-[800px]">Image Here</p>
                    <ResponsiveMockupCode />
                </div>
            </div>
        </>
    )
}

export default About
