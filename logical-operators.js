/* Logical operators

1. 論理積演算子（&&）
2. 論理和演算子（||）

大前提として、JavaScriptでは、全ての値は「trueに評価される」か「falseに評価される」ものです。
「falseに評価されるもの」は、false, null, undefined, 0, -0, NaN, ""です。
他の値は、すべてのオブジェクトも含めてtrueに評価されます。

論理演算子（&& ||）は「trueに評価れれる値」か「falseに評価される値」を返しますが、
実際に返される値は、単純に「左側の式の値」か「右側の式の値」を返すだけです。

*/

console.log({} && 'This is Object');
console.log([] && 'This is Array');
console.log('' && 'This is String1');
console.log('test' && 'This is String2');
console.log(null && 'This is null');
console.log(undefined && 'This is undefined');

console.log('\n');

console.log({} || 'This is Object');
console.log([] || 'This is Array');
console.log('' || 'This is String1');
console.log('test' || 'This is String2');
console.log(null || 'This is null');
console.log(undefined || 'This is undefined');
