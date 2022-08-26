
export default bubbleSort;

function bubbleSort(array){
  let len = array.length;
  let startTimeStamp = Date.now();
  let exitCondition = false;
  let passCount = 0;
  while (!exitCondition) {
    let moves = 0;
    for(let i = 0; i < len - 1; i++) {
        if(array[i] > array[i+1]){
          moves++;
          let holdValue = array[i];
          array[i] = array[i+1];
          array[i+1] = holdValue;
        }
      }
      if(moves === 0) {
        exitCondition = true;
        passCount++;
      } else {
        passCount++;
      }
    }
    let endTimeStamp = Date.now(); 
    console.log(`BUBBLE-SORT: Completed the numerical sort of an array of ${array.length} numbers in ${(endTimeStamp - startTimeStamp)} ms.`);
} 