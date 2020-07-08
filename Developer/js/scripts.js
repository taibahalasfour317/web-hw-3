// console.log("مرحبا بك في برنامج توظيف المبرمجين " );

// let lang=["HTML","CSS","Javascript","PHP","JAVA"];
// wanted_lang = 2;

// cv={};
// cv["name"] = prompt(" ما اسمك؟");
// cv["age"] = prompt(" كم عمرك؟");
// cv["experience"] = prompt(" كم عدد سنوات خبرتك؟");

// console.log("\n");
// console.log(" :لغات البرمجة");
// console.log("1. " + lang[0]);
// console.log("2. " + lang[1]);
// console.log("3. " + lang[2]);
// console.log("4. " + lang[3]);
// console.log("5. " + lang[4]);
// console.log("6. " + lang[5]);
// console.log("\n");

// cv["lang"] = [];

// let number = prompt("اختر لغة تتقنها من لغات البرمجة المذكورة بإدخال رقمها");
// cv["lang"].push(lang[parseInt(number) - 1]);

// if (
//     parseInt(cv["age"]) > 25 &&
//     parseInt(cv["age"]) < 40 &&
//     parseInt(cv["experience"]) > 3 &&
//     (cv["lang"][0] == lang[wanted_lang]) |
//       (cv["skills"][1] == skills[wanted_skill])
//   ) {
//     console.log("تهانينا، تم قبولك يا" + " " + cv["name"]);
//   } else {
//     console.log(".نأسف، أنت  رائعاً,ولكننا لا نحتاج إليك ا");


//  المطلوب الثاني ------------------------------------------

// const logger = function (array) {
//      array.forEach((temp) => console.log(temp));
//     };
//     }

//     const toCelsius = function (temperatures) {
//           return temperatures.map((t) => parseInt((t - 32) * (5 / 9)));
//         };

     
//        const hottestDays = function (temperatures, threshold) {
//          return temperatures.filter((t) => t > threshold);
//        };

   
//        const logHottestDays = function (temperatures, threshold) {
//          logger(toCelsius(hottestDays(temperatures, threshold)));
//        };
      
//        let feh_temp_array = [34, 60, 100, 106];
//         let threshold = 30;
// let threshold = 60;
// let cel_temp_array = [];
// let temp_gt_th = [];


// console.log("--------------------------------------------");
// logger(toCelsius(hottestDays(feh_temp_array, threshold)));
//  console.log("--------------------------------------------");
// console.log(toCelsius(feh_temp_array));
//  console.log("--------------------------------------------");
//  ogger(toCelsius(hottestDays(feh_temp_array, threshold), cel_temp_array));
//  console.log("--------------------------------------------");

//  المطلوب الثالث الدرجات 

 let quizes =[];
let midter =[];
 let final =[];
 let oral =[];


 let grades =[];

 function getVal() {
    let input0 = document.getElementById('txt').value ;
    let input1 = document.getElementById('txt2').value ;
    let input2 = document.getElementById('txt3').value ;
    let input3 = document.getElementById('txt4').value ;
    let result = parseFloat(input0)+parseFloat(input1)+parseFloat(input2)+parseFloat(input3);

    if(!isNaN(result))
    
        document.getElementById("letter").innerHTML=result;
 
    if(result >=90 && result <=100)
    document.getElementById("num").innerHTML="A";
    
      if(result >=80 && result <90)
    document.getElementById("num").innerHTML="B";
     
 else if(result >=70 && result<80)
    document.getElementById("num").innerHTML="C";

 
 else  if(result >=60)
 document.getElementById("num").innerHTML="D";

else if(result <=49)
    document.getElementById("num").innerHTML="F";

// the gif
    if(result >=90 && result <=100)
    document.getElementById("gif").scr="./js/tenor.gif";
    
     else if(result >=80 && result <90)
    document.getElementById("gif").src="./js/b.gif";
     
 else if(result >=70 && result<80)
 document.getElementById("gif").src="./js/c.gif";
 
 else  if(result >=60)
 document.getElementById("gif").src="./js/D2.gif";

else if(result <=49)
document.getElementById("gif").src="./js/dis.gif";


 } 
    