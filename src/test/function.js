export function getNumber(number) {
  let definedNumber = 10;
  let added = definedNumber + number;
  if (added > 10) {
    return true;
  } else {
    return false;
  }
}

getNumber(11);
