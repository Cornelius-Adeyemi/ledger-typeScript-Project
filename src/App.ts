import { Invoice } from "./Invoice.js";
import { Payment } from "./payment.js";
import { hasMethod } from "./interface.js";
import { LocalStorage } from "./storage.js";

const store = new LocalStorage;
const type = document.getElementById("type") as HTMLSelectElement;
const client = document.getElementById("from") as HTMLInputElement;
const  detail = document.getElementById("details")  as HTMLInputElement;
const amount = document.getElementById("amount")   as HTMLInputElement;
const form = document.getElementById("form") as HTMLFormElement;

const list = document.getElementById("unordered-list") as HTMLUListElement;

let targetElement: any;

form.addEventListener("submit",submit)



//you
function submit(e:SubmitEvent){
    e.preventDefault();

    if(client.value ==="" || detail.value ===""  || amount.valueAsNumber ===NaN){

    }else{

    let doc : hasMethod;

    if(type.value==="Invoice"){
        doc= new Invoice(client.value,detail.value, amount.valueAsNumber)
    }else{
        doc = new Payment(client.value,detail.value, amount.valueAsNumber)
    }

    createElement(list, type.value,doc);

    client.value =""
    ,detail.value ="" 
    amount.value = ""

}
}


function createElement(element:HTMLUListElement,header:string, theClass:hasMethod ){
   
   
   const listItem = store.AddItem({header,text:theClass.display()});
   //console.log(listItem);
   
    store.ui(header,theClass.display())

}

function display(){
     
    let theStore = store.getStorage();
    theStore.map((item:any)=>{
     store.ui(item.header,item.text)
    }

    )
   
    
}




document.addEventListener("DOMContentLoaded",(e)=>{
    display();
})



function dele(e:any){
   if(e.target.className === "cancel"){
       
    targetElement = e.target;
  
    popit(e);

   }
}


// pop logic

const buttonClose = document.getElementById("close-button");
const  popupDiv   = document.getElementById("popup-div");
const overlayDiv =  document.getElementById("overlay");
const popInput = document.getElementById("password") as HTMLInputElement;

list.addEventListener("click",dele);

function popit(e:any){
    popupDiv!.classList.add("active");
    overlayDiv!.classList.add("active");
}

buttonClose!.addEventListener("click",closepop)

function closepop(){
    popupDiv!.classList.remove("active");
    overlayDiv!.classList.remove("active");
}

overlayDiv!.addEventListener("click",closepop)

const popForm = document.getElementById("form-pop");

popForm!.addEventListener("submit", submitForm)


function submitForm(e:SubmitEvent){
    e.preventDefault();
    if(popInput!.value !=="" && popInput!.value ==="cornelius"){
      popDelete(targetElement);
      
    }
    closepop();
    popInput!.value="";
}


function popDelete(e:any){
    let parent = e.parentElement.parentElement;
    let children = parent.parentElement.children;
    //console.log(Array.from(children).indexOf(e.target.parentElement.parentElement));
    store.delet(Array.from(children).indexOf(e.parentElement.parentElement));
    parent.remove();
}