import antlr4 from 'antlr4';
import CalculadoraLexer from '../grammar/Test.js';
import CalculadoraParser from '../grammar/Test.js';
import CustomVisitor from '../helper/CustomVisitor.js';

export function analizadorSintactico(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new CalculadoraLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CalculadoraParser(tokens);
    
    parser.buildParseTrees = true;
    const tree = parser.file();
    const visitor = new CustomVisitor();
    let temp = visitor.visitFile(tree);

    return temp;
}