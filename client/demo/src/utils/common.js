export function show_msg(msg, timeOut) {
    var timer = null;
    var timeOut = timeOut || 1000;
    var index = 0;
    index++;
    if (index > 1) {
        return
    }
    clearTimeout(timer);
    let msg_dis_container = document.createElement("div");
    let msg_dis_content = document.createElement("div");

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
        let temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    } else if (fileSize < (1024*1024*1024)) {
        let temp = fileSize / (1024*1024);
        temp = temp.toFixed(2);
        return temp + 'M';
    } else {
        let temp = fileSize / (1024*1024*1024);
        temp = temp.toFixed(2);
        return temp + 'G';
    }
}

//格式化日期 注意换算时1000 
 export function formatDate(value) {
  let date = new Date(value);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let today = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

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

//文件类型名字
// fileicon-large-pdf
// fileicon-small-pdf
//dir-samll
//dir-large
export function formatFileNameType(name,size) {
    let fileName=name.split("."); 
    let len=fileName.length; 
	let str =  len ? fileName[len-1] : ''
    switch (str){
        case 'mp4':
            return `fileicon-${size}-video`;
            break;
        case 'pdf':
            return `fileicon-${size}-pdf`;
            break;
        default: ''
            return `dir-${size}`; //默认文件名        
    }
}

