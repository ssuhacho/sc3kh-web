//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
  //once window loaded
  filterItem.onclick = (selectedItem) => {
    //when user clicked on filterItem div
    if (selectedItem.target.classList.contains("item")) {
      //remove the active class which is in the first element.
      filterItem.querySelector(".active").classList.remove("active");
      //add that active class on the user selected element or item.
      selectedItem.target.classList.add("active");
      //getting data-name value of the user selected item and storing in a filtername variable.
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        //getting image data-name value
        let filterImages = image.getAttribute("data-name");
        //if user selected item data-name value is equal to image data-name value
        //or user selected item data-name value is equal to "all"
        if (filterImages == filterName || filterName == "all") {
          image.classList.add("show");
          image.classList.remove("hide");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
  for (let index = 0; index < filterImg.length; index++) {
      //adding onclick attribute in all available images
    filterImg[index].setAttribute("onclick", "preview(this)");
  }
}

//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  categoryName = previewBox.querySelector(".title p"),
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");

//fullscreen previous image function
function preview(element){
    //once user click on any image then remove the scrollbar of the body
    //so user can't scroll up or down
    document.querySelector("body").style.overflow = "hidden";

    //getting user clicked img src link and store in a variable
    let selectedPrevImg = element.querySelector("img").src;
    //getting user clicked imgdata-name value and store it in a variable
    let selectedImgCategory = element.getAttribute ("data-name");

    //passing the img data-name value to category name variable
    categoryName.textContent = selectedImgCategory;
    //passing the user clicked img src in the preview img src
    previewImg.src = selectedPrevImg;

    //show the preview box, shadow
    previewBox.classList.add("show");
    shadow.classList.add("show");

    closeIcon.onclick = ()=>{   //if user click on the close icon
        previewBox.classList.remove("show");    //hide the preview box
        shadow.classList.remove("show");    //hide the grey background
        document.querySelector("body").style.overflow = "scroll";   //show the scroll bar of body
    }
}