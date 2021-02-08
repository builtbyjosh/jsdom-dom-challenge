let counterID = document.getElementById("counter");
let pauseID = document.getElementById("pause");
let minusID = document.getElementById("minus");
let plusID = document.getElementById("plus");
let heartID = document.getElementById("heart");
let listID = document.getElementById("list");
let submit = document.getElementById("submit");
let active = true

// a counter that increases by 1 each second
let counter = 0
let timer = setInterval(function(){
  if (active){
    counterID.innerHTML = counter;
    counter += 1;
  }
}, 1000 );

//  Plus and minus buttons that increment or decrement the counter
plusID.addEventListener('click', function(){
  counter += 1;
  counterID.innerHTML = parseInt(counterID.innerHTML) + 1;
});

minusID.addEventListener('click', function(){
  counter -= 1;
  counterID.innerHTML = parseInt(counterID.innerHTML) - 1;
});

// a like button that adds a like for the number that is currently displayed by the timer

heartID.addEventListener("click", function(){
  let like = document.querySelector(".likes");
  if(document.getElementById(`Li${counter}`) == null){
    let li = document.createElement("li");
    li.setAttribute("id", `Li${counter}`);
    li.innerHTML = `${counter} have this many likes:1`;
    like.appendChild(li);
  } else {
    let li = document.getElementById(`Li${counter}`);
    let splitted = parseInt(li.innerHTML.split(":")[1]) + 1;
    li.innerHTML = `${counter} have this many likes:${splitted}`;
    like.appendChild(li);
  }
})

// a pause button to pause the counter

pauseID.addEventListener("click",function(){
  if (active){
    pauseID.innerHTML = "resume"
    active = false
    minusID.disabled = true;
    plusID.disabled = true;
    heartID.disabled = true;
    commentID.disabled = true;
  }
  else{
    pauseID.innerHTML = "pause"
    active = true
    minusID.disabled = false;
    plusID.disabled = false;
    heartID.disabled = false;
    commentID.disabled = false;
  }

})

// a comment section

submit.addEventListener("click", function(event){
  event.preventDefault();
  let comment = document.querySelector('input#comment-input').value
  let commentsList = document.querySelector('.comments')
  let p = document.createElement("p");
  let node = document.createTextNode(comment)
  p.appendChild(node);
  commentsList.appendChild(p);
  document.querySelector('input#comment-input').value = ''
});