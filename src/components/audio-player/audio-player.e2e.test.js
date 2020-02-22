import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';


configure({
  adapter: new Adapter(),
});

const mock = {
  song: {
    src: `https://dl2.mp3party.net/online/9162354.mp3`,
  }
};

it(`Press button should toggle play or pause`, () => {

  const isPlaying = true;
  const {song} = mock;
  const onPlayButtonClick = jest.fn();

  const audioPlayer = shallow(
      <AudioPlayer

        src={song.src}
        isPlaying={isPlaying}
        onPlayButtonClick={onPlayButtonClick}
      />, {disableLifecycleMethods: true});

  const button = audioPlayer.find(`button`);

  button.simulate(`click`);

  expect(button.hasClass(`track__button--pause`)).toEqual(true);
});
