function add(n1: number, n2:number, printresult: boolean, phrase: string){

    const result = n1 + n2;
    
    if (printresult) {
        console.log(phrase + result);

    } else {
        return result ;
    }

}


const printresult=true;
const phrase = 'Result is:  '
add(2, 5, printresult, phrase );