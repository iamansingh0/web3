const { expect, assert } = require("chai")
const { deployments, getNamedAccounts, ethers } = hre

describe("IntegerCalculator", function () {
    let calc, calcFactory
    beforeEach(async function() {
        calcFactory = await ethers.getContractFactory("IntegerCalculator")
        calc = await calcFactory.deploy()
        await calc.deployed()
        
    })
    describe("addition", function() {
        it ("adds two inputs successfully", async function() {
            await calc.addition(5, 7)
            const response = await calc.seeResults()
            assert.equal(response.toString(), "12")
        })
    })

    describe("subtraction", function(){
        it ("subtracts two inputs successfully", async function() {
            await calc.subtraction(12, 14)
            const response = await calc.seeResults()
            assert.equal(response.toString(), -2)
        })
    })
    describe("multiplication", function () {
        it ("multiplies two inputs successfully", async function() {
            await calc.multiplication(12, 3)
            const response = await calc.seeResults()
            assert.equal(response.toString(), 36)
        })
    })
})