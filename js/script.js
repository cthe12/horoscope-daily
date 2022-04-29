document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('#yesterday').addEventListener('click', getYesterday)
document.querySelector('#tomorrow').addEventListener('click', getTomorrow)

function getFetch() {
  const sign = document.querySelector("input").value
  let day = "today"
const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
  document.querySelector("section").innerHTML = json.description
});
}

function getYesterday() {
  const sign = document.querySelector("input").value
  let day = "yesterday"
const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
  document.querySelector("section").innerHTML = json.description
});
}

function getTomorrow() {
  const sign = document.querySelector("input").value
  let day = "tomorrow"
const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
  document.querySelector("section").innerHTML = json.description
});
}