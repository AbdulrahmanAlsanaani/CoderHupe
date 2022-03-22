function octToBin(octal) {
	// write your code here
	const ss =['000','001','010','011','100','101','110','111']
  octal=octal.toString();
  const number = octal.split('');
  let gh='';
  for (const num of number) {
      gh+=ss[parseInt(num)];
  }
  return parseInt(gh);
	
}

//srr.slice(start , end);