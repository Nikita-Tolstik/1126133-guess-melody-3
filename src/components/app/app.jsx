import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";


const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {

    const {errorsCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }


    if (question) {

      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >

              <ArtistQuestionScreenWrapped

                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );

        case GameType.GENRE:
          return (

            <GameScreen
              type={question.type}
            >

              <GenreQuestionScreenWrapped

                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }


  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>

          <Route exact path={`/${GameType.ARTIST}`}>
            <GameScreen
              type={GameType.ARTIST}
            >
              <ArtistQuestionScreenWrapped

                question={questions[1]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>

          <Route exact path={`/${GameType.GENRE}`}>
            <GameScreen
              type={GameType.GENRE}
            >
              <GenreQuestionScreenWrapped

                question={questions[0]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }

}


App.propTypes = {

  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
