class Grocery {
    constructor(
      public name: string,
      public quantity: number,
      public price: number,
    ) {
    }
  }
  
  function createGroceries(groceryList) {
    let returnStatement = 'grocery items list:';
    for (let element of groceryList) {
      returnStatement = returnStatement + " Item: " + element.name + ". Quantity: " + element.quantity + ". Price: " + element.price;
    }
    return returnStatement;
  }
  
  const groceryList = [];
  let mango = new Grocery("mango",4,2.25);
  let apple = new Grocery("apple",6,3.25);
  let bread = new Grocery("bread",15,0.25);
  let milk = new Grocery("milk",2,3.50);
  let coffee = new Grocery("coffee",1,5.50);
  let meat = new Grocery("meat",1,3.50);
  let pasta = new Grocery("pasta",7,6.50);
  groceryList.push(mango);
  groceryList.push(apple);
  groceryList.push(bread);
  groceryList.push(milk);
  groceryList.push(coffee);
  groceryList.push(meat);
  groceryList.push(pasta);
  
  document.body.textContent = createGroceries(groceryList);
