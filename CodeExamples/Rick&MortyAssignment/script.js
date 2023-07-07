const getInfo = async url => {
    let response = await fetch(url);
    response = await response.json();
    let {results} = response;
    results = results.filter(character => character.status === 'Alive');
    const characters = results.map(character => ({name: character.name, image: character.image, location: character.location.name, gender: character.gender}))
    renderCharacters(characters);
}

const renderCharacters = (characters) => {
    charNum = characters.length > 50? 50: characters.length;
    const charactersList = document.getElementById("characterList");
    
    for(let i = 0; i < charNum; i++){
        let listItem = document.createElement("li");
        //listItem.classList.add("container");
        listItem.innerHTML = ' <div class = "container"><div style= "margin-right: 30px;"><b>Name:</b> ' + characters[i].name + '<br><b>Location:</b> ' + characters[i].location + '<br><b>Gender:</b> ' + characters[i].gender + '<br></div><img src = ' + characters[i].image + ' /></div> <hr>';
        charactersList.appendChild(listItem);
    }

}

//name, image, location, species, and gender.

getInfo("https://rickandmortyapi.com/api/character");
