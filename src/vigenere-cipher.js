const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(str, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (str === undefined || key === undefined) {
      throw new Error("Parameters are undefined");
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let m = str.toUpperCase();
    let k = key.toUpperCase();
    var r = ""; //Пустой результат
    let j = 0;
    let i = 0;

    var maxlength = Math.max(m.length, k.length); //решаем по чему мы будем двигаться: ключу или сообщению
    while (i < maxlength) {
      if (i >= m.length) {
        // если сообщение меньше ключа, то выходим из цикла как только найдем сообщение
        break;
      } else {
        var mi = a.indexOf(m[i]);
      }
      if (mi === -1) {
        // если символа нет в алфавите, то добавляем его неизменным
        r += m[i];
        i++;
        continue;
      }
      var ki_s = k[j >= k.length ? j % k.length : j]; // подставляем длину ключа под слово
      var ki = a.indexOf(ki_s);
      var c = a[(a.length + (mi + ki)) % a.length]; //шифруем
      r += c;
      i++;
      j++;
    }
    if (!this.isDirect) {
      return r.split("").reverse().join("");
    }

    return r; //вернуть строку результата
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Parameters are undefined");
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let m = str.toUpperCase();
    let k = key.toUpperCase();
    var r = ""; //Пустой результат
    let j = 0;
    let i = 0;

    var maxlength = Math.max(m.length, k.length); //решаем по чему мы будем двигаться: ключу или сообщению
    while (i < maxlength) {
      if (i >= m.length) {
        // если сообщение меньше ключа, то выходим из цикла как только найдем сообщение
        break;
      } else {
        var mi = a.indexOf(m[i]);
      }
      if (mi === -1) {
        // если символа нет в алфавите, то добавляем его неизменным
        r += m[i];
        i++;
        continue;
      }
      var ki_s = k[j >= k.length ? j % k.length : j]; // подставляем длину ключа под слово
      var ki = a.indexOf(ki_s);
      var c = a[(a.length + (mi - ki)) % a.length]; //дешифруем
      r += c;
      i++;
      j++;
    }
    if (!this.isDirect) {
      return r.split("").reverse().join("");
    }

    return r; //вернуть строку результата
  }
}

module.exports = VigenereCipheringMachine;
