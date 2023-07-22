import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Doubts = () => {
  return (
    <>
          <div style={{backgroundColor:'#1d1a1d'}}>
               <br /> <br />

            <h1 style={{textAlign: 'center' , color: '#f4cb01'}}>Frequently Asked Interview Questions</h1>

          <br /> <br />

    <div className="container d-flex justify-content-center" >
      <div className="accordion accordion-flush col-md-8" id="accordionExample" >
        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What are Promises in JavaScript?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
              Promises are a way to handle asynchronous operations in JavaScript more elegantly than using traditional
              callbacks. They represent a value that may not be available yet but will be resolved in the future, either
              successfully with a value or unsuccessfully with a reason for failure. Promises have three states: pending
              (initial state), fulfilled (resolved with a value), and rejected (rejected with a reason). They provide a
              cleaner and more structured approach to deal with asynchronous operations, avoiding the "callback hell" and
              making it easier to handle success and error cases separately.
            </div>
          </div>
        </div>






        {/* Add 14 more Accordion Items here */}
        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What is the difference between let and var in terms of scope?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            The main difference between let and var lies in their scope. let is block-scoped, which means it's limited to the block where it's declared, such as inside a loop or an if statement. In contrast, var is function-scoped, and its scope is limited to the function where it's declared or, if declared outside any function, to the global scope. Due to block-scoping, using let can help avoid potential issues caused by variable hoisting and unintended variable access.
            </div>
          </div>
        </div>






        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
             How does the spread operator work in ES6?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            The spread operator (...) is used to expand elements from an array or object into another array or object. For arrays, the spread operator can be used to create shallow copies or concatenate arrays easily. For objects, it can be used to create new objects by merging properties from multiple objects. Additionally, the spread operator is useful for converting iterable objects, like strings or NodeLists, into real arrays.
            </div>
          </div>
        </div>







        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What is the purpose of template literals in ES6?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            Template literals are string literals that allow embedded expressions using backticks (``). They are useful for creating strings that span multiple lines without using concatenation or line breaks. Template literals also support interpolation, where expressions enclosed in ${} are evaluated and replaced with their respective values in the resulting string. This makes the code more readable and efficient when constructing dynamic strings.
            </div>
          </div>
        </div>






        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
             What are generators in JavaScript?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            Generators are a special type of function that can be paused and resumed during execution, allowing multiple values to be generated lazily. When called, a generator function returns an iterator, which can be used to control the generator's execution flow. Generators are beneficial for implementing iterative algorithms, lazy data processing, and asynchronous programming with improved readability and control.
            </div>
          </div>
        </div>






        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What are rest parameters in ES6?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            Rest parameters are used in function declarations to represent an indefinite number of arguments as an array. When defining a function, you can use the rest parameter syntax (...args) to capture any remaining arguments passed to the function as an array. Rest parameters are helpful when you want to handle variable-length argument lists more flexibly and conveniently.
            </div>
          </div>
        </div>





        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What are the differences between null and undefined in JavaScript?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            In JavaScript, both null and undefined represent the absence of a value, but they have different use cases. null is an explicit value assigned by the programmer to indicate the absence of a value. On the other hand, undefined is automatically assigned by JavaScript when a variable is declared but not initialized, or when a function has no return statement. Additionally, null is of type 'object', while undefined is of type 'undefined'.
            </div>
          </div>
        </div>







        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
             What are IIFE (Immediately Invoked Function Expressions) and why are they used?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            IIFE (Immediately Invoked Function Expressions) are functions that are defined and executed immediately after being created. They are often wrapped in parentheses to ensure they are treated as expressions rather than function declarations. IIFEs are used to create a private scope for variables, preventing them from polluting the global scope. They were commonly used before block-scoped variables (let and const) were introduced in ES6 to achieve data encapsulation and maintain code readability.
            </div>
          </div>
        </div>



        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What are the benefits of using ES6 modules over traditional script tags for including JavaScript files?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            ES6 modules provide a more organized and modular approach to managing JavaScript code in larger projects. Unlike traditional script tags, ES6 modules support exporting and importing functionality between files, allowing developers to break their code into smaller reusable modules. This helps in better code organization, reduces the risk of global variable clashes, and improves code maintainability and reusability. ES6 modules also support static analysis, which enables modern bundlers and tree-shaking techniques to optimize the final bundle size by removing unused code.
            </div>
          </div>
        </div>



        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What are the benefits of using arrow functions in ES6?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            Arrow functions provide several benefits over traditional function expressions. They have a more concise syntax, making the code cleaner and easier to read. Arrow functions also automatically bind the this context lexically, which means they inherit this from the surrounding code, avoiding the need to use .bind() or store this in a separate variable. Additionally, arrow functions do not create their own arguments object, making them more predictable and suitable for use in functional programming.
            </div>
          </div>
        </div>




        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What is hoisting in JavaScript?
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scope during the compilation phase. However, only the declarations are hoisted, not the initializations. For variables declared with var, their declarations are hoisted but not their initializations, which means they are initialized with undefined until their actual assignment. It's essential to be aware of hoisting to avoid unexpected behavior when accessing variables or functions before their declaration in the code.
            </div>
          </div>
        </div>




        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwelve">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
             What is the difference between == and ===?
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            In JavaScript, == (loose equality) and === (strict equality) are used for comparison. == checks for equality after converting operands to the same type, which can lead to unexpected results due to type coercion. On the other hand, === checks for equality without any type conversion, ensuring that both the value and the type of operands match. It's generally recommended to use === (strict equality) to avoid potential bugs caused by type coercion.
            </div>
          </div>
        </div>




        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThirteen">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThirteen"
              aria-expanded="false"
              aria-controls="collapseThirteen"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What is the difference between let and const?
            </button>
          </h2>
          <div
            id="collapseThirteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingThirteen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            let and const are block-scoped variables introduced in ES6. The main difference between them is that let allows reassignment of values, while const creates variables that cannot be reassigned after their initialization. However, it's important to note that using const doesn't make the variable's content immutable. If the variable holds a reference to an object, you can still modify the object's properties, but you cannot reassign the variable to a different object.
            </div>
          </div>
        </div>
   

         

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFouteen">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFourteen"
              aria-expanded="false"
              aria-controls="collapseFourteen"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
              What is the difference between Object.assign() and the spread operator when cloning objects?
            </button>
          </h2>
          <div
            id="collapseFourteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingFourteen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            Both Object.assign() and the spread operator (...) can be used to create a shallow copy of an object, but they have some differences. Object.assign() copies properties from one or more source objects to a target object, and it overwrites properties with the same name. In contrast, the spread operator creates a new object with the same properties as the original object, but it does not modify the original object. Additionally, the spread operator can be used for shallow merging of objects.
            </div>
          </div>
        </div>




        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFifteen">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFifteen"
              aria-expanded="false"
              aria-controls="collapseFifteen"
              style={{color: 'black', backgroundColor: '#f4cb01'}}
            >
            What is the async and await syntax in ES6?
            </button>
          </h2>
          <div
            id="collapseFifteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingfifteen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: 'whitesmoke', backgroundColor: '#1d1a1d'}}>
            The async and await syntax in ES6 provides a more synchronous-like way to work with Promises. An async function returns a Promise automatically, allowing you to use the await keyword inside it. When you await a Promise inside an async function, JavaScript will pause the execution of the function until the Promise resolves or rejects. This way, you can write asynchronous code in a more readable and linear manner, making it easier to follow the flow of the program.
            </div>
          </div>
        </div>

        {/* Add more Accordion Items as needed */}
        {/* ... */}
      </div>
    </div>
    </div>
    </> 
  );
};

export default Doubts;