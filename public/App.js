import { Invoice } from "./Invoice.js";
import { Payment } from "./payment.js";
import { LocalStorage } from "./storage.js";
const store = new LocalStorage;
const type = document.getElementById("type");
const client = document.getElementById("from");
const detail = document.getElementById("details");
const amount = document.getElementById("amount");
const form = document.getElementById("form");
const list = document.getElementById("unordered-list");
let targetElement;
form.addEventListener("submit", submit);
//you
function submit(e) {
    e.preventDefault();
    if (client.value === "" || detail.value === "" || amount.valueAsNumber === NaN) {
    }
    else {
        let doc;
        if (type.value === "Invoice") {
            doc = new Invoice(client.value, detail.value, amount.valueAsNumber);
        }
        else {
            doc = new Payment(client.value, detail.value, amount.valueAsNumber);
        }
        createElement(list, type.value, doc);
        client.value = ""
            , detail.value = "";
        amount.value = "";
    }
}
function createElement(element, header, theClass) {
    const listItem = store.AddItem({ header, text: theClass.display() });
    //console.log(listItem);
    store.ui(header, theClass.display());
}
function display() {
    let theStore = store.getStorage();
    theStore.map((item) => {
        store.ui(item.header, item.text);
    });
}
document.addEventListener("DOMContentLoaded", (e) => {
    display();
});
function dele(e) {
    if (e.target.className === "cancel") {
        targetElement = e.target;
        popit(e);
    }
}
// pop logic
const buttonClose = document.getElementById("close-button");
const popupDiv = document.getElementById("popup-div");
const overlayDiv = document.getElementById("overlay");
const popInput = document.getElementById("password");
const incorrectDiv = document.getElementById("incorrect");
popInput.addEventListener("focus", theFocus);
list.addEventListener("click", dele);
function popit(e) {
    popupDiv.classList.add("active");
    overlayDiv.classList.add("active");
}
buttonClose.addEventListener("click", closepop);
function closepop() {
    popupDiv.classList.remove("active");
    overlayDiv.classList.remove("active");
    incorrectDiv.innerText = "";
}
overlayDiv.addEventListener("click", closepop);
const popForm = document.getElementById("form-pop");
popForm.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    if (popInput.value !== "" && popInput.value === "cornelius") {
        popDelete(targetElement);
        closepop();
    }
    else if (popInput.value === "") {
        incorrectDiv.innerText = "Please fill in the field";
    }
    else if (popInput.value !== "cornelius") {
        incorrectDiv.innerText = "Incorrect password";
    }
    popInput.value = "";
}
function popDelete(e) {
    let parent = e.parentElement.parentElement;
    let children = parent.parentElement.children;
    //console.log(Array.from(children).indexOf(e.target.parentElement.parentElement));
    store.delet(Array.from(children).indexOf(e.parentElement.parentElement));
    parent.remove();
}
function theFocus() {
    incorrectDiv.innerText = "";
}
