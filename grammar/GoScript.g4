grammar GoScript;
import GoScriptRules;

// Start
big_bang:       GO CBRACEO content? CBRACEC SCOLON
;

// Allowed content
content:        ( says | displays ) +                                        #GoContent
;

//Declaration diferent types of variables
says:           SAYS datatype=(NUMBER | LETTERSTR) assignation              #ExpreDeclaration
    |           SAYS datatype=(NUMBER | LETTERSTR) ID SCOLON                #DefaultDeclaration
;

// Assignation to an existing variable
assignation:    ID EQU expre SCOLON                                          #ExpreAssign
    |           ID EQU TTX SCOLON                                            #CharacterAssgin
;

// printf equivalent function
displays:       DISPLAYS BRACEO expre NEWLINE? BRACEC SCOLON                 #DisplaysExpression
    |           DISPLAYS BRACEO TTX NEWLINE? BRACEC SCOLON                   #DisplaysText
;

// Aritmetical expression
expre:          expre operation=(STAR | DIAGO) expre                         #MultDiv
    |           expre operation=(SUM | RES) expre                            #SumRes
    |           INT                                                          #Int
    |           ID                                                           #Id
    |           PO expre PC                                                  #Parenthesis
;
