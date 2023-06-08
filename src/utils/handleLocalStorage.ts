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

const getMailsLength = () => {
  const userInfo = JSON.parse(localStorage.getItem('mailsLength') ?? '0');
  return userInfo;
};

const setMailsLength = (length: number) => {
  localStorage.setItem('mailsLength', JSON.stringify(length));
};

export {
  getUserInfo, updateUserInfo, getMailsLength, setMailsLength,
};
