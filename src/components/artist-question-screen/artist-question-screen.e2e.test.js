import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen.jsx';

configure({
  adapter: new Adapter(),
});


const mock = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: ``,
    },
    answers: [
      {
        picture: `pic-one`,
        artist: `one`,
      },
      {
        picture: `pic-two`,
        artist: `two`,
      },
      {
        picture: `pic-three`,
        artist: `three`,
      }
    ],
  }
};

const mockEvent = {
  preventDefault() {}
};

it(`User chose answer, check correct data - e2e`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const answer = {
    picture: `pic-three`,
    artist: `three`,
  };

  const artistQuestion = shallow(
      <ArtistQuestionScreen
        question={question}
        onAnswer={onAnswer}
        renderPlayer={() => {}}
      />
  );

  const inputThree = artistQuestion.find(`input`).at(2);
  inputThree.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(answer);
});
