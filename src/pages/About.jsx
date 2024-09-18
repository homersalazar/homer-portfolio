import ResponsiveMockupCode from "../components/mockup/ResponsiveMockUpCode";
import AvatarCanvas from '../components/AvatarCanvas'

const About = () => {
    return (
        <>
            <div className="m-10 my-36">
                <div className="flex justify-center gap-10 items-center w-full">
                    <AvatarCanvas />
                    <ResponsiveMockupCode />
                </div>
            </div>
        </>
    );
};

export default About;
