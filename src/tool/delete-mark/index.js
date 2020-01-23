
export const deleteMark=(a, b, c ,d)=>{
    let m1 = '+';
    let m2 = '+';
    let nb = b;
    let nd = d;
    if(b.substr(0,1) === '-'){
        m1 = '-';
        nb = b.substr(1,1)
    }
    if(d.substr(0,1) === '-'){
        m2 = '-';
        nd = d.substr(1,1)
    }
    return [m1, nb, m2, nd]
};
