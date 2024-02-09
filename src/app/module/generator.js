/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4 from "antlr4";
import LabeledExprLexer from "../../grammar/LabeledExprLexer.js";
import LabeledExprParser from "../../grammar/LabeledExprParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new LabeledExprLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LabeledExprParser(tokens);
  parser.buildParseTrees = true;
  // const tree = parser.file();
  const tree = parser.prog();
  const customVisitor = new CustomVisitor();

  // Colocamos la visita de la regla donde queremos que empiece 
  //  el parser tree
  // return customVisitor.visitFile(tree);
  return customVisitor.visitProg(tree);
};

