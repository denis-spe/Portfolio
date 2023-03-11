/* ==== Glory Be To God ===== */

document.addEventListener("DOMContentLoaded", function () {
    /* 
    Handling aside buttons 
    for opening and closing aside
    menu
    */
    // Initialize the openAsideId and closeAsideId
    let openBtnAsideId = document.getElementById("open-aside-id");
    let closeBtnAsideId = document.getElementById("close-aside-id");

    // Get the aside bar.
    const asideId = document.getElementById("aside-id");


    // Listen on clicking to open and close button.
    openBtnAsideId.addEventListener("click", () => {
        asideId.style.display = "block";
    })
    closeBtnAsideId.addEventListener("click", () => {
        asideId.style.display = "none"
    })

})

