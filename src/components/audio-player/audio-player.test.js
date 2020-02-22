import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const mock = {
  song: {
    src: `https://s81myt.storage.yandex.net/get-mp3/0caf2861dd5fad90e8ea89c85e5d53a9/00059f072a5a8d74/rmusic/U2FsdGVkX195V1mazro5tgfrSGJtSRveLAmZ870UHkedwdkBnwesKPRFIYXlQcxsgugZTbxPAuh5-7FhrFMCGFxtQ54yHswZnRzek4CUQ-o/82942fdbbea8490f9d048f98f45638206081dcf13c90e3b60fc2c697ae594841?track-id=3656365&play=false`
  }
};

it(`AudioPlayer is rendered correctly`, () => {
  const {song} = mock;

  const tree = renderer.create(
      <AudioPlayer

        isPlaying={false}
        src={song.src}
        onPlayButtonClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
