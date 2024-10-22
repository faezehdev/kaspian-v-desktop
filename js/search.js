 // Enable Scroll
 const lenis = new Lenis()
 function raf(time) {
   lenis.raf(time)
   requestAnimationFrame(raf)
 }
 
 requestAnimationFrame(raf)

let input = document.querySelector('#inputSearch')
let closeS = document.querySelector('button.c02260')
let circleF = document.querySelector('.c02257')
let timer,
timeoutVal = 1000; // time it takes to wait for user to stop typing in ms

const status = document.getElementById('status');
const typer = input;

typer.addEventListener('keypress', handleKeyPress);
typer.addEventListener('keyup', handleKeyUp);
typer.addEventListener('focus', handlefocus);
function handlefocus(){
    closeS.classList.add('c02261')
}
// when user is pressing down on keys, clear the timeout
function handleKeyPress(e) {
	window.clearTimeout(timer);
    closeS.classList.remove('c02261')
    circleF.classList.add('c02261')
}
// when the user has stopped pressing on keys, set the timeout
// if the user presses on keys before the timeout is reached, then this timeout is canceled
function handleKeyUp(e) {
	window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
	timer = window.setTimeout(() => {
        closeS.classList.add('c02261')
        circleF.classList.remove('c02261')
  }, timeoutVal);
}
closeS.addEventListener('click',()=>{
    input.value =''
    input.setAttribute('placeholder','عبارت مورد نظر را جستجو کنید')
    closeS.classList.remove('c02261')

})

// SEARCH
let searchIconn = document.querySelector('.Search-C .inputBOX .searchIcon')
let inputt = document.querySelector('.inputBOX input#inputSearch')
searchIconn.addEventListener('click',()=>{
  console.log('clicked');

  if(inputt.value == ''){
    return
     }
   else{
    console.log('val',inputt.value);
    var url = `/load.inc?q=${inputt.value}`;
    $(".loaded").load(url);}
})
inputt.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    if(inputt.value != ''){
      event.preventDefault();
      console.log('val',inputt.value);
      var url = `/load.inc?q=${inputt.value}`;
      $(".loaded").load(url);}

    }


  }
)