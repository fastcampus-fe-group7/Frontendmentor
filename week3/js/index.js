
/**
 * 데이터 별 유효성검사 로직 상수화
 */
const regex = {
  email:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  bday: /^\d{4}-\d{2}-\d{2}$/,
  phone: /^01[016789]-\d{3,4}-\d{4}$/
}

/**
 * targetObjId[key]로 호출하는데
 * key가 email일때 targetObjId['email']로 호출하면 'div_userEmail'값이 반환됩니다.
 */
const targetObjId = {
  email: 'div_userEmail',
  loc: 'div_userLoc',
  name: 'div_userName',
  bday: 'div_userBday',
  phone: 'div_userPhone'
}

/**
 * 프로필카드 생성 버튼 클릭시 사용되는 함수
 * @returns 42번째 줄 return은 이후 로직이 실행되지 않게 방지턱이라고 생각하시면 됩니다.
 */
const createProfile = async () => {
  const jsonData = getFormData(); // input에서 작성한 데이터 getElementById로 찾아서 json객체로 반환합니다.
  const isValid = validData(jsonData);  // 유효성검사를 체크하는 함수를 실행합니다.

  // 버튼 광클을 방지하기 위한 비활성화 함수 호출
  // 매개변수는 sec와 btn을 가진 객체입니다. {sec, btn}
  // 유효성검사 결과(isValid)가 true이면 1000, false이면 2000으로 sec를 지정합니다.
  // btn은 id가 btn_submit인 html element를 찾아 지정해줍니다.
  disableBtn({sec: isValid ? 1000 : 2000, btn: document.getElementById('btn_submit')});
  
  // 유효성검사가 성공했으면
  if (isValid) {
    document.querySelector(".profile_container").classList.add("appear"); // 프로필카드 class에 appear를 추가해 화면에 보여줍니다.
    toastOn({msg: '프로필 카드 생성 성공!'}); // 토스트메세지 생성함수 호출.
    setFormData(jsonData);  // 프로필카드에 입력받은 데이터를 세팅해주는 함수 호출
    return; // 여기서 createProfile 함수를 끝냅니다.
  }

  // 유효성검사가 실패했으면 토스트메세지를 생성합니다.
  toastOn({sec: 2000, msg: '프로필 카드 생성 실패...'});  // sec는 2000, msg를 지정해줍니다.
};

/**
 * input에서 입력한 데이터를 result객체에 저장합니다.
 * @returns result객체를 반환합니다.
 */
const getFormData = () => {
  const result = {
    email: document.getElementById("userEmail").value,
    loc: document.getElementById("userLoc").value,
    name: document.getElementById("userName").value,
    bday: document.getElementById("userBday").value,
    phone: document.getElementById("userPhone").value,
  };
  return result;
};

/**
 * 유효성검사를 하는 함수입니다.
 * @param jsonData getFormData에서 가져온 json객체
 * @returns totalResult: 각 항목을 순회하며 유효성검사가 1개라도 실패하면 false로 return하기 위해 생성한 변수
 */
const validData = (jsonData) => {
  let totalResult = true;   
  for (const key in jsonData) { // jsonData의 key값을 순회하는 반복문. key값은 getFormData기준 [email, loc, name, bday, phone]배열값을 1개씩 순회합니다
    if (jsonData.hasOwnProperty(key)) { // jsonData에 해당하는 key값이 있는지 체크하는 함수입니다.
      const value = jsonData[key];  // jsonData[key]에 해당하는 값을 value로 지정합니다. getFormData기준 result.email, result.name등과 같습니다. key에 따라 달라집니다.
      const isEmpty = isEmptyData(value); // value값이 빈값인지 체크하는 함수를 호출하고, true, false로 반환합니다.
      const regexResult = isRegex(key, value);  // 유효성검사하는 함수를 호출합니다. 자세한 내용은 함수 선언부에서 확인하세요.
      document.getElementById(targetObjId[key]).classList.remove('inValid');  // 전에 실패해서 남아있을 수 있는 inValid 클래스를 지워줍니다.

      totalResult = totalResult && (isEmpty && regexResult);  // 이번 key값 항목이 유효성검사를 실패했는지 확인합니다.
      if(!(isEmpty && regexResult)) { // 현재 유효성검사를 실패했다면 인데, !를 붙인 이유는 유효성검사를 실패하면 false를 반환하므로 !false = true이므로 if문에서 작동하게 해준겁니다.
        document.getElementById(targetObjId[key]).classList.add('inValid'); // inValid 클래스를 추가합니다.
      }
    }
  }
  
  return totalResult;
};

/**
 * 값이 빈값인지 체크하는 함수
 * @param value : 검사하고자 하는 값
 * @returns 비어있으면 false, 뭔가 있으면 true입니다. 이건 본인 직관성에 맞게 설정하셔도 됩니다.
 */
const isEmptyData = (value) => {
  if (value === "" || value === undefined) {
    return false;
  }
  return true;
}

/**
 * 유효성검사를 실행하는 함수
 * @param {*} key   이번에 검사해야하는 jsonData의 항목(email, name, ...)
 * @param {*} value 검사해야할 입력받은 값
 * @returns 유효성검사 성공시 true, 실패시 false입니다. (예시. 이메일 값에 @가 들어있으면 true)
 */
const isRegex = (key, value) => {
  if(regex.hasOwnProperty(key)) {
    return regex[key].test(value);
  }
  return true;
}

/**
 * 버튼 비활성화 하는 함수
 * @param sec: 기본값은 1000으로합니다.
 *        btn: 비활성화 해야하는 버튼 element입니다.
 */
const disableBtn = ({sec = 1000, btn}) => {
  btn.disabled = true;    // 일단 비활성화 하고
  setTimeout(() => {    
    btn.disabled = false; // sec이후에 다시 활성화 시킵니다.
  }, sec)
}

/**
 * 토스트 메세지를 띄워주는 함수입니다.
 * @param sec: 기본값 1000입니다.
 *        msg: 토스트 메세지에 띄워줄 메세지를 받습니다.
 */
const toastOn = ({sec = 1000, msg = '토스트 메세지입니다.'}) => {
  const toastMsg = document.getElementById("tost_message");
  toastMsg.textContent = msg;
  toastMsg.classList.add('active');
  setTimeout(() => {
    toastMsg.classList.remove('active');
  }, sec);
}

/**
 * 프로필카드에 해당하는 태그에 jsonData를 넣어주는 함수입니다.
 */
const setFormData = (jsonData) => {
  document.getElementById("name").innerText = jsonData.name;
  document.getElementById("email").innerText = jsonData.email;
  document.getElementById("loc").innerText = jsonData.loc;
  document.getElementById("bday").innerText = jsonData.bday;
  document.getElementById("phone").innerText = jsonData.phone;
};
