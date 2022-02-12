export class Payment {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    display() {
        return `${this.client} is owned $${this.amount} for ${this.detail}`;
    }
}
