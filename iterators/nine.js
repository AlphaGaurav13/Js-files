const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "Ds course",
        price : 12999
    },
]


const PriceToPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0)

console.log(PriceToPay)