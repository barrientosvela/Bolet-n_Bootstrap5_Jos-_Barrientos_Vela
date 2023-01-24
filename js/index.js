
    var btnMenu = $("#btn-menu");
    var slidebar = document.getElementById("slidevar");

    btnMenu.on("click", () => {
        if (slidebar.style.getPropertyValue("display") === "none") {
            slidebar.style.setProperty("display", "block")
        } else {
            slidebar.style.setProperty("display", "none")
        }
    });