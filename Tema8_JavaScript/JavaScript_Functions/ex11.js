function notBad(string){

    let not = string.indexOf("not");
    let bad = string.indexOf("bad");
    if (not == -1 || bad == -1 || bad < not) {
       console.log(string);  
       return string;
    }
    let newString = string.slice(0, not) + "good" + string.slice(bad + 3);
    console.log(newString);
    return newString;
   
   }
   
   notBad('The dinner is not bad')