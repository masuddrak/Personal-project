import React from 'react';

const SkillCard = ({title}) => {
    console.log(title)
    return (
        <div className="w-full flex justify-center items-center py-2 bg-[#0C372A] border rounded-lg border-[#0cc880a0]">
            <p className="text-[#CFCFCF] font-semibold text-lg">
                {title}
            </p>
        </div>
    );
};

export default SkillCard;