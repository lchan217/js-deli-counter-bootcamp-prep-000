function takeANumber(currentLine, name){
currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine){
 if(katzDeliLine>0){
   var first =(katzDeliLine.shift)
   return "Currently serving" + katzDeliLine
 }else{
   return "There is nobody waiting to be served!"
 }
  
  
}