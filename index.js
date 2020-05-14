var dson = require('dson.js')
var utils = require('lisa.utils')

function Cupid (){

}

function Grandma (){
    var _name = null
    this.name = (name)=>{
        if(name != undefined){
            _name = name
        }
        return _name
    }
}


function Story(){
    var _storys = {}

    this.load = (story)=>{
        if(story.name){
            _storys.name = story
        }
    }
}


function DestinyBook(){
    var _this = this
    var _gms = {}
    this.story = new Story()
    this.cupid = new Cupid()
    this.grandma = (name)=>{
        if(name){
            if(_gms[name]){
            return _gms[name]
            }
            _gms[name] = new Grandma()
            _gms[name].name(name)
            return _gms[name]
        }
        return new Grandma()
    }
}


module.exports = (info)=>{
    return new DestinyBook()
}
