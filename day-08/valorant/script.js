const displayDiv = document.getElementById("display-div");
fetch("https://valorant-api.com/v1/agents").then((response) => {
  response.json().then((character) => {
    let abt = `
        <div class="flex items-center justify-center p-1 bg-purple-600 rounded-xl">
            <img src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png" alt="" class="w-4">
            <p>Wingman</p>
        </div>`;

    console.log(character.data[0].abilities);
    character.data.forEach((agents) => {
        let abilities = "";
        agents.abilities.forEach((ability) => {
        abilities += `<div class="flex items-center justify-center p-1 bg-purple-600 rounded-xl">
                <img src="${ability.displayIcon}" alt="" class="w-4">
                <p>${ability.displayName}</p>
            </div>`;
      });
      if (agents.isPlayableCharacter) {
        displayDiv.innerHTML += `
            <div class="bg-blue-100">
            <div class="w-full bg-[url(${agents.background})] bg-cover">
              <img
                src="${agents.displayIcon}"
                alt=""
                class="w-full"
              />
            </div>
            <div class="w-full ">
                <h1 class="text-2xl font-bold">${agents.displayName}</h1>
    
                <p class="">${agents.description}</p>
            </div>
                
            <div class="w-full grid grid-cols-2 gap-4 mt-2 ">
                ${abilities}
            </div>
            <div>
               <audio controls class="">
                <source src="${agents.voiceLine.mediaList[0].wave}" type="audio/wav">
               </audio> 
            </div>
          </div>
            `;
      }

      // console.log(agents.displayName)
    });
  });
});
