import React, {PureComponent} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player.jsx';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}

        renderPlayer={(src, id) => {
          return (
            <AudioPlayer


              onPlayButtonClick={() => {
                this.setState({
                  activePlayerId: activePlayerId === id ? -1 : id,
                });
              }}
              isPlaying={id === activePlayerId}
              src={src}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
