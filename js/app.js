// show cart

(function(){
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart');
})

})();

// add items to the cart

(function(){

    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            // console.log(event.target);

            if(event.target.parentElement.classList.contains('store-item-icon')){
                // console.log(event.target.parentElement);
                // console.log(event.target.parentElement.parentElement);
                // console.log(event.target.parentElement.previousElementSibling.src);
                let fullPath = event.target.parentElement.previousElementSibling.src
                // let pos = fullPath.indexOf('img');
                // console.log(pos);
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);
                // console.log(partPath);

                const item = {};
                item.img = `img-cart${partPath}`;
                // let name = event.target.parentElement.parentElement.nextElementSibling;
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;
                // console.log(name)
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                // console.log(price)
                let finalPrice = price.slice(1).trim();            
                // console.log(finalPrice)
                item.price = finalPrice;
                // console.log(item)

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
                cartItem.innerHTML = `
                <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">
    
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </a>
                </div>
                `; // </div>를 여기에 넣어줘야 함! classList.add가 자동으로 생성하는 것은 아닌가보다
                
                //select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);

                alert('item added to the cart');

                showTotals();
            }
        })
    })

    function showTotals(){
        // 여기에 function을 선언하다니...
        // console.log('hello');
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        })
        // console.log(total);

        const totalMoney = total.reduce(function(total, item){
            // 안 써본 reduce
            total += item;
            return total
        }, 0)

        const finalMoney = totalMoney.toFixed(2);
        // console.log(finalMoney);

        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
    }

})();
