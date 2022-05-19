import * as React from "react";
import Accordion from "../Accordion";
import { TranslationsContext } from "../../translations-context";
import { SectionTitle } from "../Texts";

const FaqBlock: React.FC = () => {
  const t = React.useContext(TranslationsContext);
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        id="faq"
      >
        <div className="block py-8">
          <SectionTitle title="q&a" />
        </div>
        <div className="w-full lg:w-5/6 mx-auto px-4 md:px-8 lg:px-0">
          <Accordion title={t.faq_question_1} text={t.faq_answer_1} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_2} text={t.faq_answer_2} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_3} text={t.faq_answer_3} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_4} text={t.faq_answer_4} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_5} text={t.faq_answer_5} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_6} text={t.faq_answer_6} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_7} text={t.faq_answer_7} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_8} text={t.faq_answer_8} />
          <div
            className="w-full bg-blue-shipcove"
            style={{ height: "1px" }}
          ></div>
          <Accordion title={t.faq_question_9} text={t.faq_answer_9} />
        </div>
      </section>
    </>
  );
};

export default FaqBlock;
