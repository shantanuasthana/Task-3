//enclose the code for all questions in the below code
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
 
  //end-here
});


//1. Odd number in array
//anonymous function
var odd = function(a) 
{
    var n =''
    for(i=0;i<a.length;i++)
    {
       if(parseInt(a[i])%2!==0)
       {
           n += a[i] + ' '
       }
    }
   return n 
}

var arr = userInput[0].split(" ")
console.log(odd(arr))

//iife
var odd = (function(a) {
    var n =''
    for(i=0;i<a.length;i++)
    {
       if(parseInt(a[i])%2!==0)
       {
           n += a[i] + ' '
       }
    }
   return n 
}) (userInput[0].split(" "))

console.log(odd)


//2. Convert all strings to upper case
//anonymous function
var caps = function(a) 
{
  var u = a.toUpperCase()
  return u
}

var arr = userInput[0]
console.log(caps(arr))

//iife
var caps = (function(a) {
    var u = a.toUpperCase()
    return u
}) (userInput[0])

console.log(caps)


//3.Sum of all numbers in an array
//anonymous function
var sum = function(a) 
{
    var n = 0
    for(i=0;i<a.length;i++)
    {
        n += parseInt(a[i])
    }
  return n 
}

var arr = userInput[0].split(" ")
console.log(sum(arr))

//iife
var sum = (function(a){
    var n = 0
    for(i=0;i<a.length;i++)
    {
        n += parseInt(a[i])
    }
    return n 
}) (userInput[0].split(" "))

console.log(sum)


//4.Prime numbers in an array
//anonymous function - incomplete
var prime = function(a,n) 
{
   
    var p =''
    for(i=0;i<n;i++)
    {
        var c = 0
        for(j=2;j<a[i];j++)
        {
          if(a[i]%j===0) 
          {
            c = 1
            break;
          }
        }
        if(c===0)
        {
            p += a[i] + ' ' 
        }
    }
    return p
}
var arr = userInput[0].split(' ')
console.log(prime(arr,arr.length)) 

//iife
var prime = (function(a,n) 
{
   
    var p =''
    for(i=0;i<n;i++)
    {
        var c = 0
        for(j=2;j<a[i];j++)
        {
          if(a[i]%j===0) 
          {
            c = 1
            break;
          }
        }
        if(c===0)
        {
            p += a[i] + ' ' 
        }
    }
    return p
}) (userInput[0].split(' '),userInput[0].split(' ').length)

console.log(prime)


//5. Palindrome
//anonymous function
var palindrome = function(a)
{
  var p=''
  for(i=0;i<a.length;i++)
  {
      if(a[i]===a[i].split('').reverse().join(''))
      {
          p += a[i] + ' '
      }
  }
  return p
}

var string = userInput[0].split(' ')
console.log(palindrome(string))

//iife
var palindrome = (function(a)
{
  var p=''
  for(i=0;i<a.length;i++)
  {
      if(a[i]===a[i].split('').reverse().join(''))
      {
          p += a[i] + ' '
      }
  }
  return p
}) (userInput[0].split(' '))


console.log(palindrome)


//6. Median of two sorted arrays
//anonymous function
var median = function(a,b)
{
  var c = a.concat(b)
  s = c.sort()
  l = s.length
  for(i=0;i<l;i++)
  {
      if(l%2===0)
      {
        return((s[l/2] + s[(l/2)-1])/2)
      }
      else(l%2!==0)
      {
        return(s[Math.floor(l/2)])
      }
  }
  


var a1 = userInput[0].split(' ')
var a2 = userInput[1].split(' ')
console.log(median(a1,a2))

//iife
var median = (function(a,b)
{
  var c = a.concat(b)
  s = c.sort()
  l = s.length
  for(i=0;i<l;i++)
  {
      if(l%2===0)
      {
        return((s[l/2] + s[(l/2)-1])/2)
      }
      else(l%2!==0)
      {
        return(s[Math.floor(l/2)])
      }
  }
  
}) (userInput[0].split(' '), userInput[1].split(' '))

console.log(median)


//7. Remove duplicates from an array
//anonymous function
var duplicate = function(a)
{
    var count = {};
    for(i=0;i<a.length;i++)
    {
        count[a[i]]=0;
    }
    for(i=0;i<a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            if(a[i]==a[j])
            {
                count[a[i]]++;
            }   
        }
        
    }
    c = "";
    for(i=0;i<a.length;i++)
    {
        if(count[a[i]]===0)
        {
            c += a[i] + " ";
        }
    } 
    return c
}

var arr = userInput[0].split(' ')
console.log(duplicate(arr))

//iife
var duplicate = (function(a)
{
    var count = {};
    for(i=0;i<a.length;i++)
    {
        count[a[i]]=0;
    }
    for(i=0;i<a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            if(a[i]==a[j])
            {
                count[a[i]]++;
            }   
        }
        
    }
    c = "";
    for(i=0;i<a.length;i++)
    {
        if(count[a[i]]===0)
        {
            c += a[i] + " ";
        }
    } 
    return c
    
}) (userInput[0].split(' '))

console.log(duplicate)


//8. Rotate an array by k times and return the rotated array
//anonymous function
var rotate = function(a,k)
{
   n = a.length
   k = k%n
   var p =''
   for(i=0;i<n;i++)
   {
       if(i<k)
       {
           p += a[n+i-k] + ' '
       }
       else
       {
           p += a[i-k] + ' '
       }
   }
   return p
} 

var arr = userInput[0].split(' ')
var k = parseInt(userInput[1])
console.log(rotate(arr,k))

//iife
var rotate = (function(a,k)
{
   n = a.length
   k = k%n
   var p =''
   for(i=0;i<n;i++)
   {
       if(i<k)
       {
           p += a[n+i-k] + ' '
       }
       else
       {
           p += a[i-k] + ' '
       }
   }
   return p
   
   
}) (userInput[0].split(' '), parseInt(userInput[1]))

console.log(rotate)