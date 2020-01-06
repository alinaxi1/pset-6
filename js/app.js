let mylist=[];

function remove()
    {
    let btnindex=this.id.replace("btn","");
    mylist.splice(btnindex,1);
    showlist(mylist);


    }

    function priority()
    {
    let btnindex=this.id.replace("pri","")
    let current=mylist[btnindex];
    mylist.splice(btnindex,1);
    if (btnindex==0)
    {
     mylist.push(current);
    }
    else
    {
      mylist.unshift(current);
    }

    showlist(mylist);


    }

    function striketext()
    {

       let myli=document.getElementsByTagName("LI");
      let btnindex=this.id.replace("chk","")
      if (myli[btnindex].style.textDecoration == "line-through")
     {
        myli[btnindex].style.textDecoration = "none";
     }
     else
        {
          myli[btnindex].style.textDecoration = "line-through";
         }

    }

function add()
{
 var inputValue = document.getElementById("myInput").value;
 if (inputValue.length== 0 || inputValue==null) {
    alert("You must write something!");
    return false;
  } else {
    mylist.push(inputValue);
  }
  document.getElementById("myInput").value = "";
  showlist(mylist);
  }


function showlist(todolist)
   {
     eventList = "";
     for (var i = 0; i<todolist.length; i++)
     {
       eventList += "<li>" + todolist[i] + "</li>";
     }
     document.getElementById("mytodolist").innerHTML = eventList;
     let myli=document.getElementsByTagName("LI");
     for (var i = 0; i < myli.length; i++)
     {
       var btnremove = document.createElement("button");
       btnremove.innerHTML = "\u00D7";
       btnremove.id='btn'+i;
       myli[i].appendChild(btnremove);
       document.getElementById('btn'+i).onclick=remove;

       var btnchk = document.createElement("button");
       btnchk.innerHTML = "&#10004";
       btnchk.id='chk'+i;
       myli[i].appendChild(btnchk);
       document.getElementById('chk'+i).onclick=striketext;

      var btnpri = document.createElement("button");
       btnpri.innerHTML = "&#10071";
       btnpri.id='pri'+i;
       myli[i].appendChild(btnpri);
       document.getElementById('pri'+i).onclick=priority;

     }
    }
