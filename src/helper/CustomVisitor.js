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
    // const saysStatemants = ctx.says();
    // // console.log(saysStatemants[0].SCOLON().getText());
    // console.log(saysStatemants[0].getText());
    // console.log(saysStatemants[0].assignation().SCOLON().getText());

    // // saysStatemants.forEach(item => {
    // //   console.log(item.getText());

    // // });
    // if (ctx.says(2).assignation().SCOLON().getText()) {
    //   console.log('Si tuvo semicolon');
    //   return this.visitChildren(ctx);
    // }
    // else{
    //   console.error('No tuvo semicolon, arreglaro para continuar');
    // }
  }

  // Visit a parse tree produced by GoScriptParser#NoSColonDeclarationInteger.
  visitNoSColonDeclarationInteger(ctx) {
    console.error('Te falta un punto y coma, mi buen');
	  return this.visitChildren(ctx);
	}
  
  // Visit a parse tree produced by GoScriptParser#DeclarationWrongInteger.
	visitIntWrongDeclarationInteger(ctx) {
    console.error('No puedes usar un numero como nombre de variable');
	  return this.visitChildren(ctx);
	}

  // Visit a parse tree produced by GoScriptParser#ExpreWrongDeclarationInteger.
	visitExpreWrongDeclarationInteger(ctx) {
    console.error('No puedes usar una expresion como nombre de variable');
	  return this.visitChildren(ctx);
	}

  // Visit a parse tree produced by GoScriptParser#DeclarationInteger.
  visitDeclarationInteger(ctx) {
    // console.log(ctx.getText());
    // const lastToken = //

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
    // console.log('visitExpreDeclarationInteger');
	  return this.visit(ctx.assignation());
	}

  // Visit a parse tree produced by GoScriptParser#ExpreAssign.
  visitExpreAssign(ctx){
    // console.log('visitExpreAssgination');
    // const assignExpreValue = [this.visit(ctx.assignation())];
    const id = ctx.ID().getText();
    const value = this.visit(ctx.expre());
    
    // const id = assignExpreValue[0];
    // const value = assignExpreValue[1];
    
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
    // console.log('Esto es una multiplicacion o division');
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
    // console.log('Visit sum res');
    const left = this.visit(ctx.expre(0));  // Get value of left element subexpression
    const right = this.visit(ctx.expre(1));	// Get value of right element subexpression

    if (ctx.operation.type === GoScriptLexer.SUM) {
      return left + right;			
    }
    else{
      return left - right;	// must be SUB so
    }
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
    // return this.visitChildren(ctx);
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
    // return parseInt(ctx.getText());
  }

}