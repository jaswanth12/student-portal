// Const isTwin = () => {

// //return true or false
// }

// //Hello and lloHe => true ////Hello and lloHE => false
// //Boss and Sosb => true
// //Hole and Hola ==> false

function isTwin(){
	let st1="Hello";
	let st2="lloHe";
	let cpy1=st1.toLowerCase();
	let cpy2=st2.toLowerCase();
	let cap1=0,cap2=0;
	st1.split('').forEach((item) => {
		if(item===item.toUpperCase()){
			cap1=cap1+1;
		}
		if(!cpy2.substr(item.toLowerCase())){
			return false;
		}
	});
	let ar1=st1.split('');
	for (var i = 0; i < ar1; i++) {
		if(st2.charAt(i)
	}
	st2.split('').forEach((item) => {
		if(item.isUpper()){
			cap2+=1;
		}
	})
	if(!cap1==cap2)
		return false;

	return true;

}

isTwin();