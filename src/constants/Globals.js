export const urls = {
  LOGO_URL:
    'https://res.cloudinary.com/seconde/image/upload/v1609942436/temp/Markar_Logo_500x500_Without_slogan_Text_HOLLOW_Transparent_k0n5kl.png',
};

export const sellerUrls = {
  signup: '',
  login: '',
  verify_phone: '',
  profile: '',
};

const updatedObjects = Object.keys(
  (object) => (sellerUrls[object] = '/seller'),
);
console.log(updatedObjects);

export const api = {
  signup: 'customer/auth/signup',
  login: 'customer/auth/login',
  verifyPhone: '/customer/verify_phone',
  getProfileData: '/customer/get_data',
  changeProfileData: '/customer/change_data',
  deleteProfile: '/customer/delete_profile',
  createOrder: '/common/createOrder',
};

export const publicUrls = {
  getById: '/common/get_profile_by_id',
  getProfiles: '/common/get_profiles',
};

export default api;
