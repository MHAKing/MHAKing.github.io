import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "gage.png",
    title: "Gage",
    text: [
      "gage. is an employee and group engagement tool designed to deliver insights while creating a shared experience. Gage transforms team gatherings into an interactive shared experience. Features includes:      ",
      `> Avatar setup`,
      `> Group or Individual interventions`,
      `> Voting or Surveys`,
      `> Analytical reports & lot more`,
    ],
    website:"https://www.activ8games.com/",
  },
  {
    id: 2,
    thumbnail: "empire.png",
    title: "Empire",
    text: [
      "Team building facilitated game for corporate. Strategic gameplay with mission to conquer Empire by clever use of cards in the game. For all levels of management.",
      `> Engance Team building`,
      `> Improve Problem solving`,
      `> Learn strategy & decision making`,
      `> Controlled by Facilitator`,
    ],
    website:"https://www.activ8games.com/",
    youtube:"https://www.youtube.com/watch?v=zRQ6jPVTCJQ"
  },
  {
    id: 3,
    thumbnail: "advance.png",
    title: "Advance",
    text: [
      "Systematic business learning Game with 3 levels of decision making & flow. Detailed Backend with Analytical reports for player progress as well as Leaderboard.",
      `> Manage per stage different competency`,
      `> 3 Levels of decision making in each stage`,
      `> 27 outcomes per stage`,
      `> Backend Leaderboard`,
      `> Analytical reports & lot more`,
    ],
    website:"https://www.activ8games.com/",
    youtube:"https://www.youtube.com/watch?v=lTOUvy1_0pY"
  },
  {
    id: 4,
    thumbnail: "progress.png",
    title: "Progress",
    text: [
      "Situational Based Learning to increase Employees efficiency & effectiveness with Leaderboard. Dynamic content with & detailed analytical reports for backend.",
      `> Fast paced learning & assessments`,
      `> Multi level engagement`,
      `> Evaluate 4 strengths in 1 go`,
      `> Backend Leaderboard`,
      `> Analytical reports & lot more`,
    ],
    website:"https://www.activ8games.com/",
    youtube:"https://www.youtube.com/watch?v=hsVZQBARV5o"
  },
  {
    id: 5,
    thumbnail: "classnews.png",
    title: "Class News",
    text: [
      `News-2-You is an imaginative and educational game designed specifically for children of small age to encourage their creativity and writing skills. This game provides a fun platform for young children to write articles based on current events and topics relevant to their world.`,
      `> Foster a love for reading, writing, and storytelling in young children`,
      `> Encourage creativity and imaginative thinking through writing articles`,
      `> Improve language and communication skills in a playful and supportive setting`,
      `> Familiarize children with basic journalistic concepts in a child-friendly manner`,
      `> Provide a safe and interactive platform for children to express themselves through writing`,
    ],
    website:"https://www.n2y.com/news2you/daily-routines/",
    youtube:"https://www.youtube.com/watch?v=99bfFVhyOxE&t=1260s"
  },
  {
    id: 6,
    thumbnail: "todaysweather.png",
    title: "Today's Weather",
    text: [
      `"Today's Weather Adventure" is an exciting and educational game specifically designed for young children to help them learn about different types of weather in a fun and interactive way. Through colorful visuals, playful animations, and simple gameplay, the game aims to introduce basic weather concepts to small children.`,
      `> Introduce basic weather concepts to young children`,
      `> Improve weather recognition skills in a playful manner`,
      `> Familiarize kids with appropriate clothing and activities for different weather conditions`,
      `> Encourage curiosity about the natural world and weather phenomena`,
      `> Enhance language and listening skills through weather descriptions`,
    ],
    website:"https://www.n2y.com/news2you/daily-routines/",
    youtube:"https://www.youtube.com/watch?v=99bfFVhyOxE&t=965s"
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                // title={"Creative Portfolio"}
              />
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
            {detailData.map((data)=>{
            return <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
            <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
              <div
                className="entry tokyo_tm_portfolio_animation_wrap"
                data-title={data.title}
                data-category="Detail"
              >
                <a
                  className="popup_info"
                  href="#"
                  onClick={() => {
                    setPortfolioDetailsModal(data);
                    modalToggle(true);
                  }}
                >
                  <img
                    className="opacity-0 min-w-full"
                    src={data.thumbnail}
                    alt="image"
                  />
                  <div
                    className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                    data-img-url={data.thumbnail}
                  />
                </a>
              </div>
            </div>
          </li>
          })}  
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
