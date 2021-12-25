import {USERS} from './users.js';

export const POSTS = [
  {
    id: 1,
    imageUrl: 'https://sun2.velcom-by-minsk.userapi.com/impf/RYRLySASQe03kw7diDeWY_KhpXEeB2KmPEzWOA/jPmmr_yXeQ0.jpg?size=2160x2160&quality=96&sign=5825bc98d6f576076d0d59aedc4a91c5&type=album',
    user: USERS[0].user,
    likes: 1123,
    caption: 'The Fire it is the most power in out world',
    profile_picture: USERS[0].image,
    comments: [
      {
        id: 1,
        user: 'jane',
        comment: 'Nice shot!',
      },
      {
        id: 2,
        user: 'joe',
        comment: 'I like it',
      },
      {
        id: 5,
        user: 'jane',
        comment: 'Nice shot!',
      },
      {
        id: 4,
        user: 'joe',
        comment: 'I like it',
      },
    ],
  },

  {
    id: 2,
    imageUrl: 'https://sun2.velcom-by-minsk.userapi.com/impf/RYRLySASQe03kw7diDeWY_KhpXEeB2KmPEzWOA/jPmmr_yXeQ0.jpg?size=2160x2160&quality=96&sign=5825bc98d6f576076d0d59aedc4a91c5&type=album',
    user: USERS[1].user,
    likes: 30,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    profile_picture: USERS[1].image,
    comments: [
      {
        id: 3,
        user: 'jane',
        comment: 'Nice shot!',
      },
    ],
  },

  {
    id: 3,
    imageUrl: 'https://sun2.velcom-by-minsk.userapi.com/impf/RYRLySASQe03kw7diDeWY_KhpXEeB2KmPEzWOA/jPmmr_yXeQ0.jpg?size=2160x2160&quality=96&sign=5825bc98d6f576076d0d59aedc4a91c5&type=album',
    user: USERS[2].user,
    likes: 5454533,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    profile_picture: USERS[2].image,
    comments: [],
  },
]