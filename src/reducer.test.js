import {reducer, ActionType, ActionCreator} from './reducer.js';

const questions = [
  {
    type: `genre`,
    genre: `l`,
    answers: [
      {
        src: `https://audio.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/86/aa/20/86aa201c-fe6c-1fc5-f296-0d7872cf8458/mzaf_8723992036832723658.plus.aac.p.m4a`,
        genre: `rock`,
      },
      {
        src: `https://audio.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/86/aa/20/86aa201c-fe6c-1fc5-f296-0d7872cf8458/mzaf_8723992036832723658.plus.aac.p.m4a`,
        genre: `blues`,
      },
      {
        src: `https://audio.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/86/aa/20/86aa201c-fe6c-1fc5-f296-0d7872cf8458/mzaf_8723992036832723658.plus.aac.p.m4a`,
        genre: `jazz`,
      },
      {
        src: `https://audio.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/86/aa/20/86aa201c-fe6c-1fc5-f296-0d7872cf8458/mzaf_8723992036832723658.plus.aac.p.m4a`,
        genre: `rock`,
      }
    ],
  },

  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://dl2.mp3party.net/online/9162354.mp3`,
    },
    answers: [
      {
        picture: `https://api.adorable.io/avatars/128/A`,
        artist: `John Snow`,
      },
      {
        picture: `https://api.adorable.io/avatars/128/AB`,
        artist: `Jack Daniels`,
      },
      {
        picture: `https://api.adorable.io/avatars/128/AC`,
        artist: `Jim Beam`,
      }
    ],
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  });
});


it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    questions,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions,
  });
});


it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `correct`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `incorrect`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(ActionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``,
        }, {
          genre: `jazz`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [false, true, false, false])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(ActionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [true, true, true, true])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
