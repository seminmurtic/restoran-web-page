// this is one of the things that i learn in javascript 
let orderbtn = document.querySelectorAll('.botona');
let modelcontent = document.getElementById("model-container");
let closebtn = document.getElementById("close-btn");

orderbtn.forEach(elm => {

    elm.addEventListener('click', function(){
        modelcontent.style.display = 'block';
    });
})

window.addEventListener('click', function(e){
    if (e.target === modelcontent){
        modelcontent.style.display = 'none'
    }
})

closebtn.addEventListener('click', function(){
    modelcontent.style.display = 'none'
})