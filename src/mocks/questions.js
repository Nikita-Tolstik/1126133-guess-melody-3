const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
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
        picture: `${AVATAR_URL}/A}`,
        artist: `John Snow`,
      },
      {
        picture: `${AVATAR_URL}/AB`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/AC`,
        artist: `Jim Beam`,
      }
    ],
  }
];
