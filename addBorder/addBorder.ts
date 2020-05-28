function addBorder(arr) {
    let newArray = [];
    newArray.push('*'.repeat(arr[0].length + 2));
    for(let i=1; i<arr.length; i++) {
      newArray.push('*' + arr[i] + '*');
    }
    newArray.push('*'.repeat(arr[0].length + 2));
    return newArray;
  }
  
  addBorder(["abdc","ffff","hfij"])