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
    return this.Memory;
    // return this.visitChildren(ctx);
  }
  
  // Visit a parse tree produced by GoScriptParser#StatesVariable.
  visitStatesVariable(ctx) {
    // visit(ctx.NUMBER())
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

  // Visit a parse tree produced by GoScriptParser#DeclarationInteger.
  visitDeclarationInteger(ctx) {
    const id = ctx.ID().getText();
    // let value = this.visit(ctx.NUMBER());
    // let value = this.visit(ctx.DOTNUM());
    const value = 0;
    console.log(parseInt(ctx.ID().getText()))
    if (parseInt(ctx.ID().getText())) {
      
    }
    if (this.Memory.has(id)) {
      console.log('No puedes declarar dos veces una variable')
    } else {
      this.Memory.set(id, value);                        // Guarda el valor en "memoria"
    }

    console.log('Id para guardar: '+ id + ' <- Valor: ' + this.Memory.get(id));
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

  // Visit a parse tree produced by GoScriptParser#NumberAssign.
  visitNumberAssign(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#CharacterAssgin.
  visitCharacterAssgin(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by GoScriptParser#SumRes.
  visitSumRes(ctx) {
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