let bagitems = [];


function onLoad() {
    let bagstr = localStorage.getItem('bagitems');
    bagitems = bagstr ? JSON.parse(bagstr) : [];
    home();
    numberOfItem();
}

function addtocart(itemid) {
    bagitems.push(itemid);
    numberOfItem();
    localStorage.setItem('bagitems', JSON.stringify(bagitems));
}

function numberOfItem() {
    let itemNo = document.querySelector(".bag-items");
    if (bagitems.length > 0) {
        itemNo.style.visibility = 'visible';
        itemNo.innerText = bagitems.length;
    } else {
        itemNo.style.visibility = 'hidden';
    }
}

function home() {
    const maincontainer = document.querySelector(".items-container");
    if (!maincontainer) {
        return;
    }
    let innerHTML = "";
    items.forEach(item => {
        innerHTML += `
            <div class="item-container">
                <img class="item-img" src="${item.image}" alt="loading...">
                <div class="rating">${item.rating.stars} ⭐ ${item.rating.count}</div>
                <div class="company">${item.company}</div>
                <div class="items-name">${item.item_name}</div>
                <div class="price">
                    <span class="currentprice">${item.current_price}</span>
                    <span class="originalprice">${item.original_price}</span>
                    <span class="discountprice">${item.discount}</span>
                </div>
                <button class="addbag" onclick= "addtocart(${item.id})">Add to Bag</button>
            </div>
        `;
    });
    maincontainer.innerHTML = innerHTML;
}


onLoad();
