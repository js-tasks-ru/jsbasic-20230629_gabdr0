function truncate(str, maxlength) {
  if (str.length > maxlength) {
    maxlength = maxlength - 1;
    return str.slice(0, maxlength) + "…";
  } else {
    return str;
  }
}
