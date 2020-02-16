import React from 'react';
import renderer from 'react-test-renderer';
import GenrequestionScreen from './genre-question-screen.jsx';
import {GameType} from '../../const.js';

const question = {
  type: GameType.GENRE,
  genre: `rock`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }
  ]
};

it(`Render <GenrequestionScreen />`, () => {

  const tree = renderer.create((
    <GenrequestionScreen

      question={question}
      onAnswer={() => {}}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }
  ).toJSON();

  expect(tree).toMatchSnapshot();

});
