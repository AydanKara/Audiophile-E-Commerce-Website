document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".product-wrapper");
  
    cartItems.forEach(function (item, index) {
      
      if (index % 2 !== 0) {
        
        const imageElement = item.querySelector(".col-1");
        const detailsElement = item.querySelector(".col-2");
        const productInfo = item.querySelector(".product-info");
  
        item.insertBefore(detailsElement, imageElement);
        imageElement.style.justifyContent = "end";
        productInfo.style.paddingLeft = "0";
        productInfo.style.maxWidth = "44.3rem";
      }
    });
  });
  