var State = /** @class */ (function () {
    function State(val) {
        this.data = val;
    }
    Object.defineProperty(State.prototype, "state", {
        get: function () {
            return this.data;
        },
        set: function (val) {
            this.data = val;
        },
        enumerable: false,
        configurable: true
    });
    return State;
}());
var store = new State("Luis");
console.log(store.state);
store.state = "Lauren";
console.log(store.state);
