function ConvertTime(timestamp) {
  var d = new Date(timestamp),
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2),
    dd = ("0" + d.getDate()).slice(-2),
    time;
  time = mm + "/" + dd + "/" + yyyy;
  return time;
}

export default ConvertTime;
