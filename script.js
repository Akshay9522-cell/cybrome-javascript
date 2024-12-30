// const mybtn=document.getElementById('btn')
 //const h=document.getElementById('ans')

// const p1=document.getElementById('inp1')
// const c1=document.getElementById('inp2')
// const m1=document.getElementById('inp3')
// const b1=document.getElementById('inp4')


// mybtn.addEventListener('click',()=>{
    
//     let p=parseInt(p1.value)
//     let c=parseInt(c1.value)
//     let m=parseInt(m1.value)
//     let b=parseInt(b1.value)
   
   
//     let reuslt=`${p+c+m+b} percentage ${(p+c+m+b)/4}` 
   
//     h.innerHTML= reuslt 

// })

const arr=[
    {
        name:'akki',
        age:24,
        city:"Banglore"
    },
    {
        name:"atika",
        age:23,
        city:"Chennai"
    },
    {
        name:"yash",
        age:36,
        city:"Bhopal"
    }
]

const table1=document.querySelector('.table')

let main=`<tr> 
          <th>NAME</th>
          <th>AGE</th>
          <th>CITY</th>
              </tr>`


   
 
arr.map((e)=>{

    main+=`<tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.city}</td>
            </tr>`

          
})
table1.innerHTML=main