import { TokyoContext } from "@/src/Context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";
const DetailsModal = () => {
  const { portfolioDetailsModal, setPortfolioDetailsModal } =
    useContext(TokyoContext);
    console.log(portfolioDetailsModal);
  return (
    <ModalContainer nullValue={setPortfolioDetailsModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url={portfolioDetailsModal.thumbnail}
            style={{
              backgroundImage: `url(${portfolioDetailsModal.thumbnail})`,
            }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{portfolioDetailsModal.title}</h3>
          <span>{portfolioDetailsModal.category}</span>
          <div />
        </div>
        <div className="main_details w-full h-auto clear-both flex mb-[90px]">
          <div className="textbox w-[70%] pr-[40px]">
            {portfolioDetailsModal.text.map((text, i) => (
              <p
                className={
                  portfolioDetailsModal.text.length - 1 == i ? "" : "mb-[20px]"
                }
                key={i}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="detailbox w-[30%] pl-[40px]">
            <ul className="list-none">
              {(portfolioDetailsModal.website) && <li className="mb-[8px] w-full float-left">
                <span className="first font-bold block text-black mb-[3px]">
                  Website
                </span>
                <a target="_blank" href={portfolioDetailsModal.website} rel="noopener noreferrer" >{portfolioDetailsModal.website}</a>
              </li>
              }
              {
              (portfolioDetailsModal.youtube) &&<li className="mb-[8px] w-full float-left">
                <span className="first font-bold block text-black mb-[3px]">
                  Youtube
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="#"
                  >
                    {portfolioDetailsModal.youtube}
                  </a>
                </span>
              </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
export default DetailsModal;
