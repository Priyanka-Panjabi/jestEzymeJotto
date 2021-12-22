import { shallow } from "enzyme";
import Input from "./Input";
import { checkPropTypesfn, findByAttr } from "./testUtils/testUtils";
import React from 'react';

const defaultProps = {
    secretWord: "train",
    success:false
}
const setUp = (props = {}) => {
    let dProps = { ...defaultProps, ...props }
    return shallow(<Input {...dProps} />);
}

describe("render", () => {
    describe("success is true", () => {
        test('render without error', () => {
            let wrapper = setUp({success:true});
            let ele = findByAttr(wrapper, 'render-div');
            expect(ele.length).toBe(1);
        });
    })
    describe("success is false", () => {
        test('render without error', () => {
            let wrapper = setUp();
            let ele = findByAttr(wrapper, 'render-div');
            expect(ele.length).toBe(1);
        });
        test(" no error on recieving expectedProps", () => {
            let result = checkPropTypesfn(Input, defaultProps);
            expect(result).toBeUndefined();
        });
        describe("state to check controlled input", () => {
            const mockfn = jest.fn();
            let mockEvent;
            let wrapper;
            let originalUseState = React.useState; // to preserve original usestate before overwrite
            beforeEach(() => {
                mockfn.mockClear(); // to clear result of each mock fn before function// it will clear everything 
                React.useState = jest.fn(() => {
                    return ["", mockfn]
                });
                wrapper = setUp();
                mockEvent = { target: { value: "train" } };
            })
            afterEach(() => {
                React.useState = originalUseState;
            })
            test("setgussed gets updated with correct value", () => {
                const ele = findByAttr(wrapper, "input-text");
                expect(ele.length).toBe(1);
                //   const mockEvent= {target:{value:"train"}};
                ele.simulate('change', mockEvent);
                expect(mockfn).toBeCalledWith("train");
            });
            test("on submit clear the input test", () => {
                const ele = findByAttr(wrapper, "input-text");
                expect(ele.length).toBe(1);
                const button = findByAttr(wrapper, "submit-button");
                expect(button.length).toBe(1);
                button.simulate('click', { preventDefault() { } });
                expect(mockfn).toBeCalledWith("");
            })
        })
    })
})

