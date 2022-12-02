let prawo = [
    {
        "pracownicy":[
            {"firstName": "Krystian", "lastName": "Dziopa"}, 
            {"firstName": "Anna", "lastName": "Szapiel"},
            {"firstName": "Piotr", "lastName": "Żmuda"}
        ]
    }
]
prawo.forEach(function(item,index){
    this.item = item + '<br>';
    // this.index = index;
    console.log(item)

})