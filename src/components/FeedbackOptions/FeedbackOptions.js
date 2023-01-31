import PropTypes from "prop-types";
import { FeedbackBtn, Wrapper } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const [good, neutral, bad] = options;
  return (
    <Wrapper>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback(good)}>
        Good
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback(neutral)}>
        Neutral
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback(bad)}>
        Bad
      </FeedbackBtn>
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
