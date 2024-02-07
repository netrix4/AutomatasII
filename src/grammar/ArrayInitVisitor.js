// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by ArrayInitParser.

export default class ArrayInitVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ArrayInitParser#value.
	visitValue(ctx) {
	  return this.visitChildren(ctx);
	}



}