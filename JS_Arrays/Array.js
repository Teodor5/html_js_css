/*//Length
var array1 = [0, 1, 2];
console.log('array1', array1.length);
//Fill
var arrayFill = [0, 1, 2];
console.log(arrayFill.fill(4, 1, 2));
// Pop
var arrayPop=[0, 1, 2];
console.log(arrayPop.pop(),arrayPop);
//Push
var arrayPush = [0, 1, 2];
console.log(arrayPush.push(4, 5, 6), arrayPush);
//Reverse
var arrayReverse = [1, 2, 3, 4];
console.log(arrayReverse.reverse());
//Shift
var arrayShift = [ 0, 1, 2, 3];
console.log(arrayShift.shift(),arrayShift);
//Sort
var arraySort = [ 10, 4, 2];
console.log(arraySort.sort(), arraySort);
console.log(arraySort.sort(function(a, b){return a-b;}), arraySort);
//Splice
var arraySplice = [ 0, 1, 2, 3, 4, 5, 6];
console.log(arraySplice.splice(2, 2, ...[10, 11]), arraySplice);
//Unshift
var arrayUnshift = [ 0, 1, 2, 3, 4];
console.log(arrayUnshift.unshift(0, 1), arrayUnshift);
//Delete
var arrayDelete = [ 0, 1, 2, 3, 4];
delete arrayDelete[3];
console.log(arrayDelete);
//Concat
var arrayConcat1 = [ 0, 1, 2, 3, 4];
var arrayConcat2 = [ 0, 1, 2, 3, 4];
console.log(arrayConcat1.concat(arrayConcat2,[1, 2, 3]));
//includes
var arrayIncludes = [ 0, 1, 2, 3, 4];
console.log(arrayIncludes.includes(3));
//Join
var arrayJoin = [ 0, 1, 2, 3, 4];
console.log(arrayIncludes.join(', '));
//Split
var arraySplit = '0, 1, 2, 3, 4';
console.log(arraySplit.split(','));
//Slice
var arraySlice = [0, 1, 2, 3, 4, 5, 6];
console.log(arraySlice.slice(2,4));

//toString
var monthNames = ['Січ', 'Лют', 'Бер', 'Кві'];
var myVar = monthNames.toString();
console.log(myVar);
*/
var classElements=document.getElementById('element');
classElements.addEventListener('click',function(){
	alert('Click');
	});
