const add =(a,b)=>{
    return a+b;
};

test('add the two numbers',()=>{
    const result = add(3,4);
    expect(result).toBe(7);
});