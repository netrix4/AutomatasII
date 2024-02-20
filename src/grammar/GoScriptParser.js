// Generated from ./grammar/GoScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GoScriptVisitor from './GoScriptVisitor.js';

const serializedATN = [4,1,30,111,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,1,0,1,0,1,0,3,0,16,8,0,1,0,1,0,1,0,1,1,1,1,1,1,4,1,24,8,1,11,1,
12,1,25,1,1,1,1,1,1,3,1,31,8,1,4,1,33,8,1,11,1,12,1,34,1,1,1,1,1,1,3,1,40,
8,1,3,1,42,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,3,2,64,8,2,1,3,1,3,1,3,1,3,1,3,3,3,71,8,3,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,88,8,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,3,5,98,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,106,8,5,10,
5,12,5,109,9,5,1,5,0,1,10,6,0,2,4,6,8,10,0,2,1,0,20,21,1,0,22,23,123,0,12,
1,0,0,0,2,41,1,0,0,0,4,63,1,0,0,0,6,65,1,0,0,0,8,87,1,0,0,0,10,97,1,0,0,
0,12,13,5,2,0,0,13,15,5,16,0,0,14,16,3,2,1,0,15,14,1,0,0,0,15,16,1,0,0,0,
16,17,1,0,0,0,17,18,5,17,0,0,18,19,5,18,0,0,19,1,1,0,0,0,20,21,3,4,2,0,21,
22,5,30,0,0,22,24,1,0,0,0,23,20,1,0,0,0,24,25,1,0,0,0,25,23,1,0,0,0,25,26,
1,0,0,0,26,42,1,0,0,0,27,28,3,4,2,0,28,30,5,18,0,0,29,31,5,30,0,0,30,29,
1,0,0,0,30,31,1,0,0,0,31,33,1,0,0,0,32,27,1,0,0,0,33,34,1,0,0,0,34,32,1,
0,0,0,34,35,1,0,0,0,35,42,1,0,0,0,36,37,3,6,3,0,37,39,5,18,0,0,38,40,5,30,
0,0,39,38,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,23,1,0,0,0,41,32,1,0,0,
0,41,36,1,0,0,0,42,3,1,0,0,0,43,44,5,7,0,0,44,45,5,4,0,0,45,46,5,9,0,0,46,
47,5,19,0,0,47,64,3,10,5,0,48,49,5,7,0,0,49,50,5,4,0,0,50,64,5,9,0,0,51,
52,5,7,0,0,52,53,5,4,0,0,53,64,5,13,0,0,54,55,5,7,0,0,55,56,5,4,0,0,56,64,
3,10,5,0,57,58,5,7,0,0,58,59,5,3,0,0,59,64,5,9,0,0,60,61,5,7,0,0,61,62,5,
5,0,0,62,64,5,9,0,0,63,43,1,0,0,0,63,48,1,0,0,0,63,51,1,0,0,0,63,54,1,0,
0,0,63,57,1,0,0,0,63,60,1,0,0,0,64,5,1,0,0,0,65,66,5,8,0,0,66,67,5,27,0,
0,67,68,5,26,0,0,68,70,5,29,0,0,69,71,5,30,0,0,70,69,1,0,0,0,70,71,1,0,0,
0,71,72,1,0,0,0,72,73,5,26,0,0,73,74,5,28,0,0,74,75,5,18,0,0,75,7,1,0,0,
0,76,77,5,9,0,0,77,78,5,19,0,0,78,79,3,10,5,0,79,80,5,18,0,0,80,88,1,0,0,
0,81,82,5,9,0,0,82,83,5,19,0,0,83,84,5,26,0,0,84,85,5,11,0,0,85,86,5,26,
0,0,86,88,5,18,0,0,87,76,1,0,0,0,87,81,1,0,0,0,88,9,1,0,0,0,89,90,6,5,-1,
0,90,98,5,13,0,0,91,98,5,14,0,0,92,93,5,24,0,0,93,94,3,10,5,0,94,95,5,25,
0,0,95,98,1,0,0,0,96,98,5,9,0,0,97,89,1,0,0,0,97,91,1,0,0,0,97,92,1,0,0,
0,97,96,1,0,0,0,98,107,1,0,0,0,99,100,10,6,0,0,100,101,7,0,0,0,101,106,3,
10,5,7,102,103,10,5,0,0,103,104,7,1,0,0,104,106,3,10,5,6,105,99,1,0,0,0,
105,102,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,11,1,
0,0,0,109,107,1,0,0,0,12,15,25,30,34,39,41,63,70,87,97,105,107];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GoScriptParser extends antlr4.Parser {

    static grammarFileName = "GoScript.g4";
    static literalNames = [ null, null, "'go'", "'dotnum'", "'number'", 
                            "'letter'", "'letterstr'", "'says'", "'displays'", 
                            null, null, null, null, null, null, null, "'{'", 
                            "'}'", "';'", "'='", "'*'", "'/'", "'+'", "'-'", 
                            "'('", "')'", "'\"'", "'['", "']'" ];
    static symbolicNames = [ null, "WS", "GO", "DOTNUM", "NUMBER", "LETTER", 
                             "LETTERSTR", "SAYS", "DISPLAYS", "ID", "NO_ID", 
                             "CHARAS", "DIGIT", "INT", "FLOAT", "DISPLAYEDTEXT", 
                             "CBRACEO", "CBRACEC", "SCOLON", "EQU", "STAR", 
                             "DIAGO", "SUM", "RES", "PO", "PC", "DQUOTE", 
                             "BRACEO", "BRACEC", "TEXT", "NEWLINE" ];
    static ruleNames = [ "big_bang", "content", "says", "displays", "assignation", 
                         "expre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GoScriptParser.ruleNames;
        this.literalNames = GoScriptParser.literalNames;
        this.symbolicNames = GoScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expre_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expre_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	big_bang() {
	    let localctx = new Big_bangContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GoScriptParser.RULE_big_bang);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(GoScriptParser.GO);
	        this.state = 13;
	        this.match(GoScriptParser.CBRACEO);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7 || _la===8) {
	            this.state = 14;
	            this.content();
	        }

	        this.state = 17;
	        this.match(GoScriptParser.CBRACEC);
	        this.state = 18;
	        this.match(GoScriptParser.SCOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GoScriptParser.RULE_content);
	    var _la = 0;
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new WrongVariableStatingContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 20;
	                this.says();
	                this.state = 21;
	                this.match(GoScriptParser.NEWLINE);
	                this.state = 25; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===7);
	            break;

	        case 2:
	            localctx = new StatesVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 27;
	                this.says();
	                this.state = 28;
	                this.match(GoScriptParser.SCOLON);
	                this.state = 30;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===30) {
	                    this.state = 29;
	                    this.match(GoScriptParser.NEWLINE);
	                }

	                this.state = 34; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===7);
	            break;

	        case 3:
	            localctx = new DisplaysTextContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.displays();
	            this.state = 37;
	            this.match(GoScriptParser.SCOLON);
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 38;
	                this.match(GoScriptParser.NEWLINE);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	says() {
	    let localctx = new SaysContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GoScriptParser.RULE_says);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExpreDeclarationIntegerContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.match(GoScriptParser.SAYS);
	            this.state = 44;
	            this.match(GoScriptParser.NUMBER);
	            this.state = 45;
	            this.match(GoScriptParser.ID);
	            this.state = 46;
	            this.match(GoScriptParser.EQU);
	            this.state = 47;
	            this.expre(0);
	            break;

	        case 2:
	            localctx = new DeclarationIntegerContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.match(GoScriptParser.SAYS);
	            this.state = 49;
	            this.match(GoScriptParser.NUMBER);
	            this.state = 50;
	            this.match(GoScriptParser.ID);
	            break;

	        case 3:
	            localctx = new IntWrongDeclarationIntegerContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(GoScriptParser.SAYS);
	            this.state = 52;
	            this.match(GoScriptParser.NUMBER);
	            this.state = 53;
	            this.match(GoScriptParser.INT);
	            break;

	        case 4:
	            localctx = new ExpreWrongDeclarationIntegerContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.match(GoScriptParser.SAYS);
	            this.state = 55;
	            this.match(GoScriptParser.NUMBER);
	            this.state = 56;
	            this.expre(0);
	            break;

	        case 5:
	            localctx = new DeclarationFloatContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 57;
	            this.match(GoScriptParser.SAYS);
	            this.state = 58;
	            this.match(GoScriptParser.DOTNUM);
	            this.state = 59;
	            this.match(GoScriptParser.ID);
	            break;

	        case 6:
	            localctx = new DeclarationCharacterContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 60;
	            this.match(GoScriptParser.SAYS);
	            this.state = 61;
	            this.match(GoScriptParser.LETTER);
	            this.state = 62;
	            this.match(GoScriptParser.ID);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	displays() {
	    let localctx = new DisplaysContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GoScriptParser.RULE_displays);
	    var _la = 0;
	    try {
	        localctx = new TextContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(GoScriptParser.DISPLAYS);
	        this.state = 66;
	        this.match(GoScriptParser.BRACEO);
	        this.state = 67;
	        this.match(GoScriptParser.DQUOTE);
	        this.state = 68;
	        this.match(GoScriptParser.TEXT);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 69;
	            this.match(GoScriptParser.NEWLINE);
	        }

	        this.state = 72;
	        this.match(GoScriptParser.DQUOTE);
	        this.state = 73;
	        this.match(GoScriptParser.BRACEC);
	        this.state = 74;
	        this.match(GoScriptParser.SCOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignation() {
	    let localctx = new AssignationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GoScriptParser.RULE_assignation);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumberAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.match(GoScriptParser.ID);
	            this.state = 77;
	            this.match(GoScriptParser.EQU);
	            this.state = 78;
	            this.expre(0);
	            this.state = 79;
	            this.match(GoScriptParser.SCOLON);
	            break;

	        case 2:
	            localctx = new CharacterAssginContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.match(GoScriptParser.ID);
	            this.state = 82;
	            this.match(GoScriptParser.EQU);
	            this.state = 83;
	            this.match(GoScriptParser.DQUOTE);
	            this.state = 84;
	            this.match(GoScriptParser.CHARAS);
	            this.state = 85;
	            this.match(GoScriptParser.DQUOTE);
	            this.state = 86;
	            this.match(GoScriptParser.SCOLON);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expre(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpreContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, GoScriptParser.RULE_expre, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 90;
	            this.match(GoScriptParser.INT);
	            break;
	        case 14:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.match(GoScriptParser.FLOAT);
	            break;
	        case 24:
	            localctx = new ParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            this.match(GoScriptParser.PO);
	            this.state = 93;
	            this.expre(0);
	            this.state = 94;
	            this.match(GoScriptParser.PC);
	            break;
	        case 9:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 96;
	            this.match(GoScriptParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 105;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ExpreContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GoScriptParser.RULE_expre);
	                    this.state = 99;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 100;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===20 || _la===21)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 101;
	                    this.expre(7);
	                    break;

	                case 2:
	                    localctx = new SumResContext(this, new ExpreContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GoScriptParser.RULE_expre);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 103;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===22 || _la===23)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 104;
	                    this.expre(6);
	                    break;

	                } 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

