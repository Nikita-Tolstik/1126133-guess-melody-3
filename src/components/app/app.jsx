import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
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
            <ArtistQuestionScreen

              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>

          <Route exact path={`/${GameType.GENRE}`}>
            <GenreQuestionScreen

              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
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
            <ArtistQuestionScreen

              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );

        case GameType.GENRE:
          return (
            <GenreQuestionScreen

              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
      }
    }

    return null;
  }

}

App.propTypes = {

  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
