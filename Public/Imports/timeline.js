const timelines = document.getElementsByClassName("timeline");

function updateEventCircles(e=null)
{
    if (e !== null)
    {
        e.preventDefault();
    }

    for (let i = 0; i < timelines.length; i++)
    {
        for (let e = 0; e < timelines[i].children.length; e++)
        {
            timelines[i].children[e].style.setProperty("--height", window.getComputedStyle(timelines[i].children[e]).height);
        }
    }
}

window.addEventListener("resize", updateEventCircles);

updateEventCircles();