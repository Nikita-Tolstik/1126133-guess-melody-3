import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: this.props.isPlaying,
    };
  }

  componentDidMount() {
    const {src} = this.props;

    const audio = this._audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    audio.onplay = () =>{
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    audio.ontimeupdate = () => {
      this.setState({
        progress: audio.currentTime,
      });
    };
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.state.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    let audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
    audio = null;
  }

  render() {
    const {onPlayButtonClick} = this.props;
    const {isLoading, isPlaying} = this.state;

    return (

      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => {
            this.setState({
              isPlaying: !this.state.isPlaying,
            });
            onPlayButtonClick();
          }}
        />

        <div className="track__status">
          <audio ref={this._audioRef}/>
        </div>
      </React.Fragment>
    );
  }
}


AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
