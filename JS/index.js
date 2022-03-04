// Dropdown function
function show_list() {
    var lan = document.getElementById("lan_id");
        if (lan.style.display == "block") {
            lan.style.display = "none";
        } else {
            lan.style.display = "block";
        }
}
window.onclick = function (event) {
        if (!event.target.matches('.dropdown_button')) {
            document.getElementById('lan_id')
                .style.display = "none";
        }
}
//button (more less / more)====>hide/appear 
function show_more() {
    var showMore = document.getElementById("more");
    var buttonText =
                document.getElementById("btn_text");
        if (showMore.style.display == "flex") {
            showMore.style.display = "none";
            buttonText.innerHTML = "Show More";
        } else {
            showMore.style.display = "flex";
            buttonText.innerHTML = "Show Less";
        }
    }
window.onclick = function (event) {
        if (!event.target.matches('.showbtn')) {
            document.getElementById('more')
                .style.display = "none";
        }
}
