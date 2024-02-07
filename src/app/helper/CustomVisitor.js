// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import ArrayInitVisitor from "../../grammar/ArrayInitVisitor.js";

// This class defines a complete generic visitor for a parse tree produced by ArrayInitParser.

export default class CustomVisitor extends ArrayInitVisitor {

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
        console.log('Visitando gramatica INIT');
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ArrayInitParser#value.
	visitValue(ctx) {
        console.log('Visitando gramatica VALUE');
	  return this.visitChildren(ctx);
	}
}