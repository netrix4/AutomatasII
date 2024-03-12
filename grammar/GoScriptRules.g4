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
INT: [0-9]+;
NO_ID : [^a-zA-Z]+;
CHARAS: [a-zA-Z]+;

DISPLAYEDTEXT: [a-zA-Z0-9]+;
CBRACEO: '{';
CBRACEC: '}';
TTX: DQUOTE[a-zA-Z0-9 ]+DQUOTE;
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

// Ignoring rules
NEWLINE: [\r\n]+;