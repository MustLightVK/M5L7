//------------------------------task_1
let i = 30;

while (i >= 30 && i <= 39) {
    i++;
    if (i % 2 == 0) continue;
    console.log(i);
}
//------------------------------task_2
for (let i = 70; i >= 40; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//------------------------------task_3
let j = 70;

while (j >= 40) {
    if (j % 2 == 0) {
        console.log(j);
    }
    j--;
}
//------------------------------task_4
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
//------------------------------task_5
let smile = '';

for (let i = 1; i <= 10; i++) {
    smile += ' :) '
    console.log(smile);
} 
//------------------------------task_6
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('JavaScript');
    } else if (i % 3 == 0) {
        console.log('Java');
    } else if (i % 5 == 0) {
        console.log('Script');
    } else {
        console.log(i);
    }
}
//------------------------------task_7
let number = 1000;
let i = 1;
while (number >= 50) {
    number = number / 2;
    i++
}
console.log(i)
//------------------------------task_8
let i = 45
while (i >= 45 && i <= 170) {
    if (i % 10 == 0) {
        console.log(i);
    }
    i++;
}