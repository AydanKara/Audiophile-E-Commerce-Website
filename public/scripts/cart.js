const btnCart = document.querySelector("#cart");
const modalCart = document.getElementsByClassName("cart-modal");
const modalCartWrapper = document.getElementsByClassName("cart-modal-wrapper");

btnCart.addEventListener("click", function () {
  modalCart[0].style.visibility = "visible";
  modalCart[0].style.opacity = "1";
});

/* click outside start */

document.addEventListener("click", function (e) {
  if (
    !e.composedPath().includes(modalCartWrapper[0]) &&
    !e.composedPath().includes(btnCart)
  ) {
    modalCart[0].style.visibility = "hidden";
    modalCart[0].style.opacity = "0";
  }
});

/* click outside end */
