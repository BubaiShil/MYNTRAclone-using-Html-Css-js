
let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
}



function loadBagItemObjects() {
    console.log('bagItems:', bagitems);
    bagItemObjects = bagitems.map(itemId => {
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log('bagItemObjects:', bagItemObjects);
}
  
function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    if (!containerElement) {
        console.error('No container element found');
        return;
    }
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
      innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}


function removeFromBag(id){
  console.log("doing...");
  bagitems=bagitems.filter(bagItemid => bagItemid != id)
  localStorage.setItem('bagItems',JSON.stringify(bagitems))
  loadBagItemObjects()
  numberOfItem()
  displayBagItems()
  console.log("done");
}


function generateItemHTML(bagItem) {
    return `<div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="../${bagItem.image}">
      </div>
      <div class="item-right-part">
        <div class="company">${bagItem.company}</div>
        <div class="item-name">${bagItem.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs ${bagItem.current_price}</span>
          <span class="original-price">Rs ${bagItem.original_price}</span>
          <span class="discount-percentage">(${bagItem.discount}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${bagItem.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${bagItem.delivery_date}</span>
        </div>
      </div>
  
      <div class="remove-from-cart" onclick="removeFromBag(${bagItem.id})">X</div>
    </div>`;
}
