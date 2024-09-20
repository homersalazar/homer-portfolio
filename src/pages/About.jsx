import ReadyPlayerMeAvatar from "../components/mockup/ReadyPlayerMeAvatar";
import ResponsiveMockupCode from "../components/mockup/ResponsiveMockUpCode";

const About = () => {
    return (
        <>
            <div className="flex justify-center h-screen w-full">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center gap-3 items-center w-full">
                    <ReadyPlayerMeAvatar/>
                    <ResponsiveMockupCode />
                </div>
            </div>
        </>
    );
};

export default About;