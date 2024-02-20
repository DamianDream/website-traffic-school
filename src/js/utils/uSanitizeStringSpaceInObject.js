 //  Sanitize form data via replace spaces for underscore
//  Return new object with sanitized strings
export  const sanitizeStringSpaceInObject = (obj) => {
     return Object.fromEntries(
       Object.entries(obj).map(([key, value]) => [key, value.replaceAll(' ', '_')])
     )
 }
