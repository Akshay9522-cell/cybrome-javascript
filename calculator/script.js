let box=document.querySelector('.myinput')
const btn=document.querySelector('.btns')



// JS FOR CLEAR BUTTON
let clear=document.querySelector('.clr')

clear.addEventListener('click',()=>{
        box.value=" "
})



// JS FOR EQUAL TO BUTTON 
let equal=document.querySelector('.btnequal')
 
  equal.addEventListener('click',()=>{

    box.value=eval(box.value)
    
  })




// JS FOR ALL BUTTONS BY EVENT DELEGATION
btn.addEventListener('click',(e)=>{
      
   
    if(e.target.tagName==='BUTTON'){
        box.value+=e.target.textContent
        
    }
    

 
})



// JS FOR BACKSPACE BUTTON
let back=document.querySelector('.bck')

back.addEventListener('click',()=>{
    box.value=box.value.slice(0,-1)
})