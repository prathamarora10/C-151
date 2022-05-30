AFRAME.registerComponent('rotate-car',{
    schema : {
        rotateY : { type : "number", default : 1},
    },
    tick : function(){
        this.data.rotateY += 0.1
        var rotate = this.el.getAttribute("rotation")
        rotate.y = this.data.rotateY
        this.el.setAttribute("rotation", { y : rotate.y})
    }
});