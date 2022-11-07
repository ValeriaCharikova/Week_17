function formatDate(date) {
    let diff = new Date() - date;
    let sec = Math.floor(diff / 1000);
    let min = Math.floor(diff / 1000 / 60);
    if (diff < 1000) {
      return "прямо сейчас";
    } else if (sec < 60) {
      return sec + " сек. назад";
    } else if (min < 60) {
      return min + " мин. назад";
    } else {
      let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timezone: "UTC",
      };
      return new Date().toLocaleString("ru", options);
    }
  }
  
  console.log(formatDate(new Date(new Date() - 1))); 
  console.log(formatDate(new Date(new Date() - 30 * 1000))); 
  console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); 
  console.log(formatDate(new Date(new Date() - 86400 * 4 * 1000)));
  
  