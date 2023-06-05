function reverseString(str) {
  let a = "";
  for (let i = str.length-1; i >=0; i--) {
    console.log(i);
    a += str[i] ;
  }
  console.log(a)
}

reverseString("hello")
