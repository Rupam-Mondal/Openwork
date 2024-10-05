import React, { useEffect } from 'react';
import GeetabenRavai from '../../../assets/Artist/Artist1.png';
import PurvaMantri from '../../../assets/Artist/Artist2.png';
import krinjaldave from '../../../assets/Artist/Artist3.png';
import { useParams } from 'react-router-dom';

const timelineData = [
    {
        title: 'Title of section 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Jan 14',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg',
    },
    {
        title: 'Title of section 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Jan 18',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg',
    },
    {
        title: 'Title of section 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Jan 24',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg',
    },
    {
        title: 'Title of section 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Feb 14',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg',
    },
    {
        title: 'Final Section',
        description: 'This is the content of the last section.',
        date: 'Feb 26',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg',
    },
];

const Timeline = () => {
    let { artist } = useParams();
    const artistImages = {
        krinjaldave: krinjaldave,
        geetabenravai: GeetabenRavai,
        purvamantri: PurvaMantri,
    };

    const artistImage = artistImages[artist.toLowerCase()] || '';

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to top when component mounts
    }, []);

    return (
        <>
            <div className="bg-[#3D2C2C]">
                <div className="relative flex p-4 justify-center md:justify-end mb-8">
                    <img
                        src={artistImage}
                        alt={artist}
                        className="w-full h-[290px] object-contain md:w-4/5 lg:w-[40%] lg:h-[500px] md:h-[400px]"
                    />
                </div>

                <div className="container mx-auto p-4 md:p-8 relative">
                    <section className="relative">
                        <div className="absolute top-0 h-full w-1 bg-[#eeaa6b] left-4 md:left-1/2 transform md:-translate-x-1/2"></div>

                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-block flex flex-col md:flex-row items-center mb-12 transition-all duration-700 ease-in-out ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                    }`}
                            >
                                <div className="w-full md:w-5/12 p-6 bg-[#eeaa6b] rounded-lg shadow-md">
                                    <h2 className="text-2xl font-semibold mb-2 text-[#3d2c2c]">{item.title}</h2>
                                    <p className="text-[#534848] mb-4">{item.description}</p>
                                    <a href="#0" className="text-[#6d582f] font-medium hover:underline">
                                        Read more
                                    </a>
                                    <span className="block text-sm text-[#241f1f] mt-2">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
};

export default Timeline;
