const getAge = (dateString: string) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const birth = getAge('27 Feb 1998 00:00:00 GMT') + '세';

export const aboutMe = {
  bio: [
    { name: 'NAME', detail: '김주하' },
    { name: 'BIRTH', detail: '1998 / 02 / 27 ( ' + birth + ' )' },
    { name: 'MAIL', detail: 'juha0227@gmail.com' },
  ],

  skills: {
    front: [
      { name: 'Stylesheet', detail: '3' },
      { name: '3D', detail: '3' },
      { name: 'Pixel', detail: '3' },
    ],
    back: [
      { name: 'JAVA', detail: '3' },
      { name: 'Javascript', detail: '3' },
      { name: 'SQL', detail: '3' },
    ],
  },
};
