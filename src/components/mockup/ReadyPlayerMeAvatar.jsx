import React, { useEffect, useRef } from 'react';

const ReadyPlayerMeAvatar = () => {
    const modelViewerRef = useRef(null);
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
        <div className="avatar-container w-[900px] h-[500px]">
            <model-viewer
                ref={modelViewerRef}
                src={avatarUrl}
                alt="My Avatar"
                // auto-rotate
                // camera-control
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