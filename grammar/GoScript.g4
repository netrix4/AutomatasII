grammar GoScript;
import GoScriptRules;

// Start
big_bang:       GO CBRACEO content? CBRACEC SCOLON;

// Allowed content
content:        (says)+                                                      #StatesVariable
    |           (displays)+                                                  #DisplaysText
;

//Declaration diferent types of variables
says:           SAYS NUMBER assignation                                      #ExpreDeclarationInteger
    |           SAYS NUMBER ID                                               #NoSColonDeclarationInteger
    |           SAYS NUMBER ID SCOLON                                        #DeclarationInteger
    |           SAYS NUMBER INT SCOLON                                       #IntWrongDeclarationInteger
    |           SAYS NUMBER expre SCOLON                                     #ExpreWrongDeclarationInteger
;

// printf equivalent function
displays:       DISPLAYS BRACEO DQUOTE TEXT NEWLINE? DQUOTE BRACEC SCOLON    #Text
;

// Assignation to an existing variable
assignation:    ID EQU expre SCOLON                                          #ExpreAssign
    |           ID EQU DQUOTE CHARAS DQUOTE                                  #CharacterAssgin
;

// Aritmetical expression
expre:          expre operation=(STAR | DIAGO) expre                         #MultDiv
    |           expre operation=(SUM | RES) expre                            #SumRes
    |           INT                                                          #Int
    |           ID                                                           #Id
    |           PO expre PC                                                  #Parenthesis
;
