// reference : https://www.youtube.com/watch?v=tLxBwSL3lPQ
export default fisherYates = originalArray => {
    const array = [...originalArray];

    for (let i = (array.length - 1); i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}