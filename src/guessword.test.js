import App from "./App";
import {mount} from 'enzyme';
import { findByAttr } from "./testUtils/testUtils";
import React from 'react';

const setUp=(state={})=>{
    const wrapper = mount(<App/>);
    const inputBox = findByAttr(wrapper,"input-text");
    inputBox.simulate('change',{target:{value:"party"}});
    const button =findByAttr(wrapper,"submit-button");
    button.simulate('click',{preventDefault(){}});
    return wrapper;
}
describe.skip('no words guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper= setUp({
            secretWord:"party",
            success:false,
            guessedWord:[]
        });
    })
    test('create guessedword with no row',()=>{
        const guesswrodrows=findByAttr(wrapper,'each-guess-word')
        expect(guesswrodrows).toHaveLength(1);
    })
});
describe.skip('some words guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper= setUp({
            secretWord:"party",
            success: false,
            guessedWord:[{
                guessedWords:'train', letterMatchCount:3
            },{
                guessedWords:'rain', letterMatchCount:2
            }]
        })
    });
    test('create gussedword with some row',()=>{
        const guesswrodrows=findByAttr(wrapper,'each-guess-word')
        expect(guesswrodrows).toHaveLength(3);
    })
})
describe.skip('guess secret word',()=>{
    let wrapper;
    beforeEach(()=>{
            wrapper= setUp({
            secretWord:"party",
            success: false,
            guessedWord:[{
                guessedWords:'agile', letterMatchCount:1
            }]
        })
        const inputBox = findByAttr(wrapper,"input-text");
        inputBox.simulate('change',{target:{value:'party'}});
        const button = findByAttr(wrapper,"submit-button");
        button.simulate('click',{preventDefault(){}});

    });
    test('add roe to guess word table',()=>{
        let row = findByAttr(wrapper, "each-guess-word");
        expect(row).toHaveLength(3)
    })
    test('display congrats component',()=>{
         let congratsEle= findByAttr(wrapper,"congrats");
         expect(congratsEle.length).toBe(1); 
    });
})