document.getElementById("icon_1").addEventListener("click", function (){
    let mainDiv= document.createElement("div");
        mainDiv.setAttribute("id", "menu")

    let cancel= document.createElement("i");
        cancel.setAttribute("class", "material-icons");
        cancel.setAttribute("id", "cancel");
        cancel.innerHTML="cancel";
        mainDiv.appendChild(cancel);

    let ul= document.createElement("ul");
        let createList=()=>{

            let l1=document.createElement("li");
                let home= document.createElement("a");
                    home.setAttribute("href", "#")
                    home.innerHTML= "Home";
                ul.appendChild(l1);
                l1.appendChild(home);

            let l2= document.createElement("li");
                let about= document.createElement("a");
                    about.setAttribute("href", "#")
                    about.innerHTML= "About";
                ul.appendChild(l2);
                l2.appendChild(about);

            let l3= document.createElement("li");
                let gallery= document.createElement("a");
                    gallery.setAttribute("href", "#")
                    gallery.innerHTML= "Gallery";
                ul.appendChild(l3);
                l3.appendChild(gallery);   

                let l4= document.createElement("li");
                let contact= document.createElement("a");
                    contact.setAttribute("href", "#")
                    contact.innerHTML= "Contact";
                ul.appendChild(l4);
                l4.appendChild(contact);
        };
        createList();
    document.body.appendChild(mainDiv);
    mainDiv.appendChild(ul);

    document.getElementById("cancel").addEventListener("click", function(){
        document.getElementById("menu").remove();
    }, false)

}, false)




