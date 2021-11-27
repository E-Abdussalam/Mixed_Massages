// grab elements
const star = document.querySelector(".star");
const luck = document.querySelector(".luck");
const advice = document.querySelector(".advice");

const paragraph = document.querySelector(".lorem-text");
const btn = document.getElementById("btn");

// create message object
const renerateRandom = (num) => {
  return Math.floor(Math.random() * num);
};

const collectiveWisdom = {
  star: ["star", "moon", "comet", "sun"],
  fortuneOutput: [
    "dont't count on it",
    "terrible luck",
    "try again",
    "great luck",
    "ok luck",
    "bad luck",
  ],
  advice: [
    "study more",
    "find a job",
    "all good!",
    "talk to someone",
    "keep going",
    "there is light at the end",
  ],
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let personalWisdom = [];
  console.log(personalWisdom);
  for (let prop in collectiveWisdom) {
    let temp = renerateRandom(collectiveWisdom[prop].length);
    console.log(temp);
    console.log(prop);
    personalWisdom.push(collectiveWisdom[prop][temp]);
  }
  star.innerHTML = `Sign:${personalWisdom[0]}`;
  luck.innerHTML = `luck: ${personalWisdom[1]}`;
  advice.innerHTML = `Advice: ${personalWisdom[2]}`;
});
