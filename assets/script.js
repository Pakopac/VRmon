window.onload= function (){
    let camera = document.querySelector('a-camera');
    let mew = document.querySelector("#mew-entity");
    console.log(mew);

    AFRAME.registerComponent('listener', {
        tick: function () {
            if(this.el.getAttribute('position').z <= -12.7){
                return mew.setAttribute("animation", "property: scale; to: 0.004 0.004 0.004; dur: 1000;");
                console.log("gerfghbn")
               
            }
        }
    });


    
};

