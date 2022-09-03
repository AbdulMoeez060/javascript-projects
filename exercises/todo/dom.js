
var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown',runEvent);

function runEvent(e){
    console.log("Event type: "+e.type);
    console.log(e.target.value);

}