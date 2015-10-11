var DateFormatter = (function() {
  return {
    format: function(fmt, timestamp) {
      var date = new Date(timestamp);
      fmt = fmt.replace(/YYYY/g, date.getFullYear());
      fmt = fmt.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
      fmt = fmt.replace(/DD/g, ('0' + date.getDate()).slice(-2));
      fmt = fmt.replace(/hh/g, ('0' + date.getHours()).slice(-2));
      fmt = fmt.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
      fmt = fmt.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
      return fmt;
    }
  }
})();

module.exports = DateFormatter;
