import React from "react";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[#0c382a]  text-white rounded-lg p-5 border border-[#0D3026] relative mt-5">
      <div className="z-10">
        <h1 className="text-[20px] text-[#0CC880] font-semibold mb-5">
          Programming Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SkillCard title="HTML"></SkillCard>
          <SkillCard title="CSS"></SkillCard>
          <SkillCard title="JavaScript"></SkillCard>
          <SkillCard title="React.js"></SkillCard>
          <SkillCard title="Next.js"></SkillCard>
          <SkillCard title="Tailwind CSS"></SkillCard>
          <SkillCard title="Daisy UI"></SkillCard>
          <SkillCard title="Bootstrap"></SkillCard>
          <SkillCard title="Wordpress"></SkillCard>
          <SkillCard title="Express.js"></SkillCard>
          <SkillCard title="Node.js"></SkillCard>
          <SkillCard title="MongoDB"></SkillCard>
          <SkillCard title="GitHub"></SkillCard>
          <SkillCard title="Firebase"></SkillCard>
        </div>
      </div>
    </div>
  );
}
