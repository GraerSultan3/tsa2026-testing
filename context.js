const nav = document.getElementsByTagName("nav")[0];
const title = document.getElementById("title");

nav.style.gridTemplateColumns = `repeat(${nav.children.length - 1}, 1fr)`;

if (nav.children.length % 2 == 1)
{
    title.style.gridColumn = `${Math.floor((nav.children.length - 1) / 2)} / ${Math.floor((nav.children.length - 1) / 2 + 2)}`;
}
else
{
    title.style.gridColumn = `${Math.round(nav.children.length / 2)}`;
}

var form = document.querySelector("#signin");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);

    var xml = new XMLHttpRequest();
    var data = {
        "rType": "getUser",
        "dType": "user_accounts",
        "username": formData.get("username"),
        "password": formData.get("password")
    };


    xml.open("POST", "../App/test.php", true);
    xml.setRequestHeader("Content-type", "application/json");
    xml.send(data);

    xml.onreadystatechange = function() {
        document.querySelector("#fillMe").innerHTML = this.responseText;
    }
});



