import React, { useState } from 'react';
import AvatarCanvas from '../models/human/AvatarCanvas';
import Link from '../components/button/Link';

const Contact = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <div className="m-10 my-36">
            <div className="flex flex-col justify-end items-center gap-5 w-full">
                <h1 className='text-3xl'>Just say hi.</h1>
                <p className='text-2xl text-center font-light leading-snug'>
                    I'm always open to discuss your project and talk about new things.
                </p>
                {/* <Link
                    onMouseEnter={() => setAnimationName('calling')}
                    onMouseLeave={() => setAnimationName('idle')}
                    label={
                        <div className='flex flex-row gap-3 group'>
                            Say Hi!
                            <svg
                                className='fill-[#a6adbb] group-hover:fill-[#000000]'
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                width="24"
                                viewBox="0 0 512 512"
                            >
                                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                            </svg>
                        </div>
                    }
                /> */}
                <button c
                    className="relative px-5 py-2.5 rounded-xl hover:bg-[var(--cyan)] hover:text-black hover:font-medium cursor-pointer hover:scale-110 transition-transform duration-200"
                    style={{
                        boxShadow: "inset 0 0 0 1px var(--cyan), 0 0 0 1.5px #e6f6f6", 
                    }}
                    onMouseEnter={() => setAnimationName('calling')}
                    onMouseLeave={() => setAnimationName('idle')}
                >
                    <div className='flex flex-row gap-3 group'>
                        Say Hi!
                        <svg
                            className='fill-[#a6adbb] group-hover:fill-[#000000]'
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 512 512"
                        >
                            <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                        </svg>
                    </div>
                </button>
                <AvatarCanvas animationName={animationName} />
            </div>
        </div>
    );
};

export default Contact;
