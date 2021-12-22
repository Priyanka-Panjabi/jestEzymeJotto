import {shallow} from 'enzyme';
import App from './App';
import { findByAttr } from './testUtils/testUtils';
const setUp=()=>{
    return shallow(<App/>)
}
test('render without error',()=>{
    let wrapper = setUp();
    let ele= findByAttr(wrapper,"app-render")
    expect(ele).toHaveLength(1);
})