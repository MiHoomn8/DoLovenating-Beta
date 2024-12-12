document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const boxes = document.querySelectorAll(".box");

    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        
        boxes.forEach(box => {
            const itemName = box.getAttribute("data-name").toLowerCase();
            if (itemName.includes(searchTerm)) {
                box.style.visibility = "visible";
            } else {
                box.style.visibility = "hidden";
            }
        });
    });
});
