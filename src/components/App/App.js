import { useState } from "react";
import Section from '../Section/Section'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

import {Container} from './App.styled';


const OPTIONS = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (feedBack) => {
    switch (feedBack) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  }
 
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  const countPositiveFeedbackPercentage = () => {
    return total? Math.round((good / total) * 100) : 0;
  }

  let total = countTotalFeedback();
  let positiveFeedback = countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title = 'Please leave feedback'>
          <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title = 'Statistics'>
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback} />
        )}
        </Section>
        {!total && <Notification message = "There is no feedback"/>}
      </Container>
  );
}

