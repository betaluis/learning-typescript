var StateObject = /** @class */ (function () {
    function StateObject(value) {
        this.data = value;
    }
    Object.defineProperty(StateObject.prototype, "state", {
        get: function () {
            return this.data;
        },
        set: function (val) {
            this.data = val;
        },
        enumerable: false,
        configurable: true
    });
    return StateObject;
}());
var store = new StateObject(3);
console.log(store.state);
store.state = 4;
console.log(store.state);
