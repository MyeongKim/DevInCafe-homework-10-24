// Code goes here
// =====Conditions=====
// if 조건문은 최소한으로 사용하세요.
// 정규표현식을 사용하세요.

// =====Problems=======
// 1. url 형식의 string인지 검사하는 함수를 만드세요.

// 결과값이 true임을 출력하는 함수.
function alertIsTrue(string){
  alert("맞습니다." + string);
  return false;
}

function alertIsFalse(err){
  alert("에러 발생 :" + err);
  return false;
}

function isUrlString(string){
  try{
    // "http://" 나 "https://" 로 시작하지 않으면 자동 변환
    if(string.match(/^http:\/\//) === null && string.match(/^https:\/\//g) === null ){
      string = "https://" + string;
    }
    // 끝이 .com,.io,.co 등의 형식인지 확인 
    if(string.match(/\.([a-z])+(|\/)$/) === null){
      throw ".com이나 .net과 같은 형식으로 끝나지 않습니다. 혹은 숫자가 들어갑니다."
    } else {
      alertIsTrue(string);
    }
  } catch(err){
    alertIsFalse(err);
    return false;
  }
}

// 2. email 형식인지 검사하는 함수를 만드세요.
function isEmailString(string){
  try{
    // @앞뒤로 문자열이 있는지 확인
    if(string.match(/\w@\w/g) === null){
      throw "@앞뒤로 문자열이 없습니다."
    }
    // 끝이 .com,.io,.co 등의 형식인지 확인 
    if(string.match(/\.([a-z])+(|\/)$/) === null){
      throw ".com이나 .net과 같은 형식으로 끝나지 않습니다. "
    } else {
      alertIsTrue(string);
      return string;
    }
  }catch(err){
    alertIsFalse(err);
    return false;
  }
}

// 3. 전화번호 입력값을 바르게 바꾸는 함수를 만드세요.
// (000-0000-0000 이나 000.0000.0000는 0000000000 로 변환)
function toPhoneNumber(string){
  // input value가 Number 형식이면 String으로 변환
  if(typeof string === Number){
    string = string.toString();
  }
  // 숫자를 제외한 문자열이나 space 제거
  string = string.replace(/([^0-9]+)/g, '')
  alert(string);
  return string;
}

// 4. 조건에 맞는 비밀번호 형식인지 검사하는 함수를 만드세요.
// (적어도 한개씩의 특수문자, 문자, 숫자를 포함하고, 같은 문자가 4개 이상 반복되지 않음)
function isCorrectPW(string){
  try{
    // 적어도 한개씩의 특수문자, 문자, 숫자를 포함하는지 검사
    if(string.match(/([`~!@#$%^&*|\\\'\";:\/?])/g) && string.match(/([A-z])/g) && string.match(/([0-9])/g)){
      // 같은 문자가 4개 이상 반복되는지 검사
      if(string.match(/(\w)\1{3,}/g)){
        throw "같은 문자가 4개 이상 반복됩니다."
      } else {
        alertIsTrue(string);
        return string;
      }
    } else {
      throw "적어도 한개씩의 특수문자, 문자, 숫자를 포함하지 않습니다."
    }
  }catch(err){
    alertIsFalse(err);
    return false;
  }
}

// 5. 조건에 맞는 아이디 형식인지 검사하는 함수를 만드세요.
// (공백, 한글, !@#$,.가 포함되지 않음)
function isCorrectId(string){
  try{
    // 공백, 한글, !@#$,.가 포함되는지 확인
    if(string.match(/\s/g)){
      throw "공백이 포함됩니다."
    } else if(string.match(/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g)) {
      throw "한글이 포함됩니다."
    } else if(string.match(/[!@#$\,\.]/g)) {
      throw "!@#$,.가 포함됩니다."
    } else {
      alertIsTrue(string);
      return string;
    }
  } catch(err){
    alertIsFalse(err);
    return false;
  }
}