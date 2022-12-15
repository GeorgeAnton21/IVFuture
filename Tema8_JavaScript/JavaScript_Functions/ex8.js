//MixUp

function mixUp(string1, string2) {
    string2_result = string1.slice(0, 2);
    string1_result = string2.slice(0, 2);
    console.log(`${string1_result}${string1.slice(2)} ${string2_result}${string2.slice(2)}`);
}

mixUp(`mix`, `pod`);
mixUp(`dog`, `dinner`);