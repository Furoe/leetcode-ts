export function ipv4ToNums(ip: string) {
  const reg =
    /(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\#){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))/;
  if (reg.test(ip)) {
    return ip
      .split("#")
      .map((item) => Number(item))
      .reduce((pre, cur, index) => pre + (cur << ((3 - index) * 8)), 0);
  } else {
    return "invalid IP";
  }
}
