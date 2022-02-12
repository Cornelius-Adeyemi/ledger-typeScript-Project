import { Invoice } from "./Invoice.js";
import { Payment } from "./payment.js";
import { hasMethod } from "./interface.js";


const type = document.getElementById("type") as HTMLSelectElement;
const client = document.getElementById("from") as HTMLInputElement;
const  detail = document.getElementById("details")  as HTMLInputElement;
const amount = document.getElementById("amount")   as HTMLInputElement;
const form = document.getElementById("form") as HTMLFormElement;

const list = document.getElementById("unordered-list") as HTMLUListElement;

form.addEventListener("submit",submit)



function submit(e:SubmitEvent){
    e.preventDefault();
    let doc : hasMethod;

    if(type.value==="Invoice"){
        doc= new Invoice(client.value,detail.value, amount.valueAsNumber)
    }else{
        doc = new Payment(client.value,detail.value, amount.valueAsNumber)
    }

    createElement(list, type.value,doc);
}


function createElement(element:HTMLUListElement,header:string, theClass:hasMethod ){
   const li = document.createElement("li");
   const h4 = document.createElement("h4");
   const p = document.createElement("p");

   h4.innerText = header;
   li.append(h4);
   p.textContent = theClass.display();
   li.append(p);
   element.append(li);



}