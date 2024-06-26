const createProfile = async () => {
  const jsonData = getFormData();
  const isEmpty = validData(jsonData);

  disableBtn({sec: isEmpty ? 1000 : 2000, btn: document.getElementById('btn_submit')});
  
  if (isEmpty) {
    document.querySelector(".profile_container").classList.add("appear");
    toastOn({msg: '프로필 카드 생성 성공!'});
    setFormData(jsonData);
    return;
  }

  toastOn({sec: 2000, msg: '프로필 카드 생성 실패...'});
};

const toastOn = ({sec = 1000, msg = '토스트 메세지입니다.'}) => {
  const toastMsg = document.getElementById("tost_message");
  toastMsg.textContent = msg;
  toastMsg.classList.add('active');
  setTimeout(() => {
    toastMsg.classList.remove('active');
  }, sec);
}

const disableBtn = ({sec = 1000, btn}) => {
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, sec)
}

const getFormData = () => {
  const formElement = document.querySelector(".form_content");
  let result = {
    email: document.getElementById("userEmail").value,
    loc: document.getElementById("userLoc").value,
    name: document.getElementById("userName").value,
    bday: document.getElementById("userBday").value,
    phone: document.getElementById("userPhone").value,
  };
  return result;
};

const validData = (jsonData) => {
  let totalResult = true;
  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      const value = jsonData[key];
      const isEmpty = isEmptyData(value);
      const regexResult = isRegex(key, value);
      document.getElementById(targetObjId[key]).classList.remove('inValid');

      totalResult = totalResult && (isEmpty && regexResult);
      if(!(isEmpty && regexResult)) {
        document.getElementById(targetObjId[key]).classList.add('inValid');
      }
    }
  }
  
  return totalResult;
};

const isEmptyData = (value) => {
  if (value === "" || value === undefined) {
    return false;
  }
  return true;
}

const regex = {
  email:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  bday: /^\d{4}-\d{2}-\d{2}$/,
  phone: /^01[016789]-\d{3,4}-\d{4}$/
}

const targetObjId = {
  email: 'div_userEmail',
  loc: 'div_userLoc',
  name: 'div_userName',
  bday: 'div_userBday',
  phone: 'div_userPhone'
}


const isRegex = (key, value) => {
  if(regex.hasOwnProperty(key)) {
    return regex[key].test(value);
  }
  return true;
}

const setFormData = (jsonData) => {
  document.getElementById("name").innerText = jsonData.name;
  document.getElementById("email").innerText = jsonData.email;
  document.getElementById("loc").innerText = jsonData.loc;
  document.getElementById("bday").innerText = jsonData.bday;
  document.getElementById("phone").innerText = jsonData.phone;
};
