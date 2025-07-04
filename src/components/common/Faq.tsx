import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};
type Props = {
  faq: FaqItem[];
};
const Faq = ({ faq }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="frequently-asked-questions">
      <h2 className="main-common-title">Frequently Asked Questions</h2>
      <div className="frequently-asked-questions-main">
        <div className="accordion" id="accordionExample">
          {faq.map((data, index) => (
            <div key={index} className="accordion-item">
              <h4 className="accordion-header" id={`heading-${index}`}>
                <button
                  className={`accordion-button ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`collapse-${index}`}
                >
                  {data.question}
                  <span className="ms-auto">
                    <span className="icon ms-4">
                      <img
                        className={`icon-plus ${
                          activeIndex === index ? "d-none" : ""
                        }`}
                        src="/images/icons/plus.svg"
                        alt="plus"
                      />
                      <img
                        className={`icon-minus ${
                          activeIndex === index ? "" : "d-none"
                        }`}
                        src="/images/icons/minus.svg"
                        alt="minus"
                      />
                    </span>
                  </span>
                </button>
              </h4>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{data.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
