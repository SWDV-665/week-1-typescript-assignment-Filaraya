var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
function createGroceries(groceryList) {
    var returnStatement = 'grocery items list:';
    for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
        var element = groceryList_1[_i];
        returnStatement = returnStatement + " Item: " + element.name + ". Quantity: " + element.quantity + ". Price: " + element.price;
    }
    return returnStatement;
}
var groceryList = [];
var mango = new Grocery("mango", 4, 2.25);
var apple = new Grocery("apple", 6, 3.25);
var bread = new Grocery("bread", 15, 0.25);
var milk = new Grocery("milk", 2, 3.50);
var coffee = new Grocery("coffee", 1, 5.50);
var meat = new Grocery("meat", 1, 3.50);
var pasta = new Grocery("pasta", 7, 6.50);
groceryList.push(mango);
groceryList.push(apple);
groceryList.push(bread);
groceryList.push(milk);
groceryList.push(coffee);
groceryList.push(meat);
groceryList.push(pasta);
document.body.textContent = createGroceries(groceryList);
//# sourceMappingURL=Grocery.js.map