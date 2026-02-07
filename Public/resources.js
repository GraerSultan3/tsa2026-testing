const nav = document.getElementsByTagName("nav")[0];
const title = document.getElementById("title");
const search = document.getElementById("search");
const resources = document.getElementById("resources");
const filters = document.getElementsByClassName("filter");
const filterApply = document.getElementById("applyButton");
const filterOptions = ["isHomeless", "isReligious", "isDiscriminatory"];
const openFilters = document.getElementById("openClose");
var activeFilters = [];

nav.style.gridTemplateColumns = `repeat(${nav.children.length - 1}, 1fr)`;

if (nav.children.length % 2 == 1)
{
    title.style.gridColumn = `${Math.floor((nav.children.length - 1) / 2)} / ${Math.floor((nav.children.length - 1) / 2 + 2)}`;
}
else
{
    title.style.gridColumn = `${Math.round(nav.children.length / 2)}`;
}

search.addEventListener("change", function()
{
    let result = search.value.split(" ");

    while (result.indexOf("") != -1)
    {
        result.splice(result.indexOf(""), 1);
    }

    let wordCount;
    for (let i = 0; i < resources.children.length; i++)
    {
        wordCount = 0;
        for (let g = 0; g < resources.children[i].children.length; g++)
        {
            for (let e = 0; e < result.length; e++)
            {
                let startingIndex = 0;
                if (resources.children[i].children[g].innerHTML.toLowerCase().indexOf(result[e].toLowerCase()) != -1 && result[e] != "")
                {
                    resources.children[i].children[g].innerHTML = resources.children[i].children[g].innerHTML.substring(0, resources.children[i].children[g].innerHTML.toLowerCase().indexOf(result[e].toLowerCase())) + "<mark>" + resources.children[i].children[g].innerHTML.substring(resources.children[i].children[g].innerHTML.toLowerCase().indexOf(result[e].toLowerCase()), resources.children[i].children[g].innerHTML.toLowerCase().indexOf(result[e].toLowerCase()) + result[e].length) + "</mark>" + resources.children[i].children[g].innerHTML.substring(resources.children[i].children[g].innerHTML.toLowerCase().indexOf(result[e].toLowerCase()) + result[e].length);
                    wordCount++;
                }
            }
            
            if (wordCount == 0 && result.length != 0)
            {
                resources.children[i].classList.add("hidden");
            }
            else if (result.length != 0)
            {
                resources.children[i].classList.remove("hidden");
            }
            else
            {
                resources.children[i].classList.remove("hidden");
                while (resources.children[i].children[g].getElementsByTagName("mark").length != 0)
                {
                    resources.children[i].children[g].innerHTML = resources.children[i].children[g].innerHTML.substring(0, resources.children[i].children[g].innerHTML.indexOf("<mark>")) + resources.children[i].children[g].innerHTML.substring(resources.children[i].children[g].innerHTML.indexOf("<mark>") + "<mark>".length, resources.children[i].children[g].innerHTML.indexOf("</mark>")) + resources.children[i].children[g].innerHTML.substring(resources.children[i].children[g].innerHTML.indexOf("</mark>") + "</mark>".length, resources.children[i].children[g].innerHTML.length);
                }
            }
        }
    }
});



function getPrograms()
{
    console.log("requesting from server :)");
    var xml = new XMLHttpRequest();

    var data = {
        "rType": "getResources",
    }

    xml.open("POST", "../App/main.php", true);
    xml.setRequestHeader("Content-type", "application/json");
    xml.send(JSON.stringify(data));

    xml.onload = function()
    {
        var incomingData = this.responseText;

        console.log(incomingData);
        incomingData = JSON.parse(incomingData.substring(1));
        
        let currChild;
        let childChild;
        let attributes;
        
        for (let i = 0; i < incomingData.length; i++)
        {
            currChild = document.createElement("div");
            childChild = document.createElement("img");
            childChild.src = "https://1150webmasters2026.com" + incomingData[i].imageAddress;
            childChild.width = 100;
            childChild.height = 100;
            currChild.appendChild(childChild);
    
            childChild = document.createElement("h2");
            childChild.innerHTML = incomingData[i].shortDescription;
            currChild.appendChild(childChild);
            
            childChild = document.createElement("p");
            childChild.innerHTML = incomingData[i].longDescription;
            currChild.appendChild(childChild);

            attributes = JSON.parse(incomingData[i].activeFilters);
            attributes = JSON.parse(attributes);
            console.log(attributes);
            console.log(typeof attributes);

            for (let key in attributes)
            {
                currChild.setAttribute(key, attributes[key]);
                console.log(`${i}: ${key}, ${attributes[key]}`);
            }
    
            resources.appendChild(currChild);
        }
    }
}

filterApply.addEventListener("click", function(e)
{
    e.preventDefault();
    
    for (let filter of filters)
    {
        if (filter.checked)
        {
            if (activeFilters.indexOf(filter.name) == -1)
            {
                activeFilters.push(filter.name);
            }
        }
        else if (activeFilters.indexOf(filter.name) != -1 && ! filter.checked)
        {
            activeFilters.splice(activeFilters.indexOf(filter.name), 1);
        }
    }

    for (let i = 0; i < resources.children.length; i++)
    {
        let isAllowed = true;
        if (activeFilters.length == 0)
        {
            if (resources.children[i].classList.contains("hidden"))
            {
                resources.children[i].classList.remove("hidden");
            }
        }
        else
        {
            for (let e = 0; e < activeFilters.length; e++)
            {
                if (resources.children[i].getAttribute(activeFilters[e]) == "true" && isAllowed)
                {
                    if (resources.children[i].classList.contains("hidden"))
                    {
                        resources.children[i].classList.remove("hidden");
                    }
                }
                else
                {
                    if (!resources.children[i].classList.contains("hidden"))
                    {
                        resources.children[i].classList.add("hidden");
                    }
                    isAllowed = false;
                }
            }
        }
    }
});

openFilters.addEventListener("click", function(e)
{
    e.preventDefault();

    let filterMenu = document.getElementById("filters");

    for (let i = 0; i < filterMenu.children.length - 1; i++)
    {
        filterMenu.children[i].classList.toggle("hidden");
    }

    filterMenu.children[filterMenu.children.length - 1].classList.toggle("closed");
    filterMenu.classList.toggle("closed");

    if (filterMenu.children[filterMenu.children.length - 1].classList.contains("closed"))
    {
        filterMenu.children[filterMenu.children.length - 1].innerHTML = "Open";
    }
    else
    {
        filterMenu.children[filterMenu.children.length - 1].innerHTML = "Close";
    }
});

getPrograms();
