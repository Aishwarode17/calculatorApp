
let num = document.querySelectorAll(".num");
let opr = document.querySelectorAll(".opr");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");

let beg = "0";
let wait = true;
let opw = true;

let gg = (event) => {
  let field = document.querySelector("#field");
  if(!wait){
    field.textContent = "";
    beg = "";
  }
  beg = beg + event.target.value;

 if(opw == false){
    field.textContent = '';
    field.textContent = field.textContent + event.target.value;
  }
  else{
      field.textContent = field.textContent + event.target.value;
  }

  opw = true;
}

let op = (event) => {

  if(opw){
  let field =document.querySelector("#field");
  beg = eval(beg);
  field.textContent = beg;
  beg = beg + event.target.value;
  opw = false;
  }
}

const result = ()=>{
  try{
  let field = document.querySelector("#field");
  beg = eval(beg);
  field.textContent = beg;
}
  catch{
    console.log('error');
  }
}

const clean=()=>{
  let field = document.querySelector("#field");
  beg = "0";
  field.textContent = 0;
}

// *******************************************************************
// *********event listeners ******************************************


  num[0].addEventListener('click',gg);
  num[1].addEventListener('click',gg);
  num[2].addEventListener('click',gg);
  num[3].addEventListener('click',gg);
  num[4].addEventListener('click',gg);
  num[5].addEventListener('click',gg);
  num[6].addEventListener('click',gg);
  num[7].addEventListener('click',gg);
  num[8].addEventListener('click',gg);
  num[9].addEventListener('click',gg);
  num[10].addEventListener('click',gg);
  opr[0].addEventListener('click',op);
  opr[1].addEventListener('click',op);
  opr[2].addEventListener('click',op);
  opr[3].addEventListener('click',op);
  clear.addEventListener('click',clean );
  equal.addEventListener('click', result);
// ********************************************************************
// ********************************************************************
