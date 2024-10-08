﻿# js-lesson-7

 - Nazariy
    
    To provide a comprehensive understanding of JavaScript strings, we'll cover the following key topics:
    
    ### 1. **String Basics**
    
    - **Three Types of Quotes:**
        - **Double Quotes (`"`)**:
            
            ```jsx
            let doubleQuote = "O'zbekiston buyuk davlat!";
            
            ```
            
        - **Single Quotes (`'`)**:
            
            ```jsx
            let singleQuote = '"AP" -> Abdulaziz Programmer';
            
            ```
            
        - **Backticks (```)**:
            
            ```jsx
            let backtics = `O'zbekiston "buyuk" davlat`;
            
            ```
            
    - **Escape Characters** (`\\`):
        - `\\'` → `'`
        - `\\"` → `"`
        - `\\\\` → `\\`
        - `\\n` → New line
        - `\\t` → Tab
    
    ### 2. **Backticks ( ``)**
    
    - **Template Literals / Template Strings / String Templates**: Used for string interpolation and multi-line strings.
    - **String Interpolation:**
        - Allows embedding variables or expressions inside a string:
            
            ```jsx
            let fullName = "Abdulaziz Programmer";
            let isMarried = false;
            let birthYear = 2004;
            
            let res = `${isMarried ? "2 boshli" : "Bo'ydoq"} ${fullName} hozir ${2023 - birthYear} yoshda.`;
            
            ```
            
    
    ### 3. **String Properties**
    
    - **Length:**
        - Returns the length of a string:
            
            ```jsx
            let fullName = "Abdulaziz Programmer";
            console.log(fullName.length);  // Output: 20
            
            ```
            
    
    ### 4. **Accessing Characters**
    
    - You can access characters in a string using index notation:
        
        ```jsx
        let fullName = "Abdulaziz Programmer";
        console.log(fullName[0]);  // Output: 'A'
        console.log(fullName[5]);  // Output: 'l'
        console.log(fullName[fullName.length - 1]);  // Output: 'r'
        
        ```
        
    
    ### 5. **String Comparison**
    
    - Strings can be compared using relational operators:
        
        ```jsx
        console.log('Abdulaziz' > "Diyorbek");  // Output: false
        console.log('a' > 'Z');  // Output: true
        console.log("Z".codePointAt());  // Output: 90
        console.log("z".codePointAt());  // Output: 122
        console.log(String.fromCharCode(109));  // Output: 'm'
        
        ```
        
    
    ### 6. **Iteration Over Strings**
    
    - **For Loop**:
        
        ```jsx
        let str = "Abdulaziz Programmer";
        for (let i = 0; i < str.length; i++) {
          console.log(str[i]);
        }
        
        ```
        
    - **For-In Loop**:
        
        ```jsx
        for (i in str) {
          console.log(i);
        }
        
        ```
        
    - **For-Of Loop**:
        
        ```jsx
        for (el of str) {
          console.log(el);
        }
        
        ```
        
    
    ### 7. **Spread Operator**
    
    - Convert a string into an array of characters:
        
        ```jsx
        let str = "Abdulaziz Programmer";
        let arr = [...str];
        console.log(arr);
        
        ```
        
    
    ### 8. **String Methods**
    
    - **slice(startIndex, endIndex)**:
        - Extracts part of a string and returns it as a new string:
            
            ```jsx
            let str = "Hello, World!";
            console.log(str.slice(0, 5));  // Output: 'Hello'
            
            ```
            
    - **toLowerCase()** and **toUpperCase()**:
        - Converts the string to lower or upper case:
            
            ```jsx
            console.log(str.toLowerCase());  // Output: 'hello, world!'
            console.log(str.toUpperCase());  // Output: 'HELLO, WORLD!'
            
            ```
            
    - **trim()**, **trimStart()**, **trimEnd()**:
        - Removes whitespace from both ends, start, or end of a string:
            
            ```jsx
            let str = "   Hello, World!   ";
            console.log(str.trim());  // Output: 'Hello, World!'
            
            ```
            
    - **split()**:
        - Splits a string into an array based on a separator:
            
            ```jsx
            let str = "Hello, World!";
            console.log(str.split(", "));  // Output: ['Hello', 'World!']
            
            ```
            
    
    ### 9. **Search Methods**
    
    - **startsWith(), endsWith(), includes()**:
        - Checks if a string starts with, ends with, or contains a specific substring:
            
            ```jsx
            let str = "Hello, World!";
            console.log(str.startsWith("Hello"));  // Output: true
            console.log(str.endsWith("World!"));  // Output: true
            console.log(str.includes("World"));  // Output: true
            
            ```
            
    
    ### 10. **`eval()`**
    
    - Evaluates a string as JavaScript code:
        
        ```jsx
        let exp = '(12 - 4 + 6 * 3) / 2';
        let res = eval(exp);
        console.log(res);  // Output: 11
        
        ```
        
    
    ### 11. **Regex (Regular Expressions)**
    
    - **Syntax:**
        - Can be created using slashes `/` or the `RegExp` constructor:
            
            ```jsx
            const regex1 = /[a-z]/gi;
            const regex2 = new RegExp('[a-z]', 'gi');
            
            ```
            
    - **Flags**:
        - `g` for global, `i` for case-insensitive, `m` for multiline.
    - **Character Classes**:
        - Define patterns to match characters like digits (`\\d`), word characters (`\\w`), etc.
    - **Quantifiers**:
        - Control the number of matches like `n+`, `n*`, `n{X}`, etc.
    - **Examples**:
        - Match an email:
            
            ```jsx
            const emailRegex = /^(\\w+)@(\\w+)\\.([a-z]{2,8})([\\.a-z]{2,8})?$/;
            
            ```
            
    
    ### 12. **UTF-16 Encoding**
    
    - JavaScript uses UTF-16 encoding for strings, which means each character is represented by one or two 16-bit code units.
    
    ### Practical Exercises
    
    1. **String Manipulation:**
        - Write a function that takes a full name and returns the initials.
        - Convert a string to title case.
    2. **Regex Validation:**
        - Create a function that validates an email address using a regular expression.
        - Write a regex to validate Uzbek phone numbers.
    
    By understanding these topics and practicing the provided exercises, you'll gain a solid grasp of JavaScript strings.
