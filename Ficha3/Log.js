var log1 = {
    info: function(info){
        console.log('Info: ' + info);
    },
    warning: function(warning) {
        console.log('Warning: ' + warning);
    },
    error: function (error){
        console.log('Error: ' + error);
    },
    update: function(update){
        
    } 


};
var log2 = {
    info: function(info){
        console.log('Info: ' + log1.warning("Hello"));
    },
    print: function(print){
        return(log2.info);
    },
    update: function(update){
        "help"
    } 


};
module.exports.log1 = log1;

module.exports.log2 = log2;
module.exports = function(msg){
    console.log(msg);
};