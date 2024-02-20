import antlr4 from 'antlr4';
import GoScriptVisitor from "../..//src/grammar/GoScriptVisitor.js";
import GoScriptLexer from "../../src/grammar/GoScriptLexer.js";


export default class CustomVisitor extends GoScriptVisitor {	
  constructor() {
      super();
      this.Memory = new Map()
  }
  
  // Visit a parse tree produced by GoScriptParser#big_bang.
	visitBig_bang(ctx) {
    console.log('Aqui comienzan las visitas');
    this.visitChildren(ctx);
    console.log(this.Memory)
    return this.Memory;
    // return this.visitChildren(ctx);
  }
  
  // Visit a parse tree produced by GoScriptParser#StatesVariable.
  visitStatesVariable(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#WrongVariableStating.
	visitWrongVariableStating(ctx) {
    console.log('Te falta un punto y coma, mi buen')
	  return this.visitChildren(ctx);
	}

  
  
  // Visit a parse tree produced by GoScriptParser#DeclarationWrongInteger.
	visitIntWrongDeclarationInteger(ctx) {
    console.log('No puedes usar un numero como nombre de variable');
	  return this.visitChildren(ctx);
	}

  // Visit a parse tree produced by GoScriptParser#ExpreWrongDeclarationInteger.
	visitExpreWrongDeclarationInteger(ctx) {
    console.log('No puedes usar una epxresion como nombre de variable');
	  return this.visitChildren(ctx);
	}
  
  // Visit a parse tree produced by GoScriptParser#ExpreTWODeclarationInteger.
	visitExpreTWODeclarationInteger(ctx) {
    console.log('holamundo')
	  return this.visitChildren(ctx);
	}
  // Visit a parse tree produced by GoScriptParser#DeclarationInteger.
  visitDeclarationInteger(ctx) {
    const id = ctx.ID().getText();
    const value = 0;

    if (this.Memory.has(id)) {
      console.log('No puedes declarar dos veces una misma variable')
    } else {
      this.Memory.set(id, value);     // Guarda el valor en "memoria"
      console.log('Id para guardar: '+ id + ' <- Valor: ' + this.Memory.get(id));
    }
    
    return this.visitChildren(ctx);
  }
  
  // Visit a parse tree produced by GoScriptParser#ExpreDeclarationInteger.
	visitExpreDeclarationInteger(ctx) {
    console.log('visitExpreDeclarationInteger')
    // const assignExpreValue = [this.visit(ctx.assignation())];
    const id = ctx.ID().getText();
    // const value = ctx.expre.getText();
    const value = ctx.expre().getText();
    // console.log(ctx.assignation().getText())
    console.log(value);
    
    // const id = assignExpreValue[0];
    // const value = assignExpreValue[1];
    
    if (this.Memory.has(id)) {
      console.log('No puedes declarar dos veces una misma variable')
    } else {
      this.Memory.set(id, value);     // Guarda el valor en "memoria"
      console.log('Id para guardar: '+ id + ' <- Valor: ' + this.Memory.get(id));
    }
	  return this.visitChildren(ctx);
	}
  
  // Visit a parse tree produced by GoScriptParser#NumberAssign.
  visitNumberAssign(ctx) {
    // De aqui salen los 3 elementos del array
    console.log('visitNumberAssign');
    // const value = ctx.expre.getText();
    // const result = this.visit(ctx.expre());
    const result = this.visitChildren(ctx);
    const id = ctx.ID().getText();

    const response = [id,result]
    console.log(response)
    return response;
    // return this.visitChildren(ctx);

  }
  
  // Visit a parse tree produced by GoScriptParser#SumRes.
  visitSumRes(ctx) {
    console.log('Visit sum res')
    const left = this.visit(ctx.expre(0));	// Get value of left element subexpression
    const right = this.visit(ctx.expre(1));	// Get value of right element subexpression
    
    // if (ctx.op.getType() == LabeledExprLexer.ADD) {
      if (ctx.operation.type == GoScriptLexer.SUM) {
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
  
  // Visit a parse tree produced by GoScriptParser#DeclarationFloat.
  visitDeclarationFloat(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#DeclarationCharacter.
  visitDeclarationCharacter(ctx) {
    return this.visitChildren(ctx);
  }


    // Visit a parse tree produced by GoScriptParser#CharacterAssgin.
    visitCharacterAssgin(ctx) {
      return this.visitChildren(ctx);
    }

  // Visit a parse tree produced by GoScriptParser#Float.
  visitFloat(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#Parenthesis.
  visitParenthesis(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#Id.
  visitId(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by GoScriptParser#Int.
  visitInt(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#MultDiv.
  visitMultDiv(ctx) {
    return this.visitChildren(ctx);
  }

}