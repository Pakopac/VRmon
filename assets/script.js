window.onload = function() {
    
    let scene = document.querySelector("a-scene");
    let camera = document.querySelector("#camera");
    let milotic = document.querySelector("#milotic-entity");
    let milotic2 = document.querySelector("#milotic-entity2");
    let pokeball = document.querySelector("#pokeball-entity");
    let mew = document.querySelector("#mew-entity");
    let rayquaza = document.querySelector("#rayquaza-entity");
    let textJoel = document.querySelector("#text-joel");
    let rig = document.querySelector("#rig");
    let lightning = document.querySelector("#lightning-entity");

    let star1 = document.querySelector("#star-entity1");
    let star2 = document.querySelector("#star-entity2");
    let star3 = document.querySelector("#star-entity3");

    let captureComplete = false;
    let battleComplete = false;

    AFRAME.registerComponent("listener", {
        tick: function() {
            var cameraEl = document.querySelector('#camera');

            scene.addEventListener('enter-vr', function () {
                cameraEl.object3D.position.set(0, 0.5, 45);
            });

            var worldPos = new THREE.Vector3();
            worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
            console.log(worldPos.z);
            if (worldPos.z >= 25 && worldPos.z <= 34 && captureComplete === false) {
                cameraEl.object3D.position.set(0, 0.5, 41);
                rig.setAttribute("movement-controls", "enabled: false")
            }

                    if (worldPos.z >= 34 && worldPos.z <= 36 && captureComplete === false) {
                        pokeball.setAttribute("animation", "property: position; to: 0 0.5 33; dur: 1000;");
                        setTimeout(() => {
                            if (milotic.parentNode !== null) {
                                pokeball.setAttribute("rotation", "0 180 0");
                                pokeball.setAttribute("animation__rotate", "property: rotation; to: 0 520 0; dur: 1000; loop: 3;");
                                pokeball.addEventListener('animationcomplete', evt => {
                                    if (evt.detail.name == "animation__rotate") {

                                        star1.setAttribute("animation", "property: position; to: -0.2 0.7 33; dur: 300");
                                        star1.setAttribute("visible", true);
                                        star2.setAttribute("animation", "property: position; to: 0 0.7 33; dur: 300");
                                        star2.setAttribute("visible", true);
                                        star3.setAttribute("animation", "property: position; to: 0.2 0.7 33; dur: 300");
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


            if (worldPos.z <= -10 && battleComplete === false) {
                rig.setAttribute("movement-controls", "enabled: false");
                setTimeout(()=>{
                    milotic2.setAttribute("animation", "property: scale; to: 0.05 0.05 0.05; dur: 1000;");
                    setTimeout(()=>{
                        lightning.setAttribute("animation", "property: position; to: -25 0 -16; dur: 2000");
                        lightning.setAttribute("visible", true);
                        setTimeout(() =>{
                          mew.setAttribute("visible", false);
                          setTimeout(() =>{
                              milotic2.setAttribute("visible", false);
                              rig.setAttribute("movement-controls", "enabled: true");
                          }, 1000)
                        }, 6000)
                    }, 2000);
                }, 1000);
                return mew.setAttribute("animation", "property: scale; to: 0.004 0.004 0.004; dur: 1000;");
            }


            if (worldPos.z <= -35) {

            }

            if(this.el.getAttribute('position').z == -38){
               console.log('okkkkkkkkkkkkkkkkkkkk')
                setTimeout(() => {
                    console.log("tddffd")
                }, 1000)
            }
        }
    });
};
