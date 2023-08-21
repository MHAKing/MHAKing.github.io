import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "knifehit.png",
    title: "Knife Hit",
    text: [
      "gage. is an employee and group engagement tool designed to deliver insights while creating a shared experience. Gage transforms team gatherings into an interactive shared experience. Features includes:      ",
      `> Avatar setup`,
      `> Group or Individual interventions`,
      `> Voting or Surveys`,
      `> Analytical reports & lot more`,
    ],
    website:"https://knifehit-game.web.app/",
  },
];
const Labs = () => {
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
  const { setLabsDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
      <SectionContainer name={"labs"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Labs"}
                // title={"Creative Labs"}
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
                    setLabsDetailsModal(data);
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
export default Labs;
