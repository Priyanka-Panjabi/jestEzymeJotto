export const lettermatchCount=(secretWord, gussWord)=>{
    let secretArr= [...new Set(secretWord.split(""))];
    return secretArr.filter(ele=>gussWord.includes(ele)).length;
}