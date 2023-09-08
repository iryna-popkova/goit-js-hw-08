
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TimeKey = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = function (currentTime) {
  localStorage.setItem(TimeKey, JSON.stringify(currentTime.seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(TimeKey)) || 0);

