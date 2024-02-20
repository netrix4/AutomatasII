import antlr4 from 'antlr4';
import GoScriptVisitor from "../..//src/grammar/GoScriptVisitor.js";
import GoScriptLexer from "../../src/grammar/GoScriptLexer.js";


export default class CustomVisitor extends GoScriptVisitor {	
    constructor() {
        super();
        this.memory = {};
    }
    // Visit a parse tree produced by GoScriptParser#big_bang.
	visitBig_bang(ctx) {
        console.log('Aqui comienzan las visitas');
        return this.visitChildren(ctx);
      }
  
  
      // Visit a parse tree produced by GoScriptParser#StatesVariable.
      visitStatesVariable(ctx) {
        console.log('visitStateVariable');
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
        // console.log('Visita de decalaracion de enteros');
    
        const id = ctx.ID().getText();
        // let value = this.visit(ctx.expr());
    
        console.log('Id para guardar: ', id)
        const value = 0;

        this.memory[id] = value;                        // Guarda el valor en "memoria"
        console.log('Id en memroia: '+ id+ ' Valor: ' + this.memory[id]);
        // return value;
        return this.memory;                //<-----------------------
        // return this.visitChildren(ctx);
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