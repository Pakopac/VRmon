window.onload = function() {
    
    let scene = document.querySelector("a-scene");
    let camera = document.querySelector("#camera");
    let milotic = document.querySelector("#milotic-entity");
    let pokeball = document.querySelector("#pokeball-entity");
    let mew = document.querySelector("#mew-entity")
    let rayquaza = document.querySelector("#rayquaza-entity")
    let textJoel = document.querySelector("#text-joel")

    AFRAME.registerComponent("listener", {
        tick: function() {
            var cameraEl = document.querySelector('#camera');
            var worldPos = new THREE.Vector3();
            worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
            console.log(worldPos.z);

            if (worldPos.z <= 35) {
                scene.onclick = () => {
                    console.log("dfg")
                    pokeball.setAttribute("animation", "property: position; to: 0 0.5 33; dur: 1000;")
                    setTimeout(() => {
                        if(milotic.parentNode !== null){
                            pokeball.setAttribute("rotation", "0 180 0");
                            pokeball.setAttribute("animation__rotate", "property: rotation; to: 0 520 0; dur: 1000; loop: 3;");
                            pokeball.addEventListener('animationcomplete', evt => {
                                if(evt.detail.name == "animation__rotate"){
                                    setTimeout(() => {
                                        pokeball.setAttribute("visible", false);
                                    }, 1000)
                                }
                            });
                            return milotic.parentNode.removeChild(milotic)
                        }
                    }, 1100)
                };
            }

            if (worldPos.z <= -10) {
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
