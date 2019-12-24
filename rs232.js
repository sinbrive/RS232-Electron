function rs232() {

	const bits = document.querySelector('#bits').value;
	const stops = document.querySelector('#stops').value;
	const octet = document.querySelector('#octet').value;
	const rate = document.querySelector('#rate').value;


    document.getElementById("res").style.display="block";

	document.getElementById('data').innerHTML = bits + ' bits, ' + stops + ' stops, ' +
		' debit:' + rate + 'b/s, octet: 0x' + Number(octet).toString(16) + '(' + Number(octet).toString(2) + ')';

	let bitDuration = Math.round(1000000 / rate) / 1000;
	document.getElementById('tBit').innerHTML =  bitDuration + "ms";

	let octetDuration= (Number(bits) + Number(stops) + 1) * bitDuration; 
	octetDuration =Math.round(1000 * octetDuration) / 1000;
	document.getElementById('tAllBits').innerHTML = octetDuration + "ms";

	var str = '';
	
	 var oc = octet;
	 for (var i = 0; i < bits; i++) {
		if ((oc & 0x01) == 0x01) str = '1' + str;
	 	else str = '0' + str;
	 	oc >>= 1;
	 } 
	//alternative :
	// str = Number(octet).toString(2).toString();  // issue with MSB when nb bits=7 !!

	var stp = ['1', '11', '111'];
	str = stp[stops] + str + '01';
	
	document.getElementById('ones').innerHTML = display(str, '1');

	document.getElementById('vide').innerHTML = display('&nbsp', 'v');

	document.getElementById('zeros').innerHTML = display(str, '0');

}

function display(st, oneZero) {
	let s = '';
	for (var i = 0; i < st.length; i++) {
		if (st[i] == oneZero) s = '---' + s;
		else s = '&nbsp;&nbsp;&nbsp;' + s;
	}
	return s;
}

