var scooter={
    name:"Dio",
    maxSpeed:"120 Km/hr",
    color:"Blue",
    scooterOwnerfirstName:"Pooja",
    scooterOwnerLastName:"Poudel",
    

    detail:function(){
       return this.name+" "+this.maxSpeed+ " "+this.color
    },

    fullName:function(){
        return this.scooterOwnerfirstName +" "+this.scooterOwnerLastName
    }
}
console.log(scooter.fullName());
console.log(scooter.detail());
