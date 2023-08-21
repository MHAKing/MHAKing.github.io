import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ContactForm from "./contact/ContactForm";
import Map from "./contact/Map";
const Contact = () => {
  return (
    <SectionContainer name={"contact"}>
      <div className="container">
        <div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Contact"} title={"Get in Touch"} />
            </div>
            <div>linkedin: <a target="_blank" href='https://www.linkedin.com/in/muhammad-hassan-ali-24216a18b/' rel="noopener noreferrer">https://www.linkedin.com/in/muhammad-hassan-ali-24216a18b/</a></div>
            <div>email: <a onClick={(e) => {window.location.href ='mailto:mha.m.hassan.ali@outlook.com';}}>mha.m.hassan.ali@outlook.com</a></div>
          </div>
          {/* <Map /> */}
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
