grammar ArrayInit;
import ArrayInitRules;

init : '{' value (',' value)* '}' ;
value : init
      | INT
      ;
