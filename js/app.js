let ul = document.getElementById('uList');
let events = [];

let nodelist = document.getElementsByTagName("LI");
let close = document.getElementsByClassName("close");
let done = document.getElementsByClassName("done");

for (let i = 0; i < nodelist.length; i++) {
  let span = document.createElement("SPAN");
  let check = document.createTextNode("\u2713");
  span.className = "done";
  span.appendChild(check);
  nodelist[i].appendChild(span);
}

for (let i = 0; i < nodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);
}

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let li = this.parentElement;
    li.style.display = "none";
  }
}

for (let i = 0; i < done.length; i++) {
  done[i].onclick = function () {
    let li = this.parentElement;
    li.style.setProperty("text-decoration", "line-through");
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

//adds "x"
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);


//closes list item
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let li = this.parentElement;
      li.style.display = "none";
    }
  }

  //adds checkmark
  let span = document.createElement("SPAN");
  let check = document.createTextNode("\u2713");
  span.className = "done";
  span.appendChild(check);
  nodelist[i].appendChild(span);

    //draws line through list item
      for (let i = 0; i < done.length; i++) {
        done[i].onclick = function () {
          let li = this.parentElement;
          li.style.setProperty("text-decoration", "line-through");
        }
      }
}
