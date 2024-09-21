import { useEffect } from 'react';

const ReadyPlayerMeAvatar = () => {
    const avatarUrl = 'https://models.readyplayer.me/66e13abc091a54ee8b72762b.glb';

    useEffect(() => {
        const loadModelViewer = async () => {
        if (!customElements.get('model-viewer')) {
            await import('@google/model-viewer');
        }
        };

        loadModelViewer();
    }, []);

    return (
        <div 
            className="avatar-container w-full h-[500px] hidden md:block" 
            data-aos="fade-right"
            // data-aos-duration="3000"
        >
            <model-viewer
                src={avatarUrl}
                alt="My Avatar"
                shadow-intensity="1"
                exposure="1"
                interaction-prompt="auto"
                ar
                environment-image="neutral"
                style={{ width: '100%', height: '100%' }}
            ></model-viewer>
        </div>
    );
};

export default ReadyPlayerMeAvatar;