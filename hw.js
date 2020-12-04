
const hw = require('./hw.json');
function AllTopping (){
    const topp = hw[0].topping;
    for(var i = 0;i<= topp.length;i++){
      console.log(topp[i].type);
  }
}
   
function AllBatter (){
    const batt = hw[0].batters.batter;
    for(var j = 0;j<= batt.length;j++){
      console.log(batt[j].type);
  }
   
}

function ppuAverage (){
    // var ppuAvg = 0;
   // for(var j = 0;j<= hw.length;j++){
    // const  pppu = hw[j].ppu
    // ppuAvg = ppuAvg + pppu;
    const  ppuAvg= (hw[0].ppu + hw[1].ppu + hw[2].ppu)/3 ;
     console.log(ppuAvg);
 // }
 // console.log(ppuAvg);
}

function ppuSum (){
  // var ppuSum = 0;
 // for(var j = 0;j<= hw.length;j++){
  // const  pppu = hw[j].ppu
  // ppuSum = ppuSum + pppu;
  const  ppuSum = (hw[0].ppu + hw[1].ppu + hw[2].ppu) ;
   console.log(ppuSum);
// }
// console.log(ppuSum);
}

function AllIDs (){
  var IDs = [];
  for(var j = 0;j<= hw.length;j++){
     IDs [j] = hw[j].id;
     //console.log( hw[j].id);
  }
  var IDsBatt = [];
  const batt = hw[0].batters.batter;
   for(var j = 0;j<= batt.length;j++){
    IDsBatt [j] = batt[j].id;
      // console.log(batt[j].id);
   }
   var IDsTopp = [];
   const topp = hw[0].topping;
     for(var i = 0;i<= topp.length;i++){
      IDsTopp [j] = topp[j].id;
      // console.log(topp[i].id);
     }
     var allIDs = [];
      allIDs = IDs.concat(IDsBatt,IDsTopp);
     for(var j = 0;j<= allIDs.length;j++){
      console.log(allIDs[i]);
     }
    
 }
 AllIDs();

//AllTopping();
//AllBatter();
//ppuAverage();
//ppuSum();

