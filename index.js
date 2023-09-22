document.addEventListener("DOMContentLoaded", function () {
    const viewButton = document.getElementById("view-button");
    const hiddenItems = document.querySelectorAll(".item.hidden");

    viewButton.addEventListener("click", function () {
        hiddenItems.forEach(function (item) {
            item.classList.toggle("hidden");
        });

        if (viewButton.innerText === "View less") {
            viewButton.innerText = "View more";
        } else {
            viewButton.innerText = "View less";
        }
    });
});
