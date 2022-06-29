var runningSum = function(nums) {
    var number = []
    for(let i=0; i<nums.length; i++){
    
      if(i==0){
        number.push(nums[i])
      }
        if(i < nums.length - 1){
         number.push(number[i] + nums[i+1])   
        }
}
    return number
};

//console.log(runningSum([1, 2, 3, 4]))
