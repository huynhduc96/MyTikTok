# Hosting - Kéo khai báo lên đầu

<br>

> Trong Javascript, các biến có thể được khai báo (declarations) sau khi sử dụng
> <br>
>
>> Hay nói cách khác : một biến có thể được sử dụng trước khi nó được khai báo.

## 1 - Hosting với **_var_**

Ví dụ :

```javascript
console.log(x); // undefined
console.log(y); 
// Uncaught ReferenceError: y is not defined

var x = 10;
```

## 2 - Hosting với **_function_**

<br>

> Khai báo hàm sẽ đi cùng hosting

Ví dụ :

```javascript
console.log(sum(1, 2)); //  3

function sum(a, b) {
  return a + b;
}

```

## 3 - Hosting với **_let_** và **_const_**

<br>

> Khai báo biến với **_let_** và **_const_** sẽ được hoisted
> <br>
> Tuy nhiên, sẽ không được khởi tạo giá trị ( _initialized_ )
> <br>
> và được đưa vào **_temporal dead zone_**

Ví dụ:

```javascript
{
  carName = "Volvo";
  console.log(carName);
  //Cannot access 'carName' 
  //before initialization
  let carName;
  // const carName;
}
```

## 4 - Challenge

Đoạn code này in ra gì ? 

```javascript
console.log(plus(2));

function plus(a) {
  let result = 0;

  return increase(a);

  function increase(a) {
    var sum = result + a;
    return sum;
  }
}
```
