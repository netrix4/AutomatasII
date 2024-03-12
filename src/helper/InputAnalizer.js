export default class InputAnalizer {
    /**
     * Class to analize inputs from user to grammar defined rules
     */	
    constructor() {
        this.Messages = '';
    }

    preAnalize = (inputWithNoComments) => {
        this.Messages = '';

        this.hasSemicolons(inputWithNoComments);
        this.noExpreOrNumberAsId(inputWithNoComments);
        this.noRepeatedId(inputWithNoComments);

        return this.Messages;
    };
    hasSemicolons = (inputWithNoComments) => {
        /**
         * Verifies if every row in inputs ends with a semicolon
         */
        // const hasSColonReg = /^(?!go {).*[^;]$/gm; // identifica los renglones sin punto y coma
        const hasSColonReg = /^(?!go ?{).*[^; ?]$/gm; // identifica los renglones sin punto y coma

        if (hasSColonReg.test(inputWithNoComments)) {
            const feedback = 'Te falta un punto y coma, mi buen';
            console.error(feedback);
            this.Messages += (`${feedback}\n`);
        }

    };
    noExpreOrNumberAsId = (inputWithNoComments) => {
        /**
         *  Verifies if any ids is a number or an expression
         */
        const noExpreAsIdReg = /(number [0-9]+) ?(\+|\-|\*|\/)?/gm; // Identifica los ids malos

        if (noExpreAsIdReg.test(inputWithNoComments)) {
            const feedback = 'No puedes usar un numero o una expresion como nombre de variable';
            console.error(feedback);
            this.Messages += (`${feedback}\n`);
        }
    };
    noRepeatedId = (inputWithNoComments) => {
        /**
         *  Verifies is an id is repeated
         */
        const noRepeatedIdReg = /(number ?\w+)/gm; //Identifica los ids
        const idsArray = inputWithNoComments.match(noRepeatedIdReg);

        let  idsCopy = idsArray?.slice(0);
        let counter = 0;
        let areThereDuplicated = false;
        let temp;

        while (counter < idsArray?.length) {
            temp = idsCopy[counter];
            idsCopy[counter] = '';

            if (idsCopy.includes(temp)) {
                areThereDuplicated = true;
            }
            idsCopy = idsArray.slice(0);    
            counter++;
        }
        if (areThereDuplicated) {
            const feedback = 'No puedes repetir nombres de variables';
            console.error(feedback);
            this.Messages += (`${feedback}\n`);
        }
    };
    
    countInstructionsRows = (rawInput) => {
        const rowsExpressions = rawInput.match(/(.)?(\n)|(.)$/gm);
        const lines = new Array();
        let contador = 0;

        rowsExpressions?.forEach(item => {
            lines.push(`${contador+1}\n`);
            contador++;
        });

        return lines;
    }
}