/*let resTag = document.getElementsByTagName('div');
for (const iterator of resTag) {
  iterator.style.backgroundColor = 'yellow'; 
}

let resId = document.getElementById('lastDiv');
resId.style.backgroundColor = 'red';
console.warn(resId.style.backgroundColor);

let resClass = document.getElementsByClassName('fDiv');
for (const iterator of resClass) {
  iterator.style.backgroundColor = 'blue'; 
}*/

//Написать онЛайн галерею Ресурсом должен выступать сайт Pixabay откуда через API брать фото

document.getElementById("send_search").onclick = function () {
    fetch("https://pixabay.com/api/?" +
        "key=23798924-17f42c690434b5dec74a9c318" +
        "&image_type=photo" +
        "&q=" + document.getElementById("text_search").value)
        .then(response => response.json())
        .then(data => data.hits)
        .then(hits => {fillTheField(hits)})
        .catch(err => console.log(err));
}


function fillTheField(hits) {
    document.getElementById("images").innerHTML = '';
    hits.forEach(hit => {
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = hit.previewURL;
        img.style.width = "160px";

        card.appendChild(img);

        document.getElementById("images").appendChild(card);
        console.log("card added")
    })
}