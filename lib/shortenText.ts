const shortenText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    }
    const splitted = text.split(" ");
    let shortened = "";
    let currentLength = 0;
    for (let i = 0; i < splitted.length; i++) {
        const word = splitted[i];
        if (currentLength + word.length + 1 > maxLength) {
            break;
        }
        shortened += `${word} `;
        currentLength += word.length + 1;
    }
    return shortened.trim();
}

export default shortenText;