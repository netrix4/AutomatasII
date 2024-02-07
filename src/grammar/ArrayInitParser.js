// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,5,20,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,0,5,0,9,8,
0,10,0,12,0,12,9,0,1,0,1,0,1,1,1,1,3,1,18,8,1,1,1,0,0,2,0,2,0,0,19,0,4,1,
0,0,0,2,17,1,0,0,0,4,5,5,1,0,0,5,10,3,2,1,0,6,7,5,2,0,0,7,9,3,2,1,0,8,6,
1,0,0,0,9,12,1,0,0,0,10,8,1,0,0,0,10,11,1,0,0,0,11,13,1,0,0,0,12,10,1,0,
0,0,13,14,5,3,0,0,14,1,1,0,0,0,15,18,3,0,0,0,16,18,5,4,0,0,17,15,1,0,0,0,
17,16,1,0,0,0,18,3,1,0,0,0,2,10,17];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'{'", "','", "'}'" ];
    static symbolicNames = [ null, null, null, null, "INT", "WS" ];
    static ruleNames = [ "init", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ArrayInitParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.match(ArrayInitParser.T__0);
	        this.state = 5;
	        this.value();
	        this.state = 10;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 6;
	            this.match(ArrayInitParser.T__1);
	            this.state = 7;
	            this.value();
	            this.state = 12;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 13;
	        this.match(ArrayInitParser.T__2);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ArrayInitParser.RULE_value);
	    try {
	        this.state = 17;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.init();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.match(ArrayInitParser.INT);
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


}

ArrayInitParser.EOF = antlr4.Token.EOF;
ArrayInitParser.T__0 = 1;
ArrayInitParser.T__1 = 2;
ArrayInitParser.T__2 = 3;
ArrayInitParser.INT = 4;
ArrayInitParser.WS = 5;

ArrayInitParser.RULE_init = 0;
ArrayInitParser.RULE_value = 1;

class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_init;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_value;
    }

	init() {
	    return this.getTypedRuleContext(InitContext,0);
	};

	INT() {
	    return this.getToken(ArrayInitParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ArrayInitParser.InitContext = InitContext; 
ArrayInitParser.ValueContext = ValueContext; 
