import {lettermatchCount} from './index';
describe("word count",()=>{
    let secretWord="party";
    test("no word guessed",()=>{
        let len = lettermatchCount(secretWord,"hike");
        expect(len).toBe(0)
    })
    test("when 3 words are match",()=>{
        let len = lettermatchCount(secretWord,"art");
        expect(len).toBe(3)
    })
    test("when duplicate gussed words",()=>{
        let len = lettermatchCount(secretWord,"arta");
        expect(len).toBe(3)
    })
})