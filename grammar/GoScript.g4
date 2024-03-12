grammar GoScript;
import GoScriptRules;

// Start
big_bang:       GO CBRACEO content? CBRACEC SCOLON;

// Allowed content
// content:        (says)+                                                      #StatesVariable
//     |           (displays)+                                                  #PrintsOnDisplay
// ;
content:        (says | displays)+                                           #GoContent
;

//Declaration diferent types of variables
says:           SAYS NUMBER assignation                                      #ExpreDeclarationInteger
    |           SAYS NUMBER ID SCOLON                                        #DeclarationInteger
;

// Assignation to an existing variable
assignation:    ID EQU expre SCOLON                                          #ExpreAssign
    |           ID EQU DQUOTE CHARAS DQUOTE                                  #CharacterAssgin
;

// printf equivalent function
// displays:       DISPLAYS BRACEO DQUOTE TTX NEWLINE? DQUOTE BRACEC SCOLON    #DisplaysText
// displays:       DISPLAYS BRACEO DQUOTE 'ALGO' DQUOTE BRACEC SCOLON    #DisplaysText
displays:       DISPLAYS BRACEO TTX NEWLINE? BRACEC SCOLON                   #DisplaysText
;

// Aritmetical expression
expre:          expre operation=(STAR | DIAGO) expre                         #MultDiv
    |           expre operation=(SUM | RES) expre                            #SumRes
    |           INT                                                          #Int
    |           ID                                                           #Id
    |           PO expre PC                                                  #Parenthesis
;
