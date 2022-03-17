var flipAndInvertImage = function(image) {
    let res = new Array()
    for(let imageChunk of image){
        let leftIdx = 0;        
        let rightIdx = imageChunk.length - 1;
        let tempImgChunk = [imageChunk.length];
        while(leftIdx <= rightIdx){
            tempImgChunk[leftIdx] = imageChunk[rightIdx] ===0 ? 1  : 0;
            if(leftIdx === rightIdx) break
            tempImgChunk[rightIdx] = imageChunk[leftIdx] ===0 ? 1  : 0; ;
            leftIdx++;
            rightIdx--;
        }
    res.push(tempImgChunk)    
    }
    return res
};
