

    function add(a,b){
        return a + b;

    }

    function subtract(a,b){
        return a - b;

    }

    function multiply(a,b){
            return a * b;


    }

    function divide(a,b){
        return a/b;  


    }

    function increment(n){
        n++
        return n;
    }

    function decrement(n){
        n--
        return n;
    }

/* 
    function isNaN(string){
        if  (parseInt(string,10) === false){
            return false;
        } else{
            return true;
        }
    }
 */

    function makeInt(n){
        return parseInt(n,10);
    
    }


    function preserveDecimal(n){
        return parseFloat(n,10);

    }

    console.log(isNaN(preserveDecimal('sldkjflksjf')));