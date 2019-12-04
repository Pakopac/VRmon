window.onload = function() {
    
    let scene = document.querySelector("a-scene");
    let camera = document.querySelector("#camera");
    let milotic = document.querySelector("#milotic-entity");
    let milotic2 = document.querySelector("#milotic-entity2");
    let pokeball = document.querySelector("#pokeball-entity");
    let mew = document.querySelector("#mew-entity");
    let textJoel = document.querySelector("#text-joel");
    let rig = document.querySelector("#rig");
    let lightning = document.querySelector("#lightning-entity");
    let rayquaza = document.querySelector('#rayquaza');

    let star1 = document.querySelector("#star-entity1");
    let star2 = document.querySelector("#star-entity2");
    let star3 = document.querySelector("#star-entity3");

    let captureComplete = false;
    let battleComplete = false;
    let isEnterPokecenter = false

    AFRAME.registerComponent("listener", {
        tick: function() {
            var cameraEl = document.querySelector('#camera');

            scene.addEventListener('enter-vr', function () {
                cameraEl.setAttribute("position", "0 0 45")
            });

            var worldPos = new THREE.Vector3();
            worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
            console.log(worldPos.x);
            if (worldPos.z >= 25 && worldPos.z <= 34 && captureComplete === false) {
                cameraEl.object3D.position.set(0, 0, 41);
                rig.setAttribute("movement-controls", "enabled: false")
            }

                    if (worldPos.z >= 35 && worldPos.z <= 37 && captureComplete === false) {
                        pokeball.setAttribute("visible", true)
                        pokeball.setAttribute("animation", "property: position; to: 0 0.5 32; dur: 1000;");
                        setTimeout(() => {
                            if (milotic.parentNode !== null) {
                                pokeball.setAttribute("rotation", "0 180 0");
                                pokeball.setAttribute("animation__rotate", "property: rotation; to: 0 520 0; dur: 1000; loop: 3;");
                                pokeball.addEventListener('animationcomplete', evt => {
                                    if (evt.detail.name == "animation__rotate") {

                                        star1.setAttribute("animation", "property: position; to: -0.2 0.7 32; dur: 300");
                                        star1.setAttribute("visible", true);
                                        star2.setAttribute("animation", "property: position; to: 0 0.7 32; dur: 300");
                                        star2.setAttribute("visible", true);
                                        star3.setAttribute("animation", "property: position; to: 0.2 0.7 32; dur: 300");
                                        star3.setAttribute("visible", true);

                                        let pokeball_song = new Audio('./assets/pokeball_sound.mp3');
                                        pokeball_song.play();

                                        setTimeout(() => {
                                            pokeball.setAttribute("visible", false);
                                            star1.setAttribute("visible", false);
                                            star2.setAttribute("visible", false);
                                            star3.setAttribute("visible", false);

                                            rig.setAttribute("movement-controls", "enabled: true");
                                            captureComplete = true
                                        }, 1000)
                                    }
                                });
                                return milotic.parentNode.removeChild(milotic)
                            }
                        }, 1100)
                    }


            if (worldPos.z <= -10 && battleComplete === false && worldPos.x >= -4 && worldPos.x <= 4) {
                  let battle_music = new Audio('https://cdn.glitch.com/560eb6a6-f7b4-468d-a5c4-c0248ae18df3%2Fbattle.mp3?v=1575467060919');
                        battle_music.play();
                rig.setAttribute("movement-controls", "enabled: false");
                battleComplete = true
                setTimeout(()=>{
                    milotic2.setAttribute("animation", "property: scale; to: 1 1 1; dur: 1000;");
                    setTimeout(()=>{
                        lightning.setAttribute("animation", "property: position; to: 0 5 -17; dur: 2000");
                        lightning.setAttribute("visible", true);
                         let lightning_audio = new Audio('./assets/lightning.mp3');
                        lightning_audio.play();
                        setTimeout(() =>{
                          mew.setAttribute("animation__rotationMackogneur", "property: rotation; to: -90 0 0; dur: 2000");
                           mew.setAttribute("animation__positionMackogneur", "property: position; to: 0 0 -18; dur: 2000");
                          setTimeout(() =>{
                               mew.setAttribute("visible", false);
                              milotic2.setAttribute("visible", false);
                              rig.setAttribute("movement-controls", "enabled: true");
                              lightning.setAttribute("visible", false);
                              battle_music.pause()
                          }, 2000)
                        }, 6000)
                    }, 2000);
                }, 1000);
                return mew.setAttribute("animation", "property: scale; to: 10 10 10; dur: 1000;");
            }
            if (worldPos.z <= -35 && isEnterPokecenter === false){
               rig.setAttribute("movement-controls", "enabled: false");
              isEnterPokecenter = true;
                let healing_pokemon_sound = new Audio('https://cdn.glitch.com/560eb6a6-f7b4-468d-a5c4-c0248ae18df3%2Fhealing-pokemon-sound.mp3?v=1575455116900');
                healing_pokemon_sound.play();
              rayquaza.setAttribute("animation", "property: position; to: 0 5 -33; dur: 6000"); 
              setTimeout(() =>{
               let rayquaza_sound = new Audio('https://cdn.glitch.com/560eb6a6-f7b4-468d-a5c4-c0248ae18df3%2Frayquaza.mp3?v=1575459611043');
                rayquaza_sound.play();
              },4000)
              setTimeout(() => {
                scene.setAttribute("visible", false)
              },6000)
            }

        }
    });
};
