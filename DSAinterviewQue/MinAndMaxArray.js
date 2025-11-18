let arr= [1,2,3,6,4,9,5,-3];
for(let i =0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j] =temp;
        }
    }
} 