# Clone An Array

Có ít nhất 6 cách để clone Array

## 1 - Loop Way

```javascript
const numberArray = [1, 2, 3];
let clonedNumberArray = [];

for (i = 0; i < numberArray.length; i++) {
  clonedNumberArray[i] = numbers[i];
}
```

## 2 - Slice

```javascript
const clonedNumberArray = numberArray.slice();
```

## 3 - Array.from()

```javascript
const clonedNumberArray = Array.from(numberArray);
```

## 4 - concat

```javascript
const clonedNumberArray = [].concat(numberArray);
```

## 5 - Map, Filter, Reduce

```javascript
const clonedNumberArray = numberArray.map((x) => x);
//or
const clonedNumberArray = numberArray.filter(() => true);
```
## 6 - Spread operator (FASTEST)