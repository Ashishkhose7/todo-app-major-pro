
    let categorys = document.getElementsByClassName('catesec'); // getting all the class name category 
        for(let i=0;i<categorys.length;i++){ // looping in the  categorys to find the which categry class belongs and implement according sesign check home.css to get the color of eact section
            if(categorys[i].innerHTML.trim()=='Work'){ 
               categorys[i].classList.add('work')
            }
            else if(categorys[i].innerHTML.trim()=='Personal'){
                categorys[i].classList.add('personal')
            }else if(categorys[i].innerHTML.trim()=='Buisness'){
                categorys[i].classList.add('buisness')
            }else if(categorys[i].innerHTML.trim()=='Others'){
                categorys[i].classList.add('others')
            }
        }

// this in responsible for making  making cross line when the idem is  checked for deleting
function checkedOrNot(){ 
    let cb = document.querySelectorAll('.delechack'); // getting all the check-box class 
    let descdisp = document.querySelectorAll('.dispdsc'); // gettong all the class where descripting of TODO is defined
    let ddsp = document.querySelectorAll('.dueDate'); // getting all the class for dueDate
    for(let i=0;i<descdisp.length;i++){
        let dueDate = ddsp[i].innerHTML;
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
            // console.log(document.getElementById(cb[i].getAttribute('uid')+dueDate))
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
        }
       
    } 
   
}
