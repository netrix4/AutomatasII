import antlr4 from 'antlr4';
import GoScriptLexer from '../grammar/GoScriptLexer.js';
import GoScriptParser from '../grammar/GoScriptParser.js';
import CustomVisitor from '../helper/CustomVisitor.js';

export function analizar(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new GoScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new GoScriptParser(tokens);
    
    const errorListener = {
        syntaxErrors: [],
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            const error_msg = `Error de sintaxis en ANTLR: ${msg}\n`;
            this.syntaxErrors.push({ line, column, error_msg });
        },
    };

    // Limpiar listeners de errores predeterminados y añadir el personalizado tanto al lexer como al parser
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    parser.buildParseTrees = true;
    const tree = parser.big_bang();
    const visitor = new CustomVisitor();
    let temp = visitor.visitBig_bang(tree);

    return { temp, errors: errorListener.syntaxErrors };
}
