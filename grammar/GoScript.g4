grammar GoScript;
import GoScriptRules;

// Start
big_bang:       GO CBRACEO content? CBRACEC SCOLON;

// Allowed content
content:        (says | displays)+                                           #GoContent
;

//Declaration diferent types of variables
says:           SAYS NUMBER assignation                                      #ExpreDeclarationInteger
    |           SAYS NUMBER ID SCOLON                                        #DeclarationInteger
;

// Assignation to an existing variable
// ToDo: String or character assgins
assignation:    ID EQU expre SCOLON                                          #ExpreAssign
    |           ID EQU DQUOTE CHARAS DQUOTE                                  #CharacterAssgin
;

// printf equivalent function
displays:       DISPLAYS BRACEO TTX NEWLINE? BRACEC SCOLON                   #DisplaysText
    // |           DISPLAYS BRACEO expre NEWLINE? BRACEC SCOLON                 #DisplaysExpression
    |           DISPLAYS BRACEO ID NEWLINE? BRACEC SCOLON                    #DisplaysVariable
;

// Aritmetical expression
expre:          expre operation=(STAR | DIAGO) expre                         #MultDiv
    |           expre operation=(SUM | RES) expre                            #SumRes
    |           INT                                                          #Int
    |           ID                                                           #Id
    |           PO expre PC                                                  #Parenthesis
;
