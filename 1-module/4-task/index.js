function checkSpam(str) {
  // превращаем строку в нижний регистр
  // проверяем на соответсвие '1xBet' или 'XXX'
  if ( str.toLowerCase().indexOf("1xbet") > -1 ) {
    return true;
  } else if ( str.toLowerCase().indexOf("xxx") > -1 ) {
    return true;
  } else {
    return false;
  }
}
