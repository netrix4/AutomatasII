// Generated from LabeledExpr.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LabeledExprParser.

export default class LabeledExprVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LabeledExprParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#printExpr.
	visitPrintExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#assign.
	visitAssign(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#blank.
	visitBlank(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#parens.
	visitParens(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#MulDiv.
	visitMulDiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#AddSub.
	visitAddSub(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#id.
	visitId(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabeledExprParser#int.
	visitInt(ctx) {
	  return this.visitChildren(ctx);
	}

}