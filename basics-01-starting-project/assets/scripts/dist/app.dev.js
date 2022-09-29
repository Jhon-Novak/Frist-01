"use strict";
//s1

var defaultResult = 0;
var currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 / 2 - 1;
var calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
outputResult(currentResult, calculationDescription);
//# sourceMappingURL=app.dev.js.map
//on the right side of the "=" we're referring to current result. you could say :
// we're reading (using) its current value;