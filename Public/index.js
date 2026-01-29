const nav = document.getElementsByTagName("nav")[0];
const title = document.getElementById("title");
const mainLayout = document.getElementById("mainLayout");
var height1 = Number.parseFloat(window.getComputedStyle(mainLayout.children[1]).height.substring(0, window.getComputedStyle(mainLayout.children[1]).height.length - 2));
var height0 = Number.parseFloat(window.getComputedStyle(mainLayout.children[0]).height.substring(0, window.getComputedStyle(mainLayout.children[0]).height.length - 2));
var endHeight = Math.min(height0, height1);
var madeElement = document.getElementsByClassName("overflowGrid")[0];
var biggerElement = (height0 > height1) ? 0 : 1;

nav.style.gridTemplateColumns = `repeat(${nav.children.length - 1}, 1fr)`;

if (nav.children.length % 2 == 1)
{
    title.style.gridColumn = `${Math.floor((nav.children.length - 1) / 2)} / ${Math.floor((nav.children.length - 1) / 2 + 2)}`;
}
else
{
    title.style.gridColumn = `${Math.round(nav.children.length / 2)}`;
}

for (let i = 0; i < mainLayout.children[biggerElement].children.length; i++)
{
    let child = mainLayout.children[biggerElement].children[i];
    if (child.getBoundingClientRect().top + window.scrollY > endHeight + Number.parseFloat(window.getComputedStyle(document.body).height.substring(0, window.getComputedStyle(document.body).height - 2)) / 0.01)
    {
        child.offsetWidth = mainLayout.offsetWidth;
        madeElement.appendChild(child);
        console.log(i);
        i--;
    }
    console.log(child.getBoundingClientRect().top + " " + i);
}
