

import React from 'react';
import Jobcard from './Jobcard';

function Jobsection() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 grid gap-6 mt-8 mb-6 md:mb-16">
      <Jobcard
        title="Frontend Developer"
        jobId="JD1023"
        jobType="Full-time"
        skills={['React', 'Tailwind', 'TypeScript']}
        experience="2+ Years"
        location="Chennai"
      />
      <Jobcard
        title="Backend Developer"
        jobId="JD1024"
        jobType="Part-time"
        skills={['Node.js', 'Express', 'MongoDB', "Python", "Nextjs", "Nest Js", "SQL", "NoSql"]}
        experience="3+ Years"
        location="Bangalore"
      />
      <Jobcard
        title="UI/UX Designer"
        jobId="JD1025"
        jobType="Contract"
        skills={['Figma', 'Adobe XD', 'Prototyping']}
        experience="1+ Year"
        location="Remote"
      />
      <Jobcard
        title="Full Stack Developer"
        jobId="JD1026"
        jobType="Full-time"
        skills={['React', 'Node.js', 'TypeScript', 'MongoDB']}
        experience="4+ Years"
        location="Hyderabad"
      />
    </div>
  );
}

export default Jobsection;
