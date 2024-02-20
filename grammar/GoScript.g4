grammar GoScript;
import GoScriptRules;

//Start
big_bang:  GO CBRACEO content? CBRACEC SCOLON;

//Allowed content
content:  (says SCOLON NEWLINE?)+                                 #StatesVariable
    |     displays SCOLON NEWLINE?                                #DisplaysText
;

//Declaration diferent types of variables
says:      SAYS NUMBER ID                                          #DeclarationInteger
    |      SAYS DOTNUM ID                                          #DeclarationFloat
    |      SAYS LETTER ID                                          #DeclarationCharacter
;

//printf equivalent function
displays: DISPLAYS BRACEO DQUOTE TEXT NEWLINE? DQUOTE BRACEC SCOLON    #Text
;

//Assignation to an existing variable
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
