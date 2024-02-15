lexer grammar BigBangRules;

ID : [A-Za-z]+;
INT: [0-9]+;
GO: 'go' | 'GO';
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
RW: 'display' 'says';
NL: '\r'? '\n';

WS: [\t]+ -> skip;