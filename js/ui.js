import {date} from "./app.js"
import { title }from './app.js';

 export default class UI{
    createElement(tagname,className,content){
       let item= document.createElement(tagname);
       item.className=className;
        if(content)item.innerHTML=content
        return item
    }
    createEvent(){
        let AllEvent = this.createElement('div' , 'allevent')
        let titleEvent = this.createElement('h1' , 'title',title.value)
        let EventDays = this.createElement('h3','days')
        let EventHours = this.createElement('h3','hours')
        let Eventmins = this.createElement('h3','mins')
        let Eventsecs = this.createElement('h3','secs')

        
        //append child
        AllEvent.appendChild(titleEvent);
        AllEvent.appendChild(EventDays);
        AllEvent.appendChild(EventHours)
        AllEvent.appendChild(Eventmins)
        AllEvent.appendChild(Eventsecs)
        
        
        document.querySelector('.event').appendChild(AllEvent)
       
    }
    distanceTime(){
        setInterval(() => {
            let now = new Date().getTime();
            let countDown = new Date(date.value).getTime();
            let distance = countDown - now ; 
           //trying to make destructuring -_-
            let time =
            [
                Math.floor(distance / (1000 * 60 * 60 * 24)),
                Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                Math.floor((distance % (1000 * 60)) / 1000)
                
            ]
            let [days , hours ,minutes,seconds] = time;
           
            // document.querySelector('.event').innerHTML =`<h3>${days} D</h3><h3>${hours} H</h3><h3>${minutes} D</h3><h3>${seconds} S</h3> ` 
            
            if(distance <0){
                document.querySelector('.days').innerHTML=`Ex`
                document.querySelector('.hours').innerHTML=`PI`
                document.querySelector('.mins').innerHTML=`R`
                document.querySelector('.secs').innerHTML=`ED`    
              }
            else{
                document.querySelector('.days').innerHTML=days +`D`
                document.querySelector('.hours').innerHTML=hours +`H`
                document.querySelector('.mins').innerHTML=minutes +`M`
                document.querySelector('.secs').innerHTML=seconds +`S`
    
            }
        }, 1000);
    }
    validForm(){
        document.querySelector('button').addEventListener('click',()=>{
        if(title.value === "" && date.value ===""){
            window.alert('Fill is empty')
        }
        else{  
            ui.createEvent();
            ui.distanceTime()
        }})
    }
}
