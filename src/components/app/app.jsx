import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const welcomeButtonHandler = () => {};

const App = ({errorsCount}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorsCount={errorsCount}
            onWelcomeButtonClick={welcomeButtonHandler}
          />
        </Route>
        <Route exact path="/artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

App.propTypes = {

  errorsCount: PropTypes.number.isRequired,
};

export default App;
