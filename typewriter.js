const sentence = "hello I will be soon a full stack developer";

for(let i = 0 ; i <= sentence.length;i++) {
    let character = sentence[i];
    setTimeout(() => {
    // print the char here
    if(i == sentence.length)
      console.log();
    else
      process.stdout.write(character);
  }, 50*i) ;
}
