const form=document.querySelector("#form")
const nameInput=document.querySelector("#nameinput")
const submit=document.querySelector("#submitForm")
const error=document.querySelector("#errormessage")
const list=document.querySelector("#nameList")
const quota=document.querySelector("#numberofstudents")
quota.textContent==0;


nameInput.addEventListener("input", function() {
    error.textContent = nameInput.value.trim().length;
    if(error.textContent==1){
        error.textContent="Enter valid name please!";
        error.style.color="red";
        return;
    }
    error.style.color="black";
    if(error.textContent>=15){
        error.textContent="Enter only your full name please!";
        error.style.color="red";
        return; 
    }

    });

    form.addEventListener("submit",function(event){
        
        event.preventDefault();
        if(error.style.color=="red" || nameInput.value.trim().length==0){
            return;
        }

        const listmembers=document.createElement("li")
        listmembers.textContent=nameInput.value
        list.appendChild(listmembers)
        nameInput.value=""
        error.textContent=0;

        const listDEL=document.createElement("button")
        listDEL.textContent="DELETE"
        listDEL.style.color="red"
        listmembers.appendChild(listDEL)
        listDEL.style.borderColor="red"
        listDEL.style.borderRadius="7px"
        quota.textContent++

        listDEL.addEventListener("click",function(){
        listmembers.remove()
        listDEL.remove()
        quota.textContent--
        })
    })

    
