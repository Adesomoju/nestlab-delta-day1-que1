module.exports = function (L, M, k ) {
    // Converting letter L to regex
    var regexP = new RegExp(L, "g");

    // Getting the number L appears in magazine M
    var num  = M.match(regexP).length

    //Validating the number of times L appears
    if (num >= k) {
        return true;
    }
    else {
        return false
    }
}