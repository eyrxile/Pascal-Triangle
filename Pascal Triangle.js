var generate = function(numRows) {
    const triangle = [];

    for(let i = 0; i<numRows; i++){
        const row = [];
        for(let j = 0; j <=i; j++){
            if(j===0 || j ===i){
                row.push(1);
            } else{
                row.push(triangle[i-1][j-1] + triangle[i-1][j]);
            }
        }
        triangle.push(row);
    }

    return triangle;
};

//Example usage:
console.log(generate(5));
console.log(generate(1));