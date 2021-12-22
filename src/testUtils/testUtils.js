import checkPropTypes from "check-prop-types"; // for prop types testing
export const findByAttr= (wrapper, attribute)=>{
       return wrapper.find(`[data-test='${attribute}']`);
}
export const checkPropTypesfn=(component,expectedProps)=>{
       return checkPropTypes(component.propTypes, expectedProps,'prop',component.name)
}