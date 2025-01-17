// console.log("Hello world im from jajabor")
/**
 * 1.  shop button identify
 * 2. click on shop button
 * 3. url -. shop.html
 */

const shopBtn1 = document.querySelector(".shop-btn-1");
// console.log(shopBtn1);
shopBtn1.addEventListener("click", function(){
    // console.log("This shop button is clicked");
    console.log(window.location.href)
    console.log("navigating to shop.html")
    window.location.href = "http://127.0.0.1:5500/shop.html";
    })


/**1. 3 Ta Slide Dhora -> Done
* 2. Baki 2ta Slide Bondho
*3. Two Button identify
* 4. Add Event to those Two Button
* 5. next button -> First Slide -> Display: none + 2nd Slide Display: block
*
*/
const firstSlide = document.getElementById("first-slide");
const secondSlide = document.querySelector("#second-slide");
const thirdSlide = document.getElementById("third-slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
// console.log(firstSlide);
// console.log(secondSlide);
// console.log(thirdSlide);
firstSlide.style.display = "flex";
secondSlide.style.display = "none";
thirdSlide.style.display = "none";
// console.log(prevBtn);
// console.log(nextBtn);
prevBtn.addEventListener("click", function () {
    // console.log("Previous Button is clicked");
    const isFirstSlideActive = getComputedStyle (firstSlide).display == "flex";
    const isSecondSlideActive = getComputedStyle (secondSlide).display == "flex";
    const isThirdSlideActive = getComputedStyle(thirdSlide).display == "flex";
    console.log(isFirstSlideActive, isSecondSlideActive, isThirdSlideActive);
    console.log(isFirstSlideActive);
    if (isFirstSlideActive) {
    firstSlide.style.display = "none";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "flex";
    } else if (isThirdSlideActive) {
    thirdSlide.style.display = "none";
    secondSlide.style.display = "flex";
    firstSlide.style.display = "none";
    } else if (isSecondSlideActive) {
    secondSlide.style.display = "none";
    firstSlide.style.display = "flex";
    thirdSlide.style.display = "none";
    }
 });
    nextBtn.addEventListener("click", function () {
    // console.log("Next Button is clicked")
    // console.log("firstSlide is getting out")
    // firstSlide.style.display = "none"
    // console.log("2nd slide is getting in")
    // secondSlide.style.display = "flex"

    if (getComputedStyle (firstSlide).display == "flex") {
        firstSlide.style.display = "none";
        thirdSlide.style.display = "none";
        secondSlide.style.display = "flex";
        } else if (getComputedStyle (secondSlide).display == "flex") {
        secondSlide.style.display = "none";
        firstSlide.style.display = "none";
        thirdSlide.style.display = "flex";
        } else if (getComputedStyle(thirdSlide).display == "flex") {
        secondSlide.style.display = "none";
        thirdSlide.style.display = "none";
        firstSlide.style.display = "flex";
        }
        });


        // console.log(getComputedStyle (secondSlide).display);
/**
*
* 3 Slide -> Flex -> 2nd Slide none
*
3 slide -> none
*
1 st slide -> flex
*
*/