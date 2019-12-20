import UI from './ui.js';
import Store from './store.js';
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
})
console.log(UI.prototype)
const ui = new UI();
document.querySelector('button').addEventListener('click',()=>{
    if(title.value === "" && date.value ===""){
        window.alert('Fill is empty')
    }
    else{  
        ui.createEvent();
        ui.distanceTime()
    }})
const store =new Store();
store.getEvent()
 export const title = document.querySelector('.title'); 
export const date =document.querySelector('.date') ;
