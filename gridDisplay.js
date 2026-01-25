var gridDisplays = document.getElementsByTagName("displayGrid");

for (let i = 0; i < gridDisplays.length; i++)
{
    if (gridDisplays[i].dataset.maxwidth != null && gridDisplays[i].dataset.maxwidth != null)
    {
        gridDisplays[i].style.maxHeight = gridDisplays[i].dataset.maxheight;
        gridDisplays[i].style.maxWidth = gridDisplays[i].dataset.maxwidth;
    }
    else
    {
        gridDisplays[i].style.maxHeight = "100%";
        gridDisplays[i].style.maxWidth = "100%";
    }

    for (let e = 0; e < gridDisplays[i].children.length; e++)
    {
        let child = gridDisplays[i].children[e];
        child.style.maxHeight = gridDisplays[i].dataset.maxheight;
        if (child.dataset.background != null)
        {
            console.log(child.dataset.background);
            child.style.backgroundImage = `url("${child.dataset.background}")`;
            child.style.backgroundSize = "cover";
            child.style.backgroundPosition = "center";
            child.style.backgroundRepeat = "no-repeat";
        }
    }
}

console.log("displayGrids fixed");