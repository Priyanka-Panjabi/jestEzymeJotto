import shallow from "enzyme/build/shallow";
import GuessedWords from "./GuessedWords";
import { findByAttr, checkPropTypesfn } from "./testUtils/testUtils";

const defaultProps={
    guessedWords:[{
        guessedWords:'train', letterMatchCount:3
    }]
}
const setUp=(props={})=>{
    const setUpProps={...defaultProps, ...props}
    return shallow(<GuessedWords {...setUpProps}/>);
}

test('render without error',()=>{
    const wrapper= setUp();
    const ele = findByAttr(wrapper,'root-div');
    expect(ele.length).toBe(1);
})
describe("guessed word is zero",()=>{
    let wrapper ; 
    beforeEach(()=>{
       let guessedWords=[];
       wrapper= setUp({guessedWords}) ;
    })
    test("render without error",()=>{
        let ele =findByAttr(wrapper,"no-guessed-div");
        expect(ele.length).toBe(1);
    });
    test("show guess word text",()=>{
        let ele =findByAttr(wrapper,"no-guess-text-display");
        expect(ele.length).not.toBe(0);
        expect(ele.text()).toBe("No word guessed !");
    })
})
describe("guessed word is non zero",()=>{
    let guessedWords=[{guessedWords:'rain', letterMatchCount:3},
                      {guessedWords:'ain', letterMatchCount:2},
                      {guessedWords:'trin', letterMatchCount:4}];
    let wrapper;
    beforeEach(()=>{
        wrapper = setUp({guessedWords:guessedWords});
    })
    test("table render",()=>{
        let ele = findByAttr(wrapper,"table-div");
        expect(ele.length).toBe(1);
    })
    test("no of row are same as guessedwords",()=>{
        let ele = findByAttr(wrapper,"each-guess-word");
        expect(ele.length).toBe(guessedWords.length);
    })
})
//default proptypes testing
test('does not throw warning with expected props',()=>{
    const propError= checkPropTypesfn(GuessedWords,defaultProps);
    expect(propError).toBeUndefined();
})