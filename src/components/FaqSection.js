import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedules">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Product Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter; // nothing is not happening with this code
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
