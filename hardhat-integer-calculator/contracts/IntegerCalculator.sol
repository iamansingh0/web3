// SPDX-License-Identifier: MIT
pragma solidity <=0.8.7;


error InvalidInput();
error Input1ShouldBeGreater();

/// @title A simple integer calculator
/// @author Aman K
/// @notice You can use this contract for only basic integer calculation
/// @dev All function calls are currently implemented without side effects
contract IntegerCalculator {
    int public result;

    /// @notice This function will add `operand1` with `operand2`
    /// @param  operand1 first integer input
    /// @param operand2 second integer input
    function addition(int operand1, int operand2) public {
        result = operand1 + operand2;
        // console.log("result: %d", result);
    }

    /// @notice This function will subtract `operand1` with `operand2`
    /// @param  operand1 first integer input
    /// @param operand2 second integer input
    function subtraction(int operand1, int operand2) public {
        result = operand1 - operand2;
        // console.log("Subtraction of: "+operand1+" and "+operand2+" = "+result);
    }

    /// @notice This function will multiply `operand1` with `operand2`
    /// @param  operand1 first integer input
    /// @param operand2 second integer input
    function multiplication(int operand1, int operand2) public {
        result = operand1 * operand2;
        // console.log("Multiplication of: "+operand1+" and "+operand2+" = "+result);
    }

    /// @notice This function will divide `operand1` by `operand2`
    /// @param  operand1 first integer input
    /// @param operand2 second integer input
    function division(int operand1, int operand2) public {
        if(operand1 <= 0) revert InvalidInput();
        if(operand1 < operand2) revert Input1ShouldBeGreater();
        result = operand1 / operand2;
        // console.log("Division of: "+operand1+" by "+operand2+" = "+result);
    }

    /// @notice returns the result: `result`
    /// @return integer result
    function seeResults() public view returns(int) {
        return result;
    }
}