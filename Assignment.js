//https://github.com/shahnoorRAhman/Assignment-3/blob/main/Assignment.js

// kilometerToMeter

function kilometerToMeter(n){
    var meter = n*1000
    return meter;
}
var result = kilometerToMeter(1);
console.log(result);

//budgetCalculator

    function budgetCalculator(totalWatchPrice,totalMobilePrice,totalLaptopPrice)
    {
        
        function watch($watch)
        {
            var watchPrice = $watch*50;
            return watchPrice;
        }
        var totalWatchPrice = watch(2);
        console.log("Total Watch Price : ",totalWatchPrice)
        
        function mobile($mobile)
        {
            var mobilePrice = $mobile*100;
            return mobilePrice;
        }
        var totalMobilePrice = mobile(3);
        console.log("Total Mobile Price: ",totalMobilePrice);

        function laptop($laptop)
        {
            var laptopPrice = $laptop*500;
            return laptopPrice;
        }
        var totalLaptopPrice = laptop(6);
        console.log("Total Laptop Price: ",totalLaptopPrice);
        
        var total= totalWatchPrice+totalMobilePrice+totalLaptopPrice;
        return total;

    
    }
    var totalBudget = budgetCalculator();
    console.log("Total Budget: ",totalBudget);

    //hotelCost
    function hotelCost (days){
        var cost = 0;
        if (days<=10){
            cost = days*100;
        } 
        else if(days<=20){
            var first10 = 10 * 100;
            var remainingDays = days - 10;
            var second10 = remainingDays * 80;
            cost = first10 + second10;
        } 
        else{
            var first10 = 10 * 100;
            var second10 = 10 * 80;
            var remainingDays = days - 20;
            var third10 = remainingDays * 50;
            cost = first10 + second10 + third10;
        }
        return cost;
        
}
var TotalCost =  hotelCost(15);
 console.log(TotalCost);

 //megeFriend

 function megeFriend (){
     var friendName = ["Whedul Islam Abir","Abir Hasan","Afia Ibnat","Jhankar Mahbub"];
     var longName = friendName[0];
     for(var i=0; i<friendName.length; i++){
         var element = friendName[i];
         if(element>friendName){
             longName = element;
         }
         return longName;
     }
 }
 var theLongName = megeFriend();
 console.log(theLongName);
 