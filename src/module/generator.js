import antlr4 from 'antlr4';
import GoScriptLexer from '../grammar/GoScriptLexer.js';
import GoScriptParser from '../grammar/GoScriptParser.js';
import CustomVisitor from '../helper/CustomVisitor.js';

export function analizar(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new GoScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new GoScriptParser(tokens);
    
    parser.buildParseTrees = true;
    const tree = parser.big_bang();
    const visitor = new CustomVisitor();
    let temp = visitor.visitBig_bang(tree);

    return temp;
}