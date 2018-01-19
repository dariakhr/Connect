var arr = [15, 'hi', 47, '123', 'world'];
var res_arr = '';
var i = 0;
while (i < arr.length - 1) {
  res_arr += arr[i] + ', ';
  i++;
}
res_arr += arr[arr.length - 1] + '.';
alert('Your array is: ' + res_arr);
