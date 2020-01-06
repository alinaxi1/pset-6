let ul = document.getElementById('uList');
let events = [];

let nodelist = document.getElementsByTagName("LI");
let close = document.getElementsByClassName("close");
let done = document.getElementsByClassName("done");

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
  for (let i = 0; i < nodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
  }


//closes list item
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let li = this.parentElement;
      li.style.display = "none";
    }
  }

  //adds checkmark
    

    //draws line through list item
      for (let i = 0; i < done.length; i++) {
        done[i].onclick = function () {
          let li = this.parentElement;
          li.style.setProperty("text-decoration", "line-through");
        }
      }
}
