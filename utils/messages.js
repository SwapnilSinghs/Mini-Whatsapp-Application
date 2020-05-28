const moment = require('moment');

function formatMessage(username, text) {
    var time = new Date();
    t=time.toLocaleString('en-US', {timeZone: 'Asia/Calcutta', hour: 'numeric', minute: 'numeric', hour12: true })
    console.log(t);

  return {
    username,
    text,
    time: t
  };
}

module.exports = formatMessage;
