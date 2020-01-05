let ul = document.getElementById('uList');
let events = [];

let nodelist = document.getElementsByTagName("LI");
for (let i = 0; i < nodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

function addEvent() {
  let input = document.getElementById('input').value;
  let entry = document.createElement('li');
  entry.appendChild(document.createTextNode(input));
  if (input == null || input.length == 0) {
    alert("You must write something.");
  } else {
    uList.appendChild(entry);
  }
  events.push(input);
  document.getElementById("input").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  entry.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
