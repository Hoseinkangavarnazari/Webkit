//making table for every json file with this format in pure js and bootstrap 
//this is an idea just to generate html code without view component and without jquery 
//wroted by amirhosein nazari 

var json = {
    "show_name": "test_show",
    "show_list": [
        {
            "artist": "ebi hamedi",
            "music": "derakht",
            "album": "single"
        },
        {
            "artist": "daruish",
            "music": "shaghayegh",
            "album": "single"
        },
        {
            "artist": "babak jahanbakhsh",
            "music": "barf",
            "album": "barf"
        },
        {
            "artist": "googoosh",
            "music": "2panjere",
            "album": "yeki bod yeki nabod"
        },
        {
            "artist": "chavoshi",
            "music": "cheshme virosi",
            "album": "single"
        }
    ]
}


function create_table() {
    // require('./../../database/music.bank.json'); 

    var container = document.querySelector("div#container");
    var table = document.createElement("table");

    // ...................................................
    // var att = document.createAttribute("class");        
    // att.value = "table table-condensed";  
    // table.setAttributeNode(att);
    // ...................three line above do bottom line..........................
    table.setAttribute("class", "table table-condensed");

    table.setAttribute("id", "showlist_table");
    container.appendChild(table);

    //this initialize the table
    init_table();
}

function init_table() {

    try {
        //try to get property of object in array and make tr of tables
        var container = document.querySelector("#showlist_table");
        var thead = document.createElement("thead");
        container.appendChild(thead);
        container = document.querySelector("#showlist_table thead");
        var tr = document.createElement("tr");
        container.appendChild(tr);
        container = document.querySelector("#showlist_table thead tr");

        if (!json) {
            throw "your json file is empty";
        } else if (!json.show_list.length) {
            throw "there is no show in show list";
        }

        for (var prop in json.show_list[0]) {
            var th = document.createElement("th");
            th.innerHTML = prop;
            container.appendChild(th);
        };
        // we create thead section until this part 

        //creating tbody part
        container = document.querySelector("#showlist_table");
        var tbody = document.createElement("tbody");
        container.appendChild(tbody);
        container = document.querySelector("#showlist_table tbody");


        //making needed code for every row and append that
        for (let i = 0; i < json.show_list.length; i++) {
            container = document.querySelector("#showlist_table tbody");
            var tr = document.createElement("tr");
            container.appendChild(tr);
            //if i use just query selector, it always pick first tr of tbody 
            container = document.querySelectorAll("#showlist_table tbody tr")[i];
            //     we are using prop and not directly the properties name because be able 
            //     to create table even when you changed the keys of json object 
            // so it can make table for every json file that is reasonable to show in a page
            for (var prop in json.show_list[i]) {
                var td = document.createElement("td");
                td.innerHTML = json.show_list[i][prop];
                container.appendChild(td);
            }
        }
    } catch (err) {
        console.log("Something went wrong : " + err);
    }
}


// will be added soon :) 
// function add_to_table() {
//     var container = document.querySelector("div#container");
// }

// function delete_from_table() {
// }

// function edit_table() {
// }