export default class InputAnalizer {
    /**
     * Class to analize inputs from user to grammar defined rules
     */	
    
    hasSemicolon(rawInput) {
        //Do something
    }
    countInstructionsRows(rawInput) {
        const rowsExpressions = rawInput.match(/(.)?(\n)|(.)$/gm);
        const lines = new Array();
        let contador = 0;

        rowsExpressions?.forEach(item => {
            lines.push(`${contador+1}\n`);
            contador++;
        });

        // console.log(`Operaciones identificadas: ${lines.length}`);

        return lines;
    }
}