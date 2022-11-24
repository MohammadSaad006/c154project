AFRAME.registerComponent("terasure",{
    init:function(){
        for(var i =1; i<=10; i++){
            var id=`hurdle${i}`

            var posX= Math.floor(Math.random() *350+ (-200))
            var posY= Math.floor(Math.random() *22 +(21))
            var posZ= Math.floor(Math.random() * 220 +(-200))

            var position= {x: posX, y: posY, z: posZ}

            this.terasure(id, position)
        }

    },
    terasure: (id ,position)=>{
        var terrainEl=document.querySelector("#terrain")
        var terasureEl=document.createElement("a-entity")

        terasureEl.setAttribute("gltf-model","./assets/terasure/scene.gltf")
        terasureEl.setAttribute("id",id)
        terasureEl.setAttribute("position",position)
        terasureEl.setAttribute("scale",{x:0.05,y:0.05,z:0.05})
        
        terrainEl.appendChild(terasureEl)
    }
})