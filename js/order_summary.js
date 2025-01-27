const cartContainer = document.getElementById("cart-container")
const userDetails = document.getElementById("user-details")
const cartItems = JSON.parse(localStorage.getItem("cart"))
const user = JSON.parse(localStorage.getItem("user"))
const removeItemContainer = document.querySelector(".remove-item-container")

function loadCartData(){
userDetails.innerHTML = `${user.name}-${user.email}-${user.phone_number}-${user.address}`;
const cartHTML = cartItems.map((item) => {
    return `
      <tr>
    <td class=" py-4 md:w-[384px]">
    <div class="flex items-center gap-4">
    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-8">
    <img class="h-80 w-80 max-h-full dark:hidden" src="${item.image}" alt="imac ipage" />
    <img class="hidden h-80 w-80 max-h-full dark:block" src="${item.image}" alt="imac image" />
    </a>
    <a href="#" class="hover:underline w-80">${item.title}</a>
    </div>
    </td>
    <td class="p-4 text-base font-normal text-gray-900 dark:text-white"> <button class="curosr-pointer" onclick="removeItemFromCart(${item.id})"
    >Remove</button></td>
    <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$${item.price}</td>
    </tr>
    `;
    });

// console.log(cartHTML)
 const cartHTMLStrings = cartHTML.join("")
 cartContainer.innerHTML = cartHTMLStrings;
}
loadCartData();
const removeItemFromCart = (itemId) => {
    // console.log(itemid);
    const remainingCartItem = cartItems.filter((item) => item.id !== itemId);
    // console.log(remainingCartItem)
    const cartHTML = remainingCartItem.map((item) => {
    return `
    <tr>
    <td class=" py-4 md:w-[384px]">
    <div class="flex items-center gap-4">
    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-8">
    <img class="h-80 w-80 max-h-full dark:hidden" src="${item.image}" alt="imac ipage" />
    <img class="hidden h-80 w-80 max-h-full dark:block" src="${item.image}" alt="imac image" />
    </a>
    <a href="#" class="hover:underline w-80">${item.title}</a>
    </div>
    </td>
    <td class="p-4 text-base font-normal text-gray-900 dark:text-white"> <button class="curosr-pointer" onclick="removeItemFromCart($(item.id))"
    >Remove</button></td>
    <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$${item.price}</td>
    </tr>
    `;
    });
    const cartHTMLStrings = cartHTML.join("");
    cartContainer.innerHTML = cartHTMLStrings;
    console.log(remainingCartItem);
    localStorage.setItem("cart", JSON.stringify(remainingCartItem));
    }