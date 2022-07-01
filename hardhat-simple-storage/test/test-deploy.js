const { expect, assert } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue)
    })

    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const storeResponse = await simpleStorage.store("7")
        await storeResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Should start with 0 when we call nameToFavoriteNumber without populating poeple array", async function () {
        const expectedFavNum = "0"
        const getPersonFavNum = await simpleStorage.nameToFavoriteNumber("raja")
        assert.equal(getPersonFavNum.toString(), expectedFavNum)
    })

    it("Should populate people array when we call addPerson and return fav number when we call nameToFavoriteNumber with a valid name string", async function () {
        const addPersonResponse = await simpleStorage.addPerson("raja", "25")
        await addPersonResponse.wait(1)
        const getPerson = await simpleStorage.people(0)
        const getPersonFavNum = await simpleStorage.nameToFavoriteNumber("raja")
        const expectedFavNum = "25"
        assert.equal(getPersonFavNum.toString(), expectedFavNum)
    })
})