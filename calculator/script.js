let box=document.querySelector('.myinput')
const btn=document.querySelector('.btns')
// let btn1=document.querySelector('.btn1')
// let btn2=document.querySelector('.btn2')

let clear=document.querySelector('.clr')

clear.addEventListener('click',()=>{
        box.value=" "
})



let equal=document.querySelector('.btnequal')
 
  equal.addEventListener('click',()=>{

    box.value=eval(box.value)
    
  })





btn.addEventListener('click',(e)=>{
      
   
    if(e.target.tagName==='BUTTON'){
        box.value+=e.target.textContent
        
    }
    

 
})

let back=document.querySelector('.bck')

back.addEventListener('click',()=>{
    box.value=box.value.slice(0,-1)
})