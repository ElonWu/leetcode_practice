var queryString = function(S, N) {
    for(let i = N; i>=1; i--) {
        if(S.indexOf(getBinaryRepresent(i)) === -1) return false;
    }

    return true;
};

function getBinaryRepresent(i) {
    let result = "";

    while(i>1) {
        i =  
    }
}