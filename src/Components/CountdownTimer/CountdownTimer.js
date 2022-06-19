import React from "react";
import "./CountdownTimer.css";

(
  function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // 22 june 12pm
  
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "6/23/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear ;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "COMPLETED!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }

 
        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / (hour*2)
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ))
      //seconds
    }, 0);
})();
export default function CountdownTimer() {



  return (
      <div className="container">
        <h1 id="headline">Registration Starts In</h1>
        <div id="countdown">
          <ul>
            <li>
              <span id="days"></span>days
            </li>
            <li>
              <span id="hours"></span>Hours
            </li>
            <li>
              <span id="minutes"></span>Minutes
            </li>
            <li>
              <span id="seconds"></span>Seconds
            </li>
          </ul>
        </div>
      </div>
  );
}