GoScriptParser.EOF = antlr4.Token.EOF;
GoScriptParser.WS = 1;
GoScriptParser.GO = 2;
GoScriptParser.DOTNUM = 3;
GoScriptParser.NUMBER = 4;
GoScriptParser.LETTER = 5;
GoScriptParser.LETTERSTR = 6;
GoScriptParser.SAYS = 7;
GoScriptParser.DISPLAYS = 8;
GoScriptParser.ID = 9;
GoScriptParser.NO_ID = 10;
GoScriptParser.CHARAS = 11;
GoScriptParser.DIGIT = 12;
GoScriptParser.INT = 13;
GoScriptParser.FLOAT = 14;
GoScriptParser.DISPLAYEDTEXT = 15;
GoScriptParser.CBRACEO = 16;
GoScriptParser.CBRACEC = 17;
GoScriptParser.SCOLON = 18;
GoScriptParser.EQU = 19;
GoScriptParser.STAR = 20;
GoScriptParser.DIAGO = 21;
GoScriptParser.SUM = 22;
GoScriptParser.RES = 23;
GoScriptParser.PO = 24;
GoScriptParser.PC = 25;
GoScriptParser.DQUOTE = 26;
GoScriptParser.BRACEO = 27;
GoScriptParser.BRACEC = 28;
GoScriptParser.TEXT = 29;
GoScriptParser.NEWLINE = 30;

