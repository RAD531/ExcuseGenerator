/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

$(document).ready(function() {
  $("#excuseButton").click(function() {
    onload();
  });

  function onload() {
    const elem = document.getElementById("excuse");

    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    var whoText = who[Math.floor(Math.random() * who.length)];
    var actionText = action[Math.floor(Math.random() * action.length)];
    var whatText = what[Math.floor(Math.random() * what.length)];
    var whenText = when[Math.floor(Math.random() * when.length)];

    elem.innerHTML = `${whoText} ${actionText} ${whatText} ${whenText}`;
  }
});
