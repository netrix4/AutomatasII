// Generated from ./grammar/GoScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GoScriptVisitor from './GoScriptVisitor.js';

const serializedATN = [4,1,33,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,3,0,20,8,0,1,0,1,0,1,0,1,1,1,1,1,1,
4,1,28,8,1,11,1,12,1,29,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,39,8,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,50,8,3,1,4,1,4,1,4,1,4,3,4,56,8,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,3,4,65,8,4,1,4,1,4,3,4,69,8,4,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,3,5,78,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,86,8,5,10,5,12,5,89,9,5,1,6,
1,6,1,6,1,6,1,6,1,6,3,6,97,8,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,116,8,7,1,7,0,1,10,8,0,2,4,6,8,10,12,14,0,
4,2,0,4,4,6,6,1,0,22,23,1,0,24,25,1,0,10,11,126,0,16,1,0,0,0,2,27,1,0,0,
0,4,38,1,0,0,0,6,49,1,0,0,0,8,68,1,0,0,0,10,77,1,0,0,0,12,90,1,0,0,0,14,
115,1,0,0,0,16,17,5,2,0,0,17,19,5,17,0,0,18,20,3,2,1,0,19,18,1,0,0,0,19,
20,1,0,0,0,20,21,1,0,0,0,21,22,5,18,0,0,22,23,5,20,0,0,23,1,1,0,0,0,24,28,
3,4,2,0,25,28,3,8,4,0,26,28,3,12,6,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,
0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,32,5,7,0,
0,32,33,7,0,0,0,33,39,3,6,3,0,34,35,5,7,0,0,35,36,7,0,0,0,36,37,5,12,0,0,
37,39,5,20,0,0,38,31,1,0,0,0,38,34,1,0,0,0,39,5,1,0,0,0,40,41,5,12,0,0,41,
42,5,21,0,0,42,43,3,10,5,0,43,44,5,20,0,0,44,50,1,0,0,0,45,46,5,12,0,0,46,
47,5,21,0,0,47,48,5,19,0,0,48,50,5,20,0,0,49,40,1,0,0,0,49,45,1,0,0,0,50,
7,1,0,0,0,51,52,5,8,0,0,52,53,5,29,0,0,53,55,3,10,5,0,54,56,5,33,0,0,55,
54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,30,0,0,58,59,5,20,0,0,59,
69,1,0,0,0,60,61,5,8,0,0,61,62,5,29,0,0,62,64,5,19,0,0,63,65,5,33,0,0,64,
63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,5,30,0,0,67,69,5,20,0,0,68,
51,1,0,0,0,68,60,1,0,0,0,69,9,1,0,0,0,70,71,6,5,-1,0,71,78,5,13,0,0,72,78,
5,12,0,0,73,74,5,26,0,0,74,75,3,10,5,0,75,76,5,27,0,0,76,78,1,0,0,0,77,70,
1,0,0,0,77,72,1,0,0,0,77,73,1,0,0,0,78,87,1,0,0,0,79,80,10,5,0,0,80,81,7,
1,0,0,81,86,3,10,5,6,82,83,10,4,0,0,83,84,7,2,0,0,84,86,3,10,5,5,85,79,1,
0,0,0,85,82,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,11,1,0,
0,0,89,87,1,0,0,0,90,91,5,9,0,0,91,92,5,26,0,0,92,93,3,14,7,0,93,94,5,27,
0,0,94,96,5,17,0,0,95,97,3,2,1,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,
0,98,99,5,18,0,0,99,100,5,20,0,0,100,13,1,0,0,0,101,102,3,10,5,0,102,103,
5,31,0,0,103,104,3,10,5,0,104,116,1,0,0,0,105,106,3,10,5,0,106,107,5,32,
0,0,107,108,3,10,5,0,108,116,1,0,0,0,109,110,3,10,5,0,110,111,5,21,0,0,111,
112,5,21,0,0,112,113,3,10,5,0,113,116,1,0,0,0,114,116,7,3,0,0,115,101,1,
0,0,0,115,105,1,0,0,0,115,109,1,0,0,0,115,114,1,0,0,0,116,15,1,0,0,0,13,
19,27,29,38,49,55,64,68,77,85,87,96,115];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GoScriptParser extends antlr4.Parser {

    static grammarFileName = "GoScript.g4";
    static literalNames = [ null, null, null, "'dotnum'", null, "'letter'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'{'", "'}'", null, "';'", 
                            "'='", "'*'", "'/'", "'+'", "'-'", "'('", "')'", 
                            "'\"'", "'['", "']'", "'>'", "'<'" ];
    static symbolicNames = [ null, "WS", "GO", "DOTNUM", "NUMBER", "LETTER", 
                             "LETTERSTR", "SAYS", "DISPLAYS", "IF", "TRUE", 
                             "FALSE", "ID", "INT", "NO_ID", "CHARAS", "DISPLAYEDTEXT", 
                             "CBRACEO", "CBRACEC", "TTX", "SCOLON", "EQU", 
                             "STAR", "DIAGO", "SUM", "RES", "PO", "PC", 
                             "DQUOTE", "BRACEO", "BRACEC", "GREATERTHAN", 
                             "LESSTHAN", "NEWLINE" ];
    static ruleNames = [ "big_bang", "content", "says", "assignation", "displays", 
                         "expre", "if", "condition" ];

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
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
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
	        this.state = 16;
	        this.match(GoScriptParser.GO);
	        this.state = 17;
	        this.match(GoScriptParser.CBRACEO);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0)) {
	            this.state = 18;
	            this.content();
	        }

	        this.state = 21;
	        this.match(GoScriptParser.CBRACEC);
	        this.state = 22;
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
	        localctx = new GoContentContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 7:
	                this.state = 24;
	                this.says();
	                break;
	            case 8:
	                this.state = 25;
	                this.displays();
	                break;
	            case 9:
	                this.state = 26;
	                this.if_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0));
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
	    var _la = 0;
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExpreDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.match(GoScriptParser.SAYS);
	            this.state = 32;
	            localctx.datatype = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===6)) {
	                localctx.datatype = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 33;
	            this.assignation();
	            break;

	        case 2:
	            localctx = new DefaultDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.match(GoScriptParser.SAYS);
	            this.state = 35;
	            localctx.datatype = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===6)) {
	                localctx.datatype = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 36;
	            this.match(GoScriptParser.ID);
	            this.state = 37;
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



	assignation() {
	    let localctx = new AssignationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GoScriptParser.RULE_assignation);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExpreAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(GoScriptParser.ID);
	            this.state = 41;
	            this.match(GoScriptParser.EQU);
	            this.state = 42;
	            this.expre(0);
	            this.state = 43;
	            this.match(GoScriptParser.SCOLON);
	            break;

	        case 2:
	            localctx = new CharacterAssginContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.match(GoScriptParser.ID);
	            this.state = 46;
	            this.match(GoScriptParser.EQU);
	            this.state = 47;
	            this.match(GoScriptParser.TTX);
	            this.state = 48;
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



	displays() {
	    let localctx = new DisplaysContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GoScriptParser.RULE_displays);
	    var _la = 0;
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DisplaysExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.match(GoScriptParser.DISPLAYS);
	            this.state = 52;
	            this.match(GoScriptParser.BRACEO);
	            this.state = 53;
	            this.expre(0);
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 54;
	                this.match(GoScriptParser.NEWLINE);
	            }

	            this.state = 57;
	            this.match(GoScriptParser.BRACEC);
	            this.state = 58;
	            this.match(GoScriptParser.SCOLON);
	            break;

	        case 2:
	            localctx = new DisplaysTextContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(GoScriptParser.DISPLAYS);
	            this.state = 61;
	            this.match(GoScriptParser.BRACEO);
	            this.state = 62;
	            this.match(GoScriptParser.TTX);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 63;
	                this.match(GoScriptParser.NEWLINE);
	            }

	            this.state = 66;
	            this.match(GoScriptParser.BRACEC);
	            this.state = 67;
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
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 71;
	            this.match(GoScriptParser.INT);
	            break;
	        case 12:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 72;
	            this.match(GoScriptParser.ID);
	            break;
	        case 26:
	            localctx = new ParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 73;
	            this.match(GoScriptParser.PO);
	            this.state = 74;
	            this.expre(0);
	            this.state = 75;
	            this.match(GoScriptParser.PC);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 85;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ExpreContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GoScriptParser.RULE_expre);
	                    this.state = 79;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 80;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===22 || _la===23)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 81;
	                    this.expre(6);
	                    break;

	                case 2:
	                    localctx = new SumResContext(this, new ExpreContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GoScriptParser.RULE_expre);
	                    this.state = 82;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 83;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===24 || _la===25)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 84;
	                    this.expre(5);
	                    break;

	                } 
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GoScriptParser.RULE_if);
	    var _la = 0;
	    try {
	        localctx = new ConditionalSentenceIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(GoScriptParser.IF);
	        this.state = 91;
	        this.match(GoScriptParser.PO);
	        this.state = 92;
	        this.condition();
	        this.state = 93;
	        this.match(GoScriptParser.PC);
	        this.state = 94;
	        this.match(GoScriptParser.CBRACEO);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0)) {
	            this.state = 95;
	            this.content();
	        }

	        this.state = 98;
	        this.match(GoScriptParser.CBRACEC);
	        this.state = 99;
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GoScriptParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ConditionMoreThanContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.expre(0);
	            this.state = 102;
	            this.match(GoScriptParser.GREATERTHAN);
	            this.state = 103;
	            this.expre(0);
	            break;

	        case 2:
	            localctx = new ConditionLessThanContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.expre(0);
	            this.state = 106;
	            this.match(GoScriptParser.LESSTHAN);
	            this.state = 107;
	            this.expre(0);
	            break;

	        case 3:
	            localctx = new ConditionIsEqualContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.expre(0);
	            this.state = 110;
	            this.match(GoScriptParser.EQU);
	            this.state = 111;
	            this.match(GoScriptParser.EQU);
	            this.state = 112;
	            this.expre(0);
	            break;

	        case 4:
	            localctx = new ConditionJustBoolContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            localctx.bol = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===10 || _la===11)) {
	                localctx.bol = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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
GoScriptParser.IF = 9;
GoScriptParser.TRUE = 10;
GoScriptParser.FALSE = 11;
GoScriptParser.ID = 12;
GoScriptParser.INT = 13;
GoScriptParser.NO_ID = 14;
GoScriptParser.CHARAS = 15;
GoScriptParser.DISPLAYEDTEXT = 16;
GoScriptParser.CBRACEO = 17;
GoScriptParser.CBRACEC = 18;
GoScriptParser.TTX = 19;
GoScriptParser.SCOLON = 20;
GoScriptParser.EQU = 21;
GoScriptParser.STAR = 22;
GoScriptParser.DIAGO = 23;
GoScriptParser.SUM = 24;
GoScriptParser.RES = 25;
GoScriptParser.PO = 26;
GoScriptParser.PC = 27;
GoScriptParser.DQUOTE = 28;
GoScriptParser.BRACEO = 29;
GoScriptParser.BRACEC = 30;
GoScriptParser.GREATERTHAN = 31;
GoScriptParser.LESSTHAN = 32;
GoScriptParser.NEWLINE = 33;

GoScriptParser.RULE_big_bang = 0;
GoScriptParser.RULE_content = 1;
GoScriptParser.RULE_says = 2;
GoScriptParser.RULE_assignation = 3;
GoScriptParser.RULE_displays = 4;
GoScriptParser.RULE_expre = 5;
GoScriptParser.RULE_if = 6;
GoScriptParser.RULE_condition = 7;

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


class GoContentContext extends ContentContext {

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

	displays = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DisplaysContext);
	    } else {
	        return this.getTypedRuleContext(DisplaysContext,i);
	    }
	};

	if_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfContext);
	    } else {
	        return this.getTypedRuleContext(IfContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitGoContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.GoContentContext = GoContentContext;

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


class DefaultDeclarationContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        this.datatype = null;;
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	ID() {
	    return this.getToken(GoScriptParser.ID, 0);
	};

	SCOLON() {
	    return this.getToken(GoScriptParser.SCOLON, 0);
	};

	NUMBER() {
	    return this.getToken(GoScriptParser.NUMBER, 0);
	};

	LETTERSTR() {
	    return this.getToken(GoScriptParser.LETTERSTR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitDefaultDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.DefaultDeclarationContext = DefaultDeclarationContext;

class ExpreDeclarationContext extends SaysContext {

    constructor(parser, ctx) {
        super(parser);
        this.datatype = null;;
        super.copyFrom(ctx);
    }

	SAYS() {
	    return this.getToken(GoScriptParser.SAYS, 0);
	};

	assignation() {
	    return this.getTypedRuleContext(AssignationContext,0);
	};

	NUMBER() {
	    return this.getToken(GoScriptParser.NUMBER, 0);
	};

	LETTERSTR() {
	    return this.getToken(GoScriptParser.LETTERSTR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitExpreDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ExpreDeclarationContext = ExpreDeclarationContext;

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


class ExpreAssignContext extends AssignationContext {

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
	        return visitor.visitExpreAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ExpreAssignContext = ExpreAssignContext;

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

	TTX() {
	    return this.getToken(GoScriptParser.TTX, 0);
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


class DisplaysExpressionContext extends DisplaysContext {

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

	expre() {
	    return this.getTypedRuleContext(ExpreContext,0);
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
	        return visitor.visitDisplaysExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.DisplaysExpressionContext = DisplaysExpressionContext;

class DisplaysTextContext extends DisplaysContext {

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

	TTX() {
	    return this.getToken(GoScriptParser.TTX, 0);
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
	        return visitor.visitDisplaysText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.DisplaysTextContext = DisplaysTextContext;

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

class IfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_if;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConditionalSentenceIfContext extends IfContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(GoScriptParser.IF, 0);
	};

	PO() {
	    return this.getToken(GoScriptParser.PO, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	PC() {
	    return this.getToken(GoScriptParser.PC, 0);
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
	        return visitor.visitConditionalSentenceIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ConditionalSentenceIfContext = ConditionalSentenceIfContext;

class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GoScriptParser.RULE_condition;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConditionIsEqualContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
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

	EQU = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GoScriptParser.EQU);
	    } else {
	        return this.getToken(GoScriptParser.EQU, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitConditionIsEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ConditionIsEqualContext = ConditionIsEqualContext;

class ConditionLessThanContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
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

	LESSTHAN() {
	    return this.getToken(GoScriptParser.LESSTHAN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitConditionLessThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ConditionLessThanContext = ConditionLessThanContext;

class ConditionMoreThanContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
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

	GREATERTHAN() {
	    return this.getToken(GoScriptParser.GREATERTHAN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitConditionMoreThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ConditionMoreThanContext = ConditionMoreThanContext;

class ConditionJustBoolContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        this.bol = null;;
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(GoScriptParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(GoScriptParser.FALSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitConditionJustBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.ConditionJustBoolContext = ConditionJustBoolContext;


GoScriptParser.Big_bangContext = Big_bangContext; 
GoScriptParser.ContentContext = ContentContext; 
GoScriptParser.SaysContext = SaysContext; 
GoScriptParser.AssignationContext = AssignationContext; 
GoScriptParser.DisplaysContext = DisplaysContext; 
GoScriptParser.ExpreContext = ExpreContext; 
GoScriptParser.IfContext = IfContext; 
GoScriptParser.ConditionContext = ConditionContext; 
