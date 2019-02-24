import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> elements
const realTime = document.getElementById("realTime");
const breakTime = document.getElementById("breakTime");
const touch = document.getElementById("touch");

// Update the <text> elements every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  // realTime in action
  let mins = util.zeroPad(today.getMinutes());
  realTime.text = `${hours}:${mins}`;
  // breakTime in action
  let breakMins = util.zeroPad(util.breakTimeMinutes(today.getHours(), today.getMinutes()));
  breakTime.text = `${hours}:${breakMins}`;
}

touch.onmousedown = e => {
  if (document.getElementById("realTime").style.visibility == 'visible') {
    document.getElementById("realTime").style.visibility = 'hidden';
  } else {
    document.getElementById("realTime").style.visibility = 'visible';
  }
}
