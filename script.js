const btnEle=document.querySelector(".btn");
const imgEle=document.querySelector("#qr-img");
const boxEle=document.querySelector("#img-box");
const inputEle=document.querySelector("#qr-text");
btnEle.addEventListener("click", ()=>{
    if(inputEle.value.length > 0){
        imgEle.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEle.value}`
        boxEle.classList.add("show-img")
    }  
})