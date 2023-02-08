// 1- Write a program that allow to user enter number then print it
var age = window.prompt("please insert your age");
console.log(age);

/* 2- Write a program that take number from user then print yes if that number can divide by 3
     and 4 otherwise print no  */
var num = window.prompt("please enter a number")
if(num %3== 0 && num %4 ==0){
    console.log("Yes")
}
else{
    console.log("No")
}

// 3- Write a program that allows the user to insert 2 integers then print the max
var intOne = window.prompt("enter first number");
var intTwo = window.prompt("enter second number");
if(intOne > intTwo){
    console.log(intOne)
}
else if(intTwo > intOne){
    console.log(intTwo)
}

/* 4- Write a program that allows the user to insert an integer then print negative if it is
     negative number otherwise print positive. */

var kind = window.prompt("enter Your positive or negative number please");
if(kind > 0){
    console.log("Positive")
}
else if( kind < 0){
    console.log('negative')
}

/* 6- Write a program that take 3 integers from user then print the max element
    and the min element. */
var firstNum = window.prompt('enter first Number');
var secondNum = window.prompt('enter second Number');
var thirdNum = window.prompt('enter third Number');
if(firstNum > secondNum && firstNum > thirdNum && secondNum > thirdNum){
    console.log("the max elemrnt is :" + firstNum);
    console.log("the min element is :" + thirdNum );
}
else if(firstNum > secondNum && firstNum > thirdNum && thirdNum > secondNum){
    console.log("the max elemrnt is :" + firstNum);
    console.log("the min element is :" + secondNum );
}
else if( secondNum > firstNum && secondNum > thirdNum && firstNum > thirdNum){
    console.log("the max elemrnt is :" + secondNum);
    console.log("the min element is :" + thirdNum);
}
else if( secondNum > firstNum && secondNum > thirdNum && thirdNum > firstNum){
    console.log("the max elemrnt is :" + secondNum);
    console.log("the min element is :" + firstNum);
}
else if( thirdNum > firstNum && thirdNum > secondNum && firstNum > secondNum){
    console.log("the max elemrnt is :" + thirdNum);
    console.log("the min element is :" + secondNum);
}
else if( thirdNum > firstNum && thirdNum > secondNum && secondNum > firstNum){
    console.log("the max elemrnt is :" + thirdNum);
    console.log("the min element is :" + firstNum);
}

/* 7- Write a program that allows the user to insert integer number then
   check If a number is oven or odd */
var look = window.prompt('enter ur oven or odd number');
if(look %2==0){
    console.log('even')
}
else if(look %2==1){
    console.log('odd')
}


/* 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
     then print vowel otherwise print consonant */
    var cara = window.prompt("please enter one character");
    if(cara == "a" || cara == "e" || cara == "i" || cara == "o" || cara == "u"){
    console.log("vowel")
    }
    else{
        console.log('consonant')
    }

/*  9- Write a program that allows user to insert integer then print all numbers between 1 to
    that’s number */
    var user = window.prompt(" please insert your num");
    for(i=1 ; i <= user ; i++){
        console.log( i )
    }

    // 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
    var multiUser = window.prompt('inter ur multi number sir');
    for(i=1 ; i <= 12 ; i++){
       console.log(multiUser * i)
    }

    /* 11- Write a program that allows to user to insert number then print all even numbers
        between 1 to this number */
    var evenNum = window.prompt('Enter Num please')
    for(i=1 ; i<=evenNum ; i++){
        if(i%2==0){
            console.log(i)
        }
    }


//prob
// 12- Write a program that take two integers then print the power
    var power1 = window.prompt('insert num1');
    var power2 = window.prompt('insert num2');
    function power(power1 , power2){
        var pow = 1;
        for(i=0 ; i < power2 ; i++){
            pow = pow * power1;
        }
        return(pow)
    }
    console.log(power(power1,power2))

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
    var ph = Number(window.prompt('enter ur ph degree')) ;
    var ch = Number(window.prompt('enter ur ch degree')) ;
    var ar = Number(window.prompt('enter ur ar degree')) ;
    var en = Number(window.prompt('enter ur en degree')) ;
    var bio = Number(window.prompt('enter ur bio degree')) ; 
        var total = ph + ch + ar + en + bio ;
        var avrg = total / 500 * 100;
        var percent = avrg * 1 ;  
        console.log("the total degree is : " + total);
        console.log("Average is " + avrg);
        console.log("Percentage is : " + percent + " %");

// 13-Write a program to input month number and print number of days in that
//     month.
    var month = Number(window.prompt('enter month'));
    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        console.log("Number of Days is 31")
    }
    else if(month==2 || month==4 || month==6 || month==9 || month==11){
        console.log("Number of Days is 30")
    };

// 14- Write a program to input marks of five subjects 
//     Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
    function school (phy , chem , biolo , math , comp){
        var grade = phy + chem + biolo + math + comp ;
        var percent = (grade / 500)*100;
            if(percent >= 90){
                console.log("Grade A")
            }
            else if(percent >= 80){
                console.log("Grade B")
            } 
            else if(percent >= 70){
                console.log("Grade C")
            } 
            else if(percent >= 60){
                console.log("Grade D")
            } 
            else if(percent >= 40){
                console.log("Grade E")
            }
            else{
                console.log("Grade F")
            }
        return("your percent is " + percent)
    }

    var schoolResult = school(80 , 70, 90 , 100 , 98);
    console.log(schoolResult);

// Using Switch Cases//
// 15- Write a program to print total number of days in month
    var monthCalc = Number( window.prompt("Enter your month number") );
    switch(monthCalc){
        case 1: 
            console.log("Number of Days is 31");
            break;
        case 2: 
            console.log("Number of Days is 28 or 29");
            break;
        case 3: 
            console.log("Number of Days is 31");
            break;
        case 4: 
            console.log("Number of Days is 30");
            break;
        case 5: 
            console.log("Number of Days is 31");
            break;
        case 6: 
            console.log("Number of Days is 30");
            break;
        case 7: 
            console.log("Number of Days is 31");
            break;
        case 8: 
            console.log("Number of Days is 31");
            break;
        case 9: 
            console.log("Number of Days is 30");
            break;
        case 10: 
            console.log("Number of Days is 31");
            break;
        case 11: 
            console.log("Number of Days is 30");
            break;
        case 12: 
            console.log("Number of Days is 31");
            break;
        default: console.log("please insert a number between 1 and 12 "); 
    }

// 16- Write a program to check whether an alphabet is vowel or consonant
    var alphabet = window.prompt("enter your alphabet");
    switch(alphabet){
        case "a" : console.log("it is vowel");
            break;
        case "e" : console.log("it is vowel");
            break;
        case "i" : console.log("it is vowel");
            break;
        case "o" : console.log("it is vowel");
            break;
        case "u" : console.log("it is vowel");
            break;
        default : console.log("it is consonant")
    }

// 17- Write a program to find maximum between two numbers
    var numb1 = Number(window.prompt("insert num1"));
    var numb2 = Number(window.prompt("insert num2"));
    switch(numb1>numb2){
        case true : console.log ("The max between these two numbers is : " + numb1);
            break;
        case false > numb1 : console.log ("The max between these two numbers is : " + numb2);
            break;
    }

// 18- Write a program to check whether a number is even or odd
    var numeric = Number(window.prompt('enter ur even or odd number'));
    switch(numeric%2==0){
        case true : console.log('it is even');
            break;
        case false : console.log('it is odd');
            break;
    }

// 19- Write a program to check whether a number is positive or negative or zero
    var numi = Number(window.prompt('write a number'));
    switch(numi > 0){
        case true : console.log("it is positive");
        break;
        case false :
            switch(numi < 0){
                case true : console.log("it is negative");
                break;
                case false :
                    switch( numi == 0){
                        case true : console.log(" it is zero")
                    }
            }
    }

// 20- Write a program to create Simple Calculator
    var n1 = Number(window.prompt("insert first number"));
    var sign = window.prompt("insert your calculation sign");
    var n2 = Number(window.prompt("insert second number"));
    switch(sign){
        case "+" : console.log(n1+=n2);
            break;
        case "-" : console.log(n1-=n2);
            break;
        case "*" : console.log(n1*=n2);
            break;
        case "/" : console.log(n1/=n2);
    }