import ReadyPlayerMeAvatar from "../components/mockup/ReadyPlayerMeAvatar";
import ResponsiveMockupCode from "../components/mockup/ResponsiveMockUpCode";

const About = () => {
    return (
        <>
            <div className="m-10 my-36">
                <div className="flex justify-center gap-10 items-center w-full">
                    <ReadyPlayerMeAvatar/>
                    <ResponsiveMockupCode />
                </div>
            </div>
        </>
    );
};

export default About;