var pattern, check;

pattern=/Javascript/gi;
check=pattern.test("Javascript is my favourite");
//console.log(check);

pattern=/@+/g;
check=pattern.test("Javascript @@ is my favourite");
//console.log(check);

pattern=/\d{6,10}/g;
check=pattern.test("12345");   //Add one more digit and see the return value
//console.log(check);

pattern=/^[A-z]/g;
check=pattern.test("1abc");   //Change the first char to an alphabet and see the return value
//console.log(check);

pattern=/\w$/g;
check=pattern.test("1abc_");  //Change the last char to @ and see the return value
//console.log(check);