
const {multiply, addition, subtract, divide, square, max} = require("./string")



describe("Testing for stringCalculations", ()=>{

    test("Tests the addition problem", ()=>{

        expect(addition(2,5)).toBe(7)

    })
    test("Tests the subtraction problem", ()=>{

        expect(subtract(2,5)).toBe(-3)

    })
    test("Tests the multiplication problem", ()=>{

        expect(multiply(5,5)).toBe(25)

    })
    test("Tests the division problem", ()=>{

        expect(divide(10,5)).toBe(2)

    })
    test("Tests the squareroot problem", ()=>{

        expect(square(25)).toBe(5)

    })

    test("Tests the squareroot problem", ()=>{

        expect(max(1,3,54)).toBe(54)

    })
});