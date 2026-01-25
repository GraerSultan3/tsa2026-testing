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

var xml = new XMLHttpRequest();
var data = {
    "rType": "fillMe",
    "dType": "test",
    "index": 0
};

var xmlData = toXML(data);


xml.open("POST", "test.php", true);
xml.setRequestHeader("Content-type", "application.xml");
xml.send(data);

xml.onreadystatechange = function() {
    document.querySelector("#fillMe").innerHTML = this.responseText;
}

function toXML(data)
{
    var xmlData = '<?xml version="1.0" encoding="UTF-8"?><body>'

    for (let [key, value] of Object.entries(data))
    {
        xmlData += `<${key}>${value}</${key}>`;
    }

    xmlData += "</body>";
    return xmlData;

}
