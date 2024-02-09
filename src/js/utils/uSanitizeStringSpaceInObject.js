 //  sanitize form data via providing underscore to string data 
 const replaceSpaces = str => str.replaceAll(' ', '_')

//  Return new object with sanitized strings
// can accept function as second argument
export  const sanitizeStringSpaceInObject = (obj, foo = replaceSpaces) => {
     return Object.fromEntries(
       Object.entries(obj).map(([key, value]) => [key, foo(value)])
     )
 }
