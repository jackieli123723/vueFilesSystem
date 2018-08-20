export function show_msg(msg, timeOut) {
    var timer = null;
    var timeOut = timeOut || 1000;
    var index = 0;
    index++;
    if (index > 1) {
        return
    }
    clearTimeout(timer);
    var msg_dis_container = document.createElement("div");
    var msg_dis_content = document.createElement("div");

    msg_dis_container.id = "msg_dis_container"
    msg_dis_container.style.block = "none";
    msg_dis_container.className = "motify";
    msg_dis_content.id = "msg_dis_content"
    msg_dis_content.className = "motify-inner";

    msg_dis_container.appendChild(msg_dis_content)
    document.body.appendChild(msg_dis_container);
    msg_dis_content.innerHTML = msg;
    msg_dis_container.style.display = "block";
    timer = setTimeout(function() {
        msg_dis_container.style.display = "none";
        document.body.removeChild(msg_dis_container);
        index = 0
    }, timeOut);
}

///格式化文件大小
export function formatFileSize(fileSize) {
    if (fileSize < 1024) {
        return fileSize + 'B';
    } else if (fileSize < (1024*1024)) {
        var temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    } else if (fileSize < (1024*1024*1024)) {
        var temp = fileSize / (1024*1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
    } else {
        var temp = fileSize / (1024*1024*1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
    }
}

//格式化日期
 export function formatDate(value) {
  var date = new Date(value);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var today = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (month < 10) {
      month = "0" + month;
  }

  if (today < 10) {
      today = "0" + today;
  }
   if(hour<10){
    hour="0"+hour;
  }

  if(minute<10){
    minute="0"+minute;
  }
  if(second<10){
    second="0"+second;
  }

  return date.getFullYear() + "-"+ month + "-"+ today + " "+ hour+ ":" + minute + ":"+ second;
}