/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for (var i = 0 ; i < nums.length; ++i) {
        set.add(nums[i]);

    }
    return set.size !== nums.length;
    
};

var input = [1,2,3,1];
console.log(containsDuplicate(input));