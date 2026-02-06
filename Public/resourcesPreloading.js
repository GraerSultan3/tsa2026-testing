

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
        incomingData = JSON.parse(incomingData.substring(1));
        
        let currChild;
        let childChild;
        
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

            console.log(incomingData[i].activeFilters);

            for (let  key in Object.keys(incomingData[i].activeFilters))
            {
                currChild.setAttribute(key, incomingData[i].activeFilters[key];
                console.log(`${i}: ${key}, ${incomingData[i].activeFilters[key]}`);
            }
    
            resources.appendChild(currChild);
        }
    }
}

getPrograms();
