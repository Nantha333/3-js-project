var container=document.querySelector('.container')
var btns=document.querySelectorAll('.btn')
var imgList =["1","2"]
let index=0

btns.forEach((button)=>{
button.addEventListener('click', ()=>{
    console.log('clicked')
    if(button.classList.contains('btn-left')){
        index--;
        if(index<0){
            index = imgList.length-1;
        }
        container.style.backgroundImage = `url("${imgList[index]}.jpg")`;

        
    }
    else{
        index++;
        if(index==imgList.length){
            index = 0;
        }
        container.style.backgroundImage = `url("${imgList[index]}.jpg")`;

        

    }

})
})