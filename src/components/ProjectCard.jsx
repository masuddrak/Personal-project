import React from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoArrowRedoSharp } from "react-icons/io5";


import Image from 'next/image'
const ProjectCard = ({ technology, image,gitLink ,liveLink,classesName,title}) => {
    return (
        <div className={classesName}>
            <div className="flex justify-center p-5">
                <Image
                    src={image}
                    alt="Picture of the author"
                    className="h-[200px] w-full z-10 object-contain top-0 rounded-lg"
                />
            </div>
            <div>
                <div className="flex-col justify-between items-stretch px-5 pb-5 ">
                    <div className="">
                        <h1 className="text-[20px] font-semibold">{title}</h1>
                    </div>
                    <div className='my-5'>
                        <p className='text-[#979797]'> <span className='font-bold '>Technology :</span>{technology}</p>
                    </div>
                    <div className="flex gap-5  items-center  bottom-2">
                        <a className="text-[20px]" href={gitLink} target="blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="text-[30px]" href={liveLink} target="blank">
                        <IoArrowRedoSharp/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;