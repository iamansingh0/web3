// SPDX-License-Identifier: MIT
pragma solidity <=0.8.7;

contract IntegerCalculator {
    int public result;
    function addition(int operand1, int operand2) public {
        result = operand1 + operand2;
    }
    function subtraction(int operand1, int operand2) public {
        result = operand1 - operand2;
    }
    function multiplication(int operand1, int operand2) public {
        result = operand1 * operand2;
    }
    function division(int operand1, int operand2) public {
        require(operand2 > 0, "Invalid Input");
        require(operand1 > operand2, "Input 2 should be greater otherwise the result will be zero!");
        result = operand1 / operand2;
    }
    function seeResults() public view returns(int) {
        return result;
    }
}