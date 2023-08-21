const applyCoupon = document.getElementById("applyCoupon")
const couponCode = document.getElementById("couponCode")
const totalPrice = document.getElementById("totalPrice")
const discountAmount = document.getElementById("discountAmount")
const total = document.getElementById("total")
const makePurchase = document.getElementById("makePurchase")
const congoModal = document.getElementById("congoModal")
const goHome = document.getElementById("goHome")

const cartList = document.getElementById("cartList")
const products = document.querySelectorAll('.productItem')

products.forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.querySelector("h3").innerText;
    const price = parseFloat(item.querySelector("p").innerText.slice(0, -2))
    const listItem = document.createElement('li');
    listItem.innerText = title;
    cartList.append(listItem)

    const newTotal = parseFloat(totalPrice.innerText) + price;
    totalPrice.innerText = total.innerText= newTotal.toFixed(2);


    if (parseFloat(totalPrice.innerText) > 0) {
      makePurchase.removeAttribute('disabled')
    }

    if (parseFloat(totalPrice.innerText) >= 200) {
      applyCoupon.removeAttribute('disabled')
    }
  })
})

applyCoupon.addEventListener("click", () => {
  if (couponCode.value === "SELL200") {
    discountAmount.innerText = (parseFloat(totalPrice.innerText) * 0.2).toFixed(2);
    total.innerText = (parseFloat(totalPrice.innerText) - parseFloat(discountAmount.innerText)).toFixed(2);
  } else {
    discountAmount.innerText = "0.00";
    total.innerText = "0.00";
    alert("INVALID coupon")
  }
})

makePurchase.addEventListener("click", () => {
  congoModal.showModal();
})

goHome.addEventListener("click", () => {
  couponCode.value=""
  cartList.innerHTML=""
  totalPrice.innerText = "0.00"
  discountAmount.innerText = "0.00"
  total.innerText = "0.00"
  makePurchase.setAttribute('disabled', 'true')
  applyCoupon.setAttribute('disabled', 'true')
  console.log(makePurchase)

})