grammar BigBang;
import BigBangRules;

BigBang:  GO CBRACEO content? CBRACEC SCOLON
;

content:    display SCOLON                          #DisplaysText
    |       says SCOLON                             #StatesVariable
;

display:    RW '[' DISPLAYEDTEXT ']'                  #Text
;

says:       RW ID EQU expre
;

expre:      expre operation=(STAR|DIAGO) expre     #MultDiv
    |       expre operation=(SUM|RES) expre        #SumRes
    |       INT                                    #Int
    |       PO expre PC                            #Parenthesis
    |       ID                                     #Id
;
