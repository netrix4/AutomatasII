import GoScriptVisitor from "../../src/grammar/GoScriptVisitor.js";
import GoScriptLexer from "../../src/grammar/GoScriptLexer.js";


export default class CustomVisitor extends GoScriptVisitor {	
  constructor() {
      super();
      this.Memory = new Map()
  }
  
  // Visit a parse tree produced by GoScriptParser#big_bang.
	visitBig_bang(ctx) {
    console.warn('Aqui comienzan las visitas');
    this.visitChildren(ctx);
    console.log(this.Memory);
    return this.Memory;
  }
  
  // Visit a parse tree produced by GoScriptParser#StatesVariable.
  visitStatesVariable(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#DeclarationInteger.
  visitDeclarationInteger(ctx) {
    const id = ctx.ID().getText();
    const value = 0;

    if (this.Memory.has(id)) {
      console.error('No puedes declarar dos veces una misma variable');
    } 
    else {
      this.Memory.set(id, value);     // Guarda el valor en "memoria"
      console.log('Id para guardar: '+ id + ' <- Valor: ' + this.Memory.get(id));
    }
    
    return this.visitChildren(ctx);
  }
  
  // Visit a parse tree produced by GoScriptParser#ExpreDeclarationInteger.
	visitExpreDeclarationInteger(ctx) {
	  return this.visit(ctx.assignation());
	}

  // Visit a parse tree produced by GoScriptParser#ExpreAssign.
  visitExpreAssign(ctx){
    const id = ctx.ID().getText();
    const value = this.visit(ctx.expre());
    
    if (this.Memory.has(id)) {
      console.log('No puedes declarar dos veces una misma variable');
    } else {
      this.Memory.set(id, value);     // Guarda el valor en "memoria"
      console.log('Id para guardar: '+ id + ' <- Valor: ' + this.Memory.get(id));
    }
    return 0;
  }

  // Visit a parse tree produced by GoScriptParser#MultDiv.
  visitMultDiv(ctx) {
    const left = this.visit(ctx.expre(0));	// Get value of left element subexpression
		const right = this.visit(ctx.expre(1));	// Get value of right element subexpression

		if (ctx.operation.type == GoScriptLexer.STAR ) {
			return left * right;			
		}
		else{
			return left / right // must be DIV so
		}
  }
  
  // Visit a parse tree produced by GoScriptParser#SumRes.
  visitSumRes(ctx) {
    const left = this.visit(ctx.expre(0));  // Get value of left element subexpression
    const right = this.visit(ctx.expre(1));	// Get value of right element subexpression

    if (ctx.operation.type === GoScriptLexer.SUM) {
      return left + right;			
    }
    else{
      return left - right;	// must be SUB so
    }
  }
  // Visit a parse tree produced by GoScriptParser#CharacterAssgin.
	visitCharacterAssgin(ctx) {
	  return this.visitChildren(ctx);
	}
  // Visit a parse tree produced by GoScriptParser#DisplaysText.
  visitDisplaysText(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#Text.
  visitText(ctx) {
    return this.visitChildren(ctx);
  }
  
  // Visit a parse tree produced by GoScriptParser#Parenthesis.
  visitParenthesis(ctx) {
    return this.visit(ctx.expre());
  }

  // Visit a parse tree produced by GoScriptParser#Id.
  visitId(ctx) {
    const id = ctx.ID().getText();
    if (this.Memory.has(id)) {
        return this.Memory.get(id);
    }
    return 0;
  }

  // Visit a parse tree produced by GoScriptParser#Int.
  visitInt(ctx) {
    const number = Number(ctx.getText());
    return number;
  }

}