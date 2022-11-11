export const PROFILE_URL =
  'https://imageio.forbes.com/specials-images/imageserve/5b8576db31358e0429c734e3/0x0.jpg';
export const REWARDS_GIVEN = 100;
export const REWARDS_TAKEN = 120;

/**
 * instead of hard-coding, i keep the current user profile somewhere to access it
 * @type {{}}
 */
export const me = {
  name: 'Jane Doe',
  rewardInfo: {
    taken: 120,
    given: 100,
  },
  url: 'https://i.pravatar.cc/150?img=9',
  id: 3,
};
