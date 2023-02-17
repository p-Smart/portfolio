import styled from "styled-components"

const CheckboxStyle = styled.div`
  input[type="checkbox"] {display: none;}

  .checkbox {position: relative;display: inline-block;width: 50px;height: 30px;border-radius: 15px;background-color: #eee;box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);transition: background-color 0.3s;}

  .checkbox::before {position: absolute;content: "";width: 24px;height: 24px;border-radius: 12px;top: 3px;left: 3px;background-color: #fff;transition: all 0.3s;}

  input[type="checkbox"]:checked + .checkbox {background-color: #0074D9;}

  input[type="checkbox"]:checked + .checkbox::before {transform: translateX(20px);}
`

function Checkbox() {
    return(
        <CheckboxStyle>
            <input type="checkbox" id="myCheckbox"/>
            <label htmlFor="myCheckbox" className="checkbox"></label>
            <label htmlFor="myCheckbox">Click me!</label>
        </CheckboxStyle>
    )
}

export default Checkbox