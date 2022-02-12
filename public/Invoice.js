export class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    display() {
        return `${this.client} owes $${this.amount} for ${this.detail}`;
    }
}
