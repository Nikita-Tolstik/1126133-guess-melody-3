const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://dl2.mp3party.net/online/9162354.mp3`,
        genre: `rock`,
      },
      {
        src: `https://dl2.mp3party.net/online/9162354.mp3`,
        genre: `blues`,
      },
      {
        src: `https://dl2.mp3party.net/online/9162354.mp3`,
        genre: `jazz`,
      },
      {
        src: `https://dl2.mp3party.net/online/9162354.mp3`,
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
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      }
    ],
  }
];