GoScriptParser.RULE_big_bang = 0;
GoScriptParser.RULE_content = 1;
GoScriptParser.RULE_says = 2;
GoScriptParser.RULE_displays = 3;
GoScriptParser.RULE_assignation = 4;
GoScriptParser.RULE_expre = 5;

class Big_bangContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_big_bang;
    }

	GO() {
	    return this.getToken(GoScriptParser.GO, 0);
	};

	CBRACEO() {
	    return this.getToken(GoScriptParser.CBRACEO, 0);
	};

	CBRACEC() {
	    return this.getToken(GoScriptParser.CBRACEC, 0);
	};

	SCOLON() {
	    return this.getToken(GoScriptParser.SCOLON, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitBig_bang(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_content;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StatesVariableContext extends ContentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	says = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SaysContext);
	    } else {
	        return this.getTypedRuleContext(SaysContext,i);
	    }
	};

	SCOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GoScriptParser.SCOLON);
	    } else {
	        return this.getToken(GoScriptParser.SCOLON, i);
	    }
	};


	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GoScriptParser.NEWLINE);
	    } else {
	        return this.getToken(GoScriptParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitStatesVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.StatesVariableContext = StatesVariableContext;

class DisplaysTextContext extends ContentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	displays() {
	    return this.getTypedRuleContext(DisplaysContext,0);
	};

	SCOLON() {
	    return this.getToken(GoScriptParser.SCOLON, 0);
	};

	NEWLINE() {
	    return this.getToken(GoScriptParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitDisplaysText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.DisplaysTextContext = DisplaysTextContext;

class WrongVariableStatingContext extends ContentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	says = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SaysContext);
	    } else {
	        return this.getTypedRuleContext(SaysContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GoScriptParser.NEWLINE);
	    } else {
	        return this.getToken(GoScriptParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitWrongVariableStating(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.WrongVariableStatingContext = WrongVariableStatingContext;

class SaysContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_says;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclarationCharacterContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	LETTER() {
	    return this.getToken(GoScriptParser.LETTER, 0);
	};

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitDeclarationCharacter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.DeclarationCharacterContext = DeclarationCharacterContext;

class DeclarationIntegerContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	NUMBER() {
	    return this.getToken(GoScriptParser.NUMBER, 0);
	};

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitDeclarationInteger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.DeclarationIntegerContext = DeclarationIntegerContext;

class ExpreWrongDeclarationIntegerContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	NUMBER() {
	    return this.getToken(GoScriptParser.NUMBER, 0);
	};

	expre() {
	    return this.getTypedRuleContext(ExpreContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitExpreWrongDeclarationInteger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ExpreWrongDeclarationIntegerContext = ExpreWrongDeclarationIntegerContext;

class DeclarationFloatContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	DOTNUM() {
	    return this.getToken(GoScriptParser.DOTNUM, 0);
	};

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitDeclarationFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.DeclarationFloatContext = DeclarationFloatContext;

class ExpreDeclarationIntegerContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	NUMBER() {
	    return this.getToken(GoScriptParser.NUMBER, 0);
	};

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	EQU() {
	    return this.getToken(GoScriptParser.EQU, 0);
	};

	expre() {
	    return this.getTypedRuleContext(ExpreContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitExpreDeclarationInteger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ExpreDeclarationIntegerContext = ExpreDeclarationIntegerContext;

class IntWrongDeclarationIntegerContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	NUMBER() {
	    return this.getToken(GoScriptParser.NUMBER, 0);
	};

	INT() {
	    return this.getToken(GoScriptParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitIntWrongDeclarationInteger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.IntWrongDeclarationIntegerContext = IntWrongDeclarationIntegerContext;

class DisplaysContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_displays;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TextContext extends DisplaysContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DISPLAYS() {
	    return this.getToken(GoScriptParser.DISPLAYS, 0);
	};

	BRACEO() {
	    return this.getToken(GoScriptParser.BRACEO, 0);
	};

	DQUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GoScriptParser.DQUOTE);
	    } else {
	        return this.getToken(GoScriptParser.DQUOTE, i);
	    }
	};


	TEXT() {
	    return this.getToken(GoScriptParser.TEXT, 0);
	};

	BRACEC() {
	    return this.getToken(GoScriptParser.BRACEC, 0);
	};

	SCOLON() {
	    return this.getToken(GoScriptParser.SCOLON, 0);
	};

	NEWLINE() {
	    return this.getToken(GoScriptParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.TextContext = TextContext;

class AssignationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_assignation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumberAssignContext extends AssignationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	EQU() {
	    return this.getToken(GoScriptParser.EQU, 0);
	};

	expre() {
	    return this.getTypedRuleContext(ExpreContext,0);
	};

	SCOLON() {
	    return this.getToken(GoScriptParser.SCOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitNumberAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.NumberAssignContext = NumberAssignContext;

class CharacterAssginContext extends AssignationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	EQU() {
	    return this.getToken(GoScriptParser.EQU, 0);
	};

	DQUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GoScriptParser.DQUOTE);
	    } else {
	        return this.getToken(GoScriptParser.DQUOTE, i);
	    }
	};


	CHARAS() {
	    return this.getToken(GoScriptParser.CHARAS, 0);
	};

	SCOLON() {
	    return this.getToken(GoScriptParser.SCOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitCharacterAssgin(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.CharacterAssginContext = CharacterAssginContext;

class ExpreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_expre;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SumResContext extends ExpreContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expre = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpreContext);
	    } else {
	        return this.getTypedRuleContext(ExpreContext,i);
	    }
	};

	SUM() {
	    return this.getToken(GoScriptParser.SUM, 0);
	};

	RES() {
	    return this.getToken(GoScriptParser.RES, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitSumRes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.SumResContext = SumResContext;

class FloatContext extends ExpreContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(GoScriptParser.FLOAT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.FloatContext = FloatContext;

class ParenthesisContext extends ExpreContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PO() {
	    return this.getToken(GoScriptParser.PO, 0);
	};

	expre() {
	    return this.getTypedRuleContext(ExpreContext,0);
	};

	PC() {
	    return this.getToken(GoScriptParser.PC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitParenthesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ParenthesisContext = ParenthesisContext;

class IdContext extends ExpreContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.IdContext = IdContext;

class IntContext extends ExpreContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(GoScriptParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.IntContext = IntContext;

class MultDivContext extends ExpreContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expre = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpreContext);
	    } else {
	        return this.getTypedRuleContext(ExpreContext,i);
	    }
	};

	STAR() {
	    return this.getToken(GoScriptParser.STAR, 0);
	};

	DIAGO() {
	    return this.getToken(GoScriptParser.DIAGO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitMultDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.MultDivContext = MultDivContext;


GoScriptParser.Big_bangContext = Big_bangContext; 
GoScriptParser.ContentContext = ContentContext; 
GoScriptParser.SaysContext = SaysContext; 
GoScriptParser.DisplaysContext = DisplaysContext; 
GoScriptParser.AssignationContext = AssignationContext; 
GoScriptParser.ExpreContext = ExpreContext; 
