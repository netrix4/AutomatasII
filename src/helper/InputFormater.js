export default class InputFormater {
    /**
     * Class to format inputs from user to grammar defined format
     */	

    ignoreComments(rawInput) {
        const findCommentsRegex = /(\/\/.+)|(\/\*[\s\S]+?\*\/)|(\/\/)/gm
        const userInpuntWOComments = rawInput.replace(findCommentsRegex, '');
        return userInpuntWOComments;
    }
}