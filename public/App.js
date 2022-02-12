import { Invoice } from "./Invoice.js";
import { Payment } from "./payment.js";
const type = document.getElementById("type");
const client = document.getElementById("from");
const detail = document.getElementById("details");
const amount = document.getElementById("amount");
const form = document.getElementById("form");
const list = document.getElementById("unordered-list");
form.addEventListener("submit", submit);
function submit(e) {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(client.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(client.value, detail.value, amount.valueAsNumber);
    }
    createElement(list, type.value, doc);
}
function createElement(element, header, theClass) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.innerText = header;
    li.append(h4);
    p.textContent = theClass.display();
    li.append(p);
    element.append(li);
}
