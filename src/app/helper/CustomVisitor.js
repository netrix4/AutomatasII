// Generated from LabeledExpr.g4 by ANTLR 4.13.1
// jshint ignore: start

// import LabeledExprParser from '@/grammar/LabeledExprParser';
import LabeledExprVisitor from "../../grammar/LabeledExprVisitor.js";
import LabeledExprLexer from "../../grammar/LabeledExprLexer.js";

// import antlr4 from 'antlr4';

export default class CustomVisitor extends LabeledExprVisitor {	
	// constructor(props) {
	// 	super(props);
	// 	this.memory = {};
	// }

	memory = {}

	// Visit a parse tree produced by LabeledExprParser#prog.
	visitProg(ctx) {
		console.log('Aqui empiezan las visitas');
		return this.visitChildren(ctx);
	}

	/** expr NEWLINE */
	// Visit a parse tree produced by LabeledExprParser#printExpr.
	visitPrintExpr(ctx) {
	  const value = this.visit(ctx.expr());
	  console.log(value)
	  // return 0 // return dummy value
	  return this.visitChildren(ctx);
	}

	/** ID '=' expr NEWLINE */
	// Visit a parse tree produced by LabeledExprParser#assign.
	visitAssign(ctx) {
		const id = ctx.ID().getText();
		const value = this.visit(ctx.expr());
		// this.memory = {...this.memory, Asignacion: { [id.toString()] : value } }
		this.memory[id] = value
		console.log('Resultado: ', this.memory[id.toString()])
		return value;
	//   return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by LabeledExprParser#blank.
	visitBlank(ctx) {
		console.log('visit blank line');
	  	return this.visitChildren(ctx);
	}

	/** '(' expr ')' */
	// Visit a parse tree produced by LabeledExprParser#parens.
	visitParens(ctx) {
		return this.visit(ctx.expr());	//return child expr's value
	//   return this.visitChildren(ctx);
	}

	/** expr op=('*'|'/') expr */
	// Visit a parse tree produced by LabeledExprParser#MulDiv.
	visitMulDiv(ctx) {
		const left = this.visit(ctx.expr(0));	// Get value of left element subexpression
		const right = this.visit(ctx.expr(1));	// Get value of right element subexpression
		if (ctx.op.type == LabeledExprLexer.MUL ) {
			return left * right;			
		}
		else{
			return left / right // must be DIV so
		}
	//   return this.visitChildren(ctx);
	}

	/** expr op=('+'|'-') expr */
	// Visit a parse tree produced by LabeledExprParser#AddSub.
	visitAddSub(ctx) {
		const left = this.visit(ctx.expr(0));	// Get value of left element subexpression
		const right = this.visit(ctx.expr(1));	// Get value of right element subexpression

		// if (ctx.op.getType() == LabeledExprLexer.ADD) {
		if (ctx.op.type == LabeledExprLexer.ADD) {
			return left + right;			
		}
		else{
			return left - right;	// must be SUB so
		}

	//   return this.visitChildren(ctx);
	}

	/** ID */
	// Visit a parse tree produced by LabeledExprParser#id.
	visitId(ctx) {
		// const id = ctx.getText(); // Este ya se aque hace algo
		const id = ctx.ID().getText();
		
		if (this.memory[id]) {
			// console.log('visitId dentro del if', this.memory[id])
			return this.memory[id];
		}
		else{
			console.log('Es para cuando no existe, puede dar resultados incorrectos en mult div')
			return 0;
		}
	//   return this.visitChildren(ctx);
	}

	/** INT */
	// Visit a parse tree produced by LabeledExprParser#int.
	visitInt(ctx) {
		//   return this.visitChildren(ctx);
	//   return parseInt(ctx.INT.getText());
	  return parseInt(ctx.getText());
	}



}