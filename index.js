let one = document.querySelector(".leftname");
let two = document.querySelector(".rightname")
let result = document.querySelector(".ball")

let button = document.querySelector("button");
let nrode = one.value;
let hide = two.value;
let hofer;

button.addEventListener("click", () => {

  if (one.value !== "" && two.value !== "") {
    // for removing numbers
    let you = (nrode + hide).replace(/[0-9]/g, '');
    // for removing white spaces
   you = you.replace(/\s/g, '');
    let finalarrays = [...(new Set([...you]))];
    let total = finalarrays.length;
    // <---
    let cool;
    let arms = ["f", "l", "a", "m", "e", "s"];
    while (arms.length !== 1) {
      function lengthTotal(total) {
        if (total > arms.length) {
          while (total > arms.length) {
            total = total - arms.length;
          }
          cool = total;
        } else if (total < arms.length) {
          cool = total;
        }
        return cool;
      }
      let index = lengthTotal(total)
      arms.splice(index - 1, 1);
      // <--console.log(arms);-->
    }

    if (arms[0] === 'm') {
      hofer = +secondRandom(90);
    } else if (arms[0] === 'l') {
      hofer = +secondRandom(80);
    } else if (arms[0] === 'f') {
      hofer = +firstRandom(60);
    } else if (arms[0] === 'a') {
      hofer = +firstRandom(40);
    } else if (arms[0] === 's') {
      hofer = +firstRandom(20);

    } else {
      hofer = firstRandom(0);
    }

    function firstRandom(values) {
      return (Math.floor(Math.random() * 20) + values)
    }

    function secondRandom(points) {
      return (Math.floor(Math.random() * 10) + points)
    }

    let immense = setInterval(sojoPI, 10);
    let inter = 0;
  
    function sojoPI() {
      inter++;
      result.innerHTML = inter +"%";
      if (inter === hofer) {
        clearInterval(immense);
      }
    }

  } else {
    alert("give some value")
  }





});