/*
const counter = {
    count: 0,
    next: () =>++this.count,
    current: () =>this.count
}
console.log(counter.next()); // Incrementa count y devuelve 1
*/
const counter = {
    count: 0,
    next: function() {
        return ++this.count;
    },
    current: function() {
        return this.count;
    }
};
console.log(counter.next()); // Incrementa count y devuelve 1