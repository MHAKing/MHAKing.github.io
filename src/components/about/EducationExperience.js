const experiencesData = [
  {
    id: 1,
    date: "April 2023 - Now",
    designation: "Senior Game Developer",
    company: "Virtual Days",
  },
  {
    id: 2,
    date: "Oct 2022 - April 2023",
    designation: "Game Developer",
    company: "Virtual Days",
  },
  {
    id: 3,
    date: "Aug 2022 - Oct 2022",
    designation: "Software Developer",
    company: "GenITeam Solutions",
  },
  {
    id: 4,
    date: "Aug 2021 - Aug 2022",
    designation: "Junior Software Developer",
    company: "GenITeam Solutions",
  },
  {
    id: 5,
    date: "May 2021 - Aug 2021",
    designation: "Internship",
    company: "GenITeam Solutions",
  },
  {
    id: 6,
    date: "July 2019 - Aug 2019",
    designation: "Internship",
    company: "Fauji Fertilizer Company",
  }
];
const educationData = [
  {
    id: 1,
    date: "2016 - 2020",
    degree: "Bachelor of Science in Computer Science",
    institute: "National University of Computer and Emerging Sciences",
  },
  {
    id: 2,
    date: "2014 - 2016",
    degree: "ICS, Computer Science",
    institute: "Cadet College Choa Saiden Shah Chakwal",
  },
  {
    id: 3,
    date: "2012 - 2014",
    degree: "Matriculation , Maths",
    institute: "Sheikh Zayed Public School",
  },
];

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Education</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {educationData.map((edu, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == educationData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={edu.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {edu.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {edu.institute}
                        </h3>
                        <span className="text-[14px]">{edu.degree}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Experience</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {experiencesData.map((exp, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == experiencesData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={exp.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {exp.company}
                        </h3>
                        <span className="text-[14px]">{exp.designation}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
