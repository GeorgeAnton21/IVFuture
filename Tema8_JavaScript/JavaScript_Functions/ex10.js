function verbing(string){
    let result;
    if(string.length>=3)
        {
            if(string.slice(string.length-3)=='ing')
                {
                    result=`${string}ly`;
                    return result;
                }
                else
            result=`${string}ing`;
            return result;

        }
    else return string;
}
resultVerbing=verbing(`swimm`);
console.log(resultVerbing);
resultVerbing=verbing(`swimming`);
console.log(resultVerbing);
resultVerbing=verbing(`go`);
console.log(resultVerbing);
