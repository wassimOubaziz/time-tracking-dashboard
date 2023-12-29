var myData = JSON.parse(`[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
  `);

const work = document.querySelectorAll(".work");
let time = "weekly";
const timer = document.querySelectorAll(".user h4");
console.log(timer);

function setTimer(time) {
  for (const [key, value] of work.entries()) {
    const data = myData[key];
    for (const index in data.timeframes) {
      if (time === index) {
        const workTime0 = work[key].querySelector("h1");
        const workTime1 = work[key].querySelector(".secondSpan");
        workTime0.textContent = `${data.timeframes[index].current}hrs`;
        workTime1.textContent = `${data.timeframes[index].previous}`;
        if (time === "daily") {
          work[key].querySelector(".fristSpan").textContent = "Yesterday";
        } else if (time === "weekly") {
          work[key].querySelector(".fristSpan").textContent = "Last Week";
        } else {
          work[key].querySelector(".fristSpan").textContent = "Last Month";
        }
      }
    }
  }
}

function clearTheColor() {
  for (const [key, value] of timer.entries()) {
    value.style.color = "#6a6fa8";
  }
}
setTimer(time);

//timer[0].addEventListener;

for (const [key, value] of timer.entries()) {
  value.addEventListener("click", function () {
    time = value.textContent.toLowerCase();
    setTimer(time);
    clearTheColor();
    value.style.color = "rgba(255, 255, 255, 0.8)";
  });
}
