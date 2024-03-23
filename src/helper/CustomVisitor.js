import GoScriptVisitor from "../../src/grammar/GoScriptVisitor.js";
import GoScriptLexer from "../../src/grammar/GoScriptLexer.js";
import InputAnalizer from "./InputAnalizer.js";


export default class CustomVisitor extends GoScriptVisitor {	
  constructor() {
      super();
      this.InputAnalizer = new InputAnalizer();
      this.Memory = new Map()
      this.TextToDisplay = [];
  }
  
  // Visit a parse tree produced by GoScriptParser#big_bang.
	visitBig_bang(ctx) {
    console.warn('Aqui comienzan las visitas');
    this.visitChildren(ctx);
    console.log(this.Memory);
    return this.TextToDisplay;
  }
  
  // Visit a parse tree produced by GoScriptParser#GoContent.
	visitGoContent(ctx) {
	  return this.visitChildren(ctx);
	}

  // Visit a parse tree produced by GoScriptParser#ExpreDeclaration.
	visitExpreDeclaration(ctx) {
    const assign = ctx.assignation().getText();

    if (ctx.datatype.type === GoScriptLexer.NUMBER) {
      const isANumAssign = /(\w+=[0-9]+)|(\w ?(\+|\-|\/|\*) ?\w);/gm;

      if (assign.match(isANumAssign)) {
        return this.visitExpreAssign(ctx.assignation());
      } 
      else {
        this.TextToDisplay.push('No quisiste decir <says letterstr ...;>?');
        return this.TextToDisplay;
      }
    } 
    else {
      const isTextAssign = /(\w+="(.)+")|(\w ?(\+|\-|\/|\*) ?\w);/gm;

      if (assign.match(isTextAssign)) {
        return this.visitCharacterAssgin(ctx.assignation());
      } 
      else {
        this.TextToDisplay.push('No quisiste decir <says number ...;>?');
        return this.TextToDisplay;
      }

    }
	}

	// Visit a parse tree produced by GoScriptParser#DefaultDeclaration.
	visitDefaultDeclaration(ctx) {
    const id = ctx.ID().getText();
    const value = (ctx.datatype.type === GoScriptLexer.NUMBER)? 0 : '' ;

    if (this.Memory.has(id)) {
      console.error('No puedes declarar dos veces una misma variable');
    } 
    else {
      this.Memory.set(id, value);     // Guarda el valor en "memoria"
      console.log('Id para guardar: '+ id + ' <- Valor: ' + this.Memory.get(id));
    }    

	  return this.visitChildren(ctx);
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

  // Visit a parse tree produced by GoScriptParser#CharacterAssgin.
  visitCharacterAssgin(ctx) {
    const id = ctx.ID().getText();
    const value = ctx.TTX().getText().slice(1,-1);

    if (this.Memory.has(id)) {
      console.error('No puedes declarar dos veces una misma variable');
    } 
    else {
      this.Memory.set(id, value);     // Guarda el valor en "memoria"
      console.log('Id para guardar: '+ id + ' <- Valor: ' + this.Memory.get(id));
    }
    return '';

  }

  // Visit a parse tree produced by GoScriptParser#DisplaysExpression.
  visitDisplaysExpression(ctx) {
    const tempRes = this.visit(ctx.expre());

    if (tempRes !== null) {
      this.TextToDisplay.push(tempRes);
    }
    else{
      this.TextToDisplay.push('La variable no existe');
    }

    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#DisplaysText.
  visitDisplaysText(ctx) {
    const tempResp = ctx.TTX().getText().slice(1,-1);
    this.TextToDisplay.push(tempResp);

    return this.TextToDisplay;
  }

  // Visit a parse tree produced by GoScriptParser#MultDiv.
  visitMultDiv(ctx) {
    const left = this.visit(ctx.expre(0));	// Get value of left element subexpression
		const right = this.visit(ctx.expre(1));	// Get value of right element subexpression

		if (ctx.operation.type == GoScriptLexer.STAR ) {
			return left * right;			
		}
		else{
			return left / right; // must be DIV so
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

  // Visit a parse tree produced by GoScriptParser#Int.
  visitInt(ctx) {
    const number = Number(ctx.getText());
    return number;
  }

  // Visit a parse tree produced by GoScriptParser#Id.
  visitId(ctx) {
    const id = ctx.ID().getText();
    if (this.Memory.has(id)) {
        return this.Memory.get(id);
    }
    return null;
  }
  
  // Visit a parse tree produced by GoScriptParser#Parenthesis.
  visitParenthesis(ctx) {
    return this.visit(ctx.expre());
  }
  // Visit a parse tree produced by GoScriptParser#ConditionalSentenceIf.
	visitConditionalSentenceIf(ctx) {
    if (this.visit(ctx.condition())) {
      this.visit(ctx.content());
    } else {
      return 0;
    }
	}

	// Visit a parse tree produced by GoScriptParser#ConditionMoreThan.
	visitConditionMoreThan(ctx) {
    const leftValue = this.visit(ctx.expre(0));
    const rightValue = this.visit(ctx.expre(1));

    return leftValue > rightValue;
	}
  
	// Visit a parse tree produced by GoScriptParser#ConditionLessThan.
	visitConditionLessThan(ctx) {
    const leftValue = this.visit(ctx.expre(0));
    const rightValue = this.visit(ctx.expre(1));

    return leftValue < rightValue;
	}

	// Visit a parse tree produced by GoScriptParser#ConditionIsEqual.
	visitConditionIsEqual(ctx) {
    const leftValue = this.visit(ctx.expre(0));
    const rightValue = this.visit(ctx.expre(1));

    return leftValue === rightValue;
	}

  // Visit a parse tree produced by GoScriptParser#ConditionJustBool.
	visitConditionJustBool(ctx) {
    const bolWord = ctx.bol.type;
    return bolWord === GoScriptLexer.TRUE;
	}

}