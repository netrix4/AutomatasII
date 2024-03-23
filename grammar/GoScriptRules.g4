lexer grammar GoScriptRules;

WS : [ \t\n\r]+ -> skip;
// Reserved Words
GO: 'go' | 'GO';
DOTNUM: 'dotnum';
NUMBER: 'number'|'NUMBER';
LETTER: 'letter';
LETTERSTR: 'letterstr'|'LETTERSTR';
SAYS: 'says'|'SAYS';
DISPLAYS: 'displays'|'DISPLAYS';
IF: 'if'|'IF';
TRUE: 'true' | 'TRUE';
FALSE: 'false' | 'FALSE';

// Symbols
ID : [a-zA-Z]+;
INT: [0-9]+;
NO_ID : [^a-zA-Z]+;
CHARAS: [a-zA-Z]+;

DISPLAYEDTEXT: [a-zA-Z0-9]+;
CBRACEO: '{';
CBRACEC: '}';
TTX: DQUOTE(.)+?DQUOTE;
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
GREATERTHAN: '>';
LESSTHAN: '<';

// Ignoring rules
NEWLINE: [\r\n]+;