import Enzyme, {shallow} from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-16';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats'
import {findByAttr, checkPropTypesfn} from './testUtils/testUtils';
// Enzyme.configure({
//     adapter: new EnzymeAdapter()
// });
const defaultProps={
    success:false
}
const setUp=(props={})=>{
    // const Props={...defaultProps, ...props}// for creatig default props
    return shallow(<Congrats {...props}/>)
}
test('render without error',()=>{
    const props={success:false};
    const wrapper=setUp(props);
    const ele =findByAttr(wrapper, "congrats");
    expect(ele.length).toBe(1);
})
test('no text when success is false',()=>{
    const props={success:false};
    const wrapper=setUp(props);
    const ele =findByAttr(wrapper, "congrats");
    expect(ele.text()).toBe("");
})
test('no text when success is true',()=>{
    const props={success:true};
    const wrapper=setUp(props);
    const ele =findByAttr(wrapper, "congrats");
    expect(ele.text().length).not.toBe(0);
})
test('does not throw error with expected props',()=>{
    const expectedProps={success:false}
    const propError = checkPropTypesfn(Congrats,expectedProps );
    expect(propError).toBeUndefined(); // for props type is same than it gives undefined
})