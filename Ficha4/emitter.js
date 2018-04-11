var Emitter = function Emitter(){
    this.events = {};    
}

Emitter.prototype.on = function(type, listener){    
    if(this.events[type] == undefined){
        this.events[type] = [];
    }        
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    this.type.forEach(function(type){
        return(listener)
    });
}
module.exports = Emitter;