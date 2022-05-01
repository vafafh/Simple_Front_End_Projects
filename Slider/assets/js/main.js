let image=document.querySelector('.slider img');
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');

var MySlider=[
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
]

let count=0;
image.setAttribute('src',MySlider[count]);

next.onclick=function(){
   AutoPlay();
}
prev.onclick=function(){
   count--;
   if(count<0){
       count=MySlider.length-1;
   }
   image.setAttribute('src',MySlider[count]);
   
   for(let i=0;i<spans.length;i++){

    let active=document.querySelector('.active');  
    active.classList.remove('active');
    spans[count].classList.add('active');
  
}
}

setInterval(() => {
    AutoPlay()
}, 3000);

let dots=document.getElementById('dots');
for(let i=0;i<MySlider.length;i++){
    let span=document.createElement('span');
    
    dots.appendChild(span);
} 


let spans=document.querySelectorAll('.dots span');
spans[0].classList.add('active')
let yoxla;
for(let i=0;i<spans.length;i++){ 
     spans[i].addEventListener('click',function(){
        let active=document.querySelector('.active');  
        active.classList.remove('active');
        spans[i].classList.add('active');
        AutoPlay();

    })

}

function AutoPlay(){
    count++;
    if(count===MySlider.length){
        count=0;
    }
    
    image.setAttribute('src',MySlider[count]);
    
    for(let i=0;i<spans.length;i++){
            let active=document.querySelector('.active');  
            active.classList.remove('active');
            spans[count].classList.add('active');
    }
}
































