lexer grammar GoScriptRules;

WS : [ \t\n\r]+ -> skip;
// Reserved Words
GO: 'go';
DOTNUM: 'dotnum';
NUMBER: 'number';
LETTER: 'letter';
LETTERSTR: 'letterstr';
SAYS: 'says';
DISPLAYS: 'displays';

// Symbols
ID : [a-zA-Z]+;
NO_ID : [^a-zA-Z]+;
CHARAS: [a-zA-Z]+;
DIGIT: [0-9];
INT: DIGIT+;
FLOAT: '-'? DIGIT+ ('.' DIGIT+);

DISPLAYEDTEXT: [a-zA-Z0-9]+;
CBRACEO: '{';
CBRACEC: '}';
SCOLON: ';';
EQU: '=';
STAR: '*';
DIAGO: '/';
SUM: '+';
RES: '-';
PO: '(';
PC: ')';
DQUOTE: '"';
BRACEO: '[';
BRACEC: ']';
TEXT: (.)+?;


// Ignoring rules
// NEWLINE: '\r'? '\n';
// WS: [ \t]+ -> skip;
NEWLINE: [\r\n]+;