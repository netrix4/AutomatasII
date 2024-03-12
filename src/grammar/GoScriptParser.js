// Generated from ./grammar/GoScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GoScriptVisitor from './GoScriptVisitor.js';

const serializedATN = [4,1,28,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,3,0,16,8,0,1,0,1,0,1,0,1,1,4,1,22,8,1,11,1,12,1,23,1,
1,4,1,27,8,1,11,1,12,1,28,3,1,31,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,40,
8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,52,8,3,1,4,1,4,1,4,1,4,3,
4,58,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,70,8,5,1,5,1,5,1,5,
1,5,1,5,1,5,5,5,78,8,5,10,5,12,5,81,9,5,1,5,0,1,10,6,0,2,4,6,8,10,0,2,1,
0,19,20,1,0,21,22,87,0,12,1,0,0,0,2,30,1,0,0,0,4,39,1,0,0,0,6,51,1,0,0,0,
8,53,1,0,0,0,10,69,1,0,0,0,12,13,5,2,0,0,13,15,5,14,0,0,14,16,3,2,1,0,15,
14,1,0,0,0,15,16,1,0,0,0,16,17,1,0,0,0,17,18,5,15,0,0,18,19,5,17,0,0,19,
1,1,0,0,0,20,22,3,4,2,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,
1,0,0,0,24,31,1,0,0,0,25,27,3,8,4,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,
0,0,0,28,29,1,0,0,0,29,31,1,0,0,0,30,21,1,0,0,0,30,26,1,0,0,0,31,3,1,0,0,
0,32,33,5,7,0,0,33,34,5,4,0,0,34,40,3,6,3,0,35,36,5,7,0,0,36,37,5,4,0,0,
37,38,5,9,0,0,38,40,5,17,0,0,39,32,1,0,0,0,39,35,1,0,0,0,40,5,1,0,0,0,41,
42,5,9,0,0,42,43,5,18,0,0,43,44,3,10,5,0,44,45,5,17,0,0,45,52,1,0,0,0,46,
47,5,9,0,0,47,48,5,18,0,0,48,49,5,25,0,0,49,50,5,12,0,0,50,52,5,25,0,0,51,
41,1,0,0,0,51,46,1,0,0,0,52,7,1,0,0,0,53,54,5,8,0,0,54,55,5,26,0,0,55,57,
5,16,0,0,56,58,5,28,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,
5,27,0,0,60,61,5,17,0,0,61,9,1,0,0,0,62,63,6,5,-1,0,63,70,5,10,0,0,64,70,
5,9,0,0,65,66,5,23,0,0,66,67,3,10,5,0,67,68,5,24,0,0,68,70,1,0,0,0,69,62,
1,0,0,0,69,64,1,0,0,0,69,65,1,0,0,0,70,79,1,0,0,0,71,72,10,5,0,0,72,73,7,
0,0,0,73,78,3,10,5,6,74,75,10,4,0,0,75,76,7,1,0,0,76,78,3,10,5,5,77,71,1,
0,0,0,77,74,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,11,1,0,
0,0,81,79,1,0,0,0,10,15,23,28,30,39,51,57,69,77,79];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GoScriptParser extends antlr4.Parser {

    static grammarFileName = "GoScript.g4";
    static literalNames = [ null, null, "'go'", "'dotnum'", "'number'", 
                            "'letter'", "'letterstr'", "'says'", "'displays'", 
                            null, null, null, null, null, "'{'", "'}'", 
                            null, "';'", "'='", "'*'", "'/'", "'+'", "'-'", 
                            "'('", "')'", "'\"'", "'['", "']'" ];
    static symbolicNames = [ null, "WS", "GO", "DOTNUM", "NUMBER", "LETTER", 
                             "LETTERSTR", "SAYS", "DISPLAYS", "ID", "INT", 
                             "NO_ID", "CHARAS", "DISPLAYEDTEXT", "CBRACEO", 
                             "CBRACEC", "TTX", "SCOLON", "EQU", "STAR", 
                             "DIAGO", "SUM", "RES", "PO", "PC", "DQUOTE", 
                             "BRACEO", "BRACEC", "NEWLINE" ];
    static ruleNames = [ "big_bang", "content", "says", "assignation", "displays", 
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
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            localctx = new StatesVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 20;
	                this.says();
	                this.state = 23; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===7);
	            break;
	        case 8:
	            localctx = new PrintsOnDisplayContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 25;
	                this.displays();
	                this.state = 28; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===8);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	        this.state = 39;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExpreDeclarationIntegerContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.match(GoScriptParser.SAYS);
	            this.state = 33;
	            this.match(GoScriptParser.NUMBER);
	            this.state = 34;
	            this.assignation();
	            break;

	        case 2:
	            localctx = new DeclarationIntegerContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.match(GoScriptParser.SAYS);
	            this.state = 36;
	            this.match(GoScriptParser.NUMBER);
	            this.state = 37;
	            this.match(GoScriptParser.ID);
	            this.state = 38;
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
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExpreAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(GoScriptParser.ID);
	            this.state = 42;
	            this.match(GoScriptParser.EQU);
	            this.state = 43;
	            this.expre(0);
	            this.state = 44;
	            this.match(GoScriptParser.SCOLON);
	            break;

	        case 2:
	            localctx = new CharacterAssginContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(GoScriptParser.ID);
	            this.state = 47;
	            this.match(GoScriptParser.EQU);
	            this.state = 48;
	            this.match(GoScriptParser.DQUOTE);
	            this.state = 49;
	            this.match(GoScriptParser.CHARAS);
	            this.state = 50;
	            this.match(GoScriptParser.DQUOTE);
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
	        localctx = new DisplaysTextContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(GoScriptParser.DISPLAYS);
	        this.state = 54;
	        this.match(GoScriptParser.BRACEO);
	        this.state = 55;
	        this.match(GoScriptParser.TTX);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 56;
	            this.match(GoScriptParser.NEWLINE);
	        }

	        this.state = 59;
	        this.match(GoScriptParser.BRACEC);
	        this.state = 60;
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
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 63;
	            this.match(GoScriptParser.INT);
	            break;
	        case 9:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.match(GoScriptParser.ID);
	            break;
	        case 23:
	            localctx = new ParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 65;
	            this.match(GoScriptParser.PO);
	            this.state = 66;
	            this.expre(0);
	            this.state = 67;
	            this.match(GoScriptParser.PC);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 79;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 77;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ExpreContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GoScriptParser.RULE_expre);
	                    this.state = 71;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 72;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 73;
	                    this.expre(6);
	                    break;

	                case 2:
	                    localctx = new SumResContext(this, new ExpreContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GoScriptParser.RULE_expre);
	                    this.state = 74;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 75;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 76;
	                    this.expre(5);
	                    break;

	                } 
	            }
	            this.state = 81;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
GoScriptParser.INT = 10;
GoScriptParser.NO_ID = 11;
GoScriptParser.CHARAS = 12;
GoScriptParser.DISPLAYEDTEXT = 13;
GoScriptParser.CBRACEO = 14;
GoScriptParser.CBRACEC = 15;
GoScriptParser.TTX = 16;
GoScriptParser.SCOLON = 17;
GoScriptParser.EQU = 18;
GoScriptParser.STAR = 19;
GoScriptParser.DIAGO = 20;
GoScriptParser.SUM = 21;
GoScriptParser.RES = 22;
GoScriptParser.PO = 23;
GoScriptParser.PC = 24;
GoScriptParser.DQUOTE = 25;
GoScriptParser.BRACEO = 26;
GoScriptParser.BRACEC = 27;
GoScriptParser.NEWLINE = 28;

GoScriptParser.RULE_big_bang = 0;
GoScriptParser.RULE_content = 1;
GoScriptParser.RULE_says = 2;
GoScriptParser.RULE_assignation = 3;
GoScriptParser.RULE_displays = 4;
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

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitStatesVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.StatesVariableContext = StatesVariableContext;

class PrintsOnDisplayContext extends ContentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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

	accept(visitor) {
	    if ( visitor instanceof GoScriptVisitor ) {
	        return visitor.visitPrintsOnDisplay(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GoScriptParser.PrintsOnDisplayContext = PrintsOnDisplayContext;

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

	SCOLON() {
	    return this.getToken(GoScriptParser.SCOLON, 0);
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

	assignation() {
	    return this.getTypedRuleContext(AssignationContext,0);
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


GoScriptParser.Big_bangContext = Big_bangContext; 
GoScriptParser.ContentContext = ContentContext; 
GoScriptParser.SaysContext = SaysContext; 
GoScriptParser.AssignationContext = AssignationContext; 
GoScriptParser.DisplaysContext = DisplaysContext; 
GoScriptParser.ExpreContext = ExpreContext; 
