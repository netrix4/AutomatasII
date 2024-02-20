grammar GoScript;
import GoScriptRules;

// Start
big_bang:  GO CBRACEO content? CBRACEC SCOLON;

// Allowed content
content:  (says NEWLINE)+                                         #WrongVariableStating
    |     (says SCOLON NEWLINE?)+                                 #StatesVariable
    |     displays SCOLON NEWLINE?                                #DisplaysText
;

//Declaration diferent types of variables

// Talves si solo acpeto todo en id y luego en CustomVisitor lo 
// filtro con un regex seria mejor
says:      SAYS NUMBER assignation                                 #ExpreDeclarationInteger
    |      SAYS NUMBER ID                                          #DeclarationInteger
    |      SAYS NUMBER INT                                         #IntWrongDeclarationInteger
    |      SAYS NUMBER expre                                       #ExpreWrongDeclarationInteger
    |      SAYS DOTNUM ID                                          #DeclarationFloat
    |      SAYS LETTER ID                                          #DeclarationCharacter
;

// printf equivalent function
displays: DISPLAYS BRACEO DQUOTE TEXT NEWLINE? DQUOTE BRACEC SCOLON    #Text
;

// Assignation to an existing variable
assignation:ID EQU expre SCOLON                                    #NumberAssign
    |      ID EQU DQUOTE CHARAS DQUOTE SCOLON                      #CharacterAssgin
;

// Aritmetical expression
expre:     expre operation=(STAR|DIAGO) expre                      #MultDiv
    |      expre operation=(SUM|RES) expre                         #SumRes
    |      INT                                                     #Int
    |      FLOAT                                                   #Float
    |      PO expre PC                                             #Parenthesis
    |      ID                                                      #Id
;
