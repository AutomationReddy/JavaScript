//Arrays Exercise***************************************************
/*
var restOne = 124;
var restTwo = 48;
var restThree = 268;

var allTips = [];
allTips.push(tipCalc(restOne));
allTips.push(tipCalc(restTwo));
allTips.push(tipCalc(restThree));

console.log(allTips);

var finalBill = [];
finalBill.push(restOne + allTips[0]);
finalBill.push(restTwo + allTips[1]);
finalBill.push(restThree + allTips[2]);

console.log(finalBill);

function tipCalc(bill){
    var tip;
    if(bill<50){
        tip = bill * 0.2;
        }
    else if(bill>=50 && bill<=200){
        tip = bill * 0.15;
        }
    else {
        tip = bill * 0.1;
        }
    return tip;
}******************************************************************************************/

//Object and properties

/*var jSON = {
    firstName:'Vinod',
    lastName:'Reddy',
    job:'QA',
    family:['Suresh', 'Guna', 'Mani', 'Teju'],
    isMarried:false,
    dateOfBirth:1992
}

console.log(jSON);

var oJSON = new Object();
oJSON.name = 'Vinod Reddy';

console.log(oJSON); */

//*****************************************************************************************

//Object methods

/******************************************************************************************
var jSON = {
    firstName:'Vinod',
    lastName:'Reddy',
    job:'QA',
    family:['Suresh', 'Guna', 'Mani', 'Teju'],
    isMarried:false,
    dateOfBirth:1992,
    calcAge: function(){
        this.age = 2019 - this.dateOfBirth;
    }
};
jSON.calcAge();
console.log(jSON)

*********************************************************************************************/

//Excercise

/*

var markDetails = {

    fullName:'Mark Henry',
    mass:110,
    height:1.95,
    calcBMI: function(){
        this.BMI = this.mass/ (this.height * this.height);
        return this.BMI;
    }
};

var johnDetails = {

    fullName : 'John Henry',
    mass : 78,
    height:1.69,
    calcBMI: function(){
        this.BMI = this.mass/ (this.height * this.height);
        return this.BMI;
    }
};

if(markDetails.calcBMI() > johnDetails.calcBMI()){
    console.log(markDetails.fullName + ' is having highest BMI of ' + markDetails.BMI);
}
else if(markDetails.BMI == johnDetails.BMI){

    console.log(markDetails.fullName + ' and ' + johnDetails.fullName +' are having same BMI of ' + markDetails.BMI);

        }
else{
    console.log(johnDetails.fullName + ' is having highest BMI of ' + johnDetails.BMI);
}

*/


//*********************************************************************************************************

//Loops and iteration

/*var myDetails = ['Vinod Reddy', 26, 1993,'QA', 60000, 'Single'];

for (var i = 0; i<=myDetails.length-1; i++){

    console.log(myDetails[i]);
}

//Reverse

var myDetails = ['Vinod Reddy', 26, 1993,'QA', 60000, 'Single'];

for (var i = myDetails.length-1; i>=0; i--){

    console.log(myDetails[i]);
}*****************************************************************************************************/

//Excercise

var billsArray = {

    bill: [124, 48, 268, 180, 42],
    calcTip: function calcTip(){

     this.tip = [];
     this.finalBills = [];

    for(var i=0; i<=this.bill.length-1; i++){

    if(billsArray.bill[i]<50){
        this.tip.push(this.bill[i] * 0.2);
        }
    else if(this.bill[i]>=50 && billsArray.bill[i]<=200){
        this.tip.push(this.bill[i] * 0.15);
        }
    else {
        this.tip.push(this.bill[i] * 0.1);
        }
        this.finalBills.push(this.bill[i] + this.tip[i]);
    }

}
};

billsArray.calcTip();

console.log(billsArray);


















