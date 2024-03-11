import { sum } from "../sum";

test("sum function should calculate the sum of the two numbers",()=>{
    const result = sum(3,2)

    // assertion
    expect(result).toBe(5);
})