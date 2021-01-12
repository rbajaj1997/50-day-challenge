let boxes = document.querySelectorAll('.box');

document.addEventListener('scroll', checkBox);

// Run it initially
checkBox();

function checkBox(){
    let windowHeight = window.innerHeight * 0.85;
    let boxHeight;
    boxes.forEach((box) => {
        boxHeight = box.getBoundingClientRect().top;
        if(boxHeight < windowHeight){
            box.classList.add('active');
        }else{
            box.classList.remove('active');
        }
    })
}

