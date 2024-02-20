import antlr4 from 'antlr4';
import CalculadoraLexer from '../grammar/GoScriptLexer.js';
import CalculadoraParser from '../grammar/GoScriptParser.js';
import CustomVisitor from '../helper/CustomVisitor.js';

export function analizar(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new CalculadoraLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CalculadoraParser(tokens);
    
    parser.buildParseTrees = true;
    const tree = parser.big_bang();
    const visitor = new CustomVisitor();
    let temp = visitor.visitBig_bang(tree);

    return temp;
}