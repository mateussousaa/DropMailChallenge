interface UserInfo {
  email: string,
  id: string,
}

const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? '{}');
  return userInfo;
};

const updateUserInfo = (userInfo: UserInfo) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export { getUserInfo, updateUserInfo };
