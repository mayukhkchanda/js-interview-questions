/*
    Arrow functions donot have their own 'this' binding and bind the 
    'this' scope to the lexical environment. This means arrow functions
    bind 'this' to the scope in which they are defined. 
    Where as in,
    Normal functions the binding of 'this' is derived from the context
    in which they are called. Examples follow to illustrate this.
    Hence, arrow functions are not suitable for methods.
*/

const obj = {
  offset: 10,
  getOffsetArrow: (val) => {
    //       console.log( this, this.offset);
    return this.offset + val;
  },
  getOffsetNormal: function (val) {
    //       console.log(this, this.offset);
    return this.offset + val;
  },
};

/* as arrow function dont have their own 'this' binding, the 'this'
   inside the function points to the lexical scope i.e. the 'window'
   object in this case. As offset is not defined in the window object
   hence we get 'NaN' as result.
*/
document
  .getElementById("arrow-function-result-1")
  .addEventListener("click", () =>
    window.alert("Obj.getOffsetArrow() result: " + obj.getOffsetArrow(20))
  );
/* 
  as normal functions get their 'this' binding from the context
   in which they are called, thus as the 'getOffsetNormal' is called
   on the 'obj' object, so the 'offset' refers to the offset of the
   object.
*/
document
  .getElementById("normal-function-result-1")
  .addEventListener("click", () =>
    window.alert("Obj.getOffsetArrow() result: " + obj.getOffsetNormal(20))
  );

// ---------------------------------------------------------------------------------
// 'call', 'apply', 'bind' methods & arrow functions don't go hand in hand

const objToBind = {
  name: "Person Object",
};

window.name = "Window Object";

/*
   with normal functions as the scope is defined by the context
   'call', 'apply', 'bind' methods work as expected.
*/
function logger(x, y) {
  return this.name + " " + x + " " + y;
}

const boundLogger = logger.bind(objToBind);

document
  .getElementById("call-normal")
  .addEventListener("click", () =>
    window.alert("Result: " + logger.call(objToBind, 1, 2))
  );
document
  .getElementById("apply-normal")
  .addEventListener("click", () =>
    window.alert("Result: " + logger.apply(objToBind, [3, 4]))
  );
document
  .getElementById("bind-normal")
  .addEventListener("click", () =>
    window.alert("Result: " + boundLogger(5, 6))
  );

/* 
  with arrow functions as the 'this' is bound to the lexical scope,
  thus the 'name' property is refering to the outer scope's 'name'
  variable i.e. the window object in this case. And as we've defined
  'name' on the window object earlier, hence that is used here.
*/

const arrowLogger = (x, y) => {
  return this.name + " " + x + " " + y;
};

const boundLoggerArrow = arrowLogger.bind(objToBind);

document
  .getElementById("call-arrow")
  .addEventListener("click", () =>
    window.alert("Result: " + arrowLogger.call(objToBind, 1, 2))
  );
document
  .getElementById("apply-arrow")
  .addEventListener("click", () =>
    window.alert("Result: " + arrowLogger.apply(objToBind, [3, 4]))
  );
document
  .getElementById("bind-arrow")
  .addEventListener("click", () =>
    window.alert("Result: " + boundLoggerArrow(5, 6))
  );

// ---------------------------------------------------------------------------------
//Normal functions & setTimeout

const mockService_Broken = {
  data: 10,
  getData: function () {
    setTimeout(function () {
      window.alert("mockService_Broken.getData(): " + this.data);
    }, 2000);
  },
};

/*
  Normal function bind their 'this' to the context in which they are called.
  As timeouts are called in the global/window context, thus as 'data' is not
  defined in global/window object, hence we get undefined.
*/
document
  .getElementById("setTimeout-normal")
  .addEventListener("click", () => mockService_Broken.getData());

//Arrow functions & setTimeout
const mockService_Ok = {
  data: 10,
  getData: function () {
    setTimeout(() => {
      window.alert("mockService_Ok.getData(): " + this.data);
    }, 2000);
  },
};
/*
  Arrow function bind their 'this' to lexical environment in which they  
  are declared(window/global object if there's not any) irrespective of 
  the calling context. Thus, even if the setTimeout callback is called 
  in the window context, the 'this' is bound to the context in which
  they are declared. Thus, 'this.data' references the 'data' property
  of the 'mockService_Ok' object
*/
document
  .getElementById("setTimeout-arrow")
  .addEventListener("click", () => mockService_Ok.getData());
