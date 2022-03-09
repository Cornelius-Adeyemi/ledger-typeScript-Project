export class LocalStorage {
    setStorage() {
        localStorage.setItem("list", "[]");
    }
    AddItem(data) {
        let list = this.getStorage();
        list.push(data);
        localStorage.setItem("list", JSON.stringify(list));
        return list;
    }
    getStorage() {
        let list;
        if (localStorage.getItem("list") == null) {
            list = [];
        }
        else {
            list = JSON.parse(localStorage.getItem("list"));
        }
        return list;
    }
    delet(index) {
        let list = this.getStorage();
        list.splice(index, 1);
        console.log(list);
        localStorage.setItem("list", JSON.stringify(list));
    }
    ui(header, body) {
        let thelist = document.getElementById("unordered-list");
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const div = document.createElement('div');
        const p = document.createElement("p");
        const span = document.createElement("span");
        span.innerText = "X";
        span.className = "cancel";
        div.classList.add("div-flex");
        h4.innerText = header;
        li.append(h4);
        p.textContent = body;
        div.append(p);
        div.append(span);
        li.append(div);
        thelist.append(li);
    }
}
