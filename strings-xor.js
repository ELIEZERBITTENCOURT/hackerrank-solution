process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    // Split the input into two lines
    var inputLines = input.trim().split('\n');

    // Extract the two input strings
    var s1 = inputLines[0];
    var s2 = inputLines[1];

    // Ensure both strings have the same length
    var minLength = Math.min(s1.length, s2.length);
    s1 = s1.slice(0, minLength);
    s2 = s2.slice(0, minLength);

    // Call the strings_xor function to compute the XOR
    function strings_xor(s1, s2) {
        var result = '';
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2[i]) {
                result += '0';
            } else {
                result += '1';
            }
        }
        return result;
    }

    var result = strings_xor(s1, s2);

    // Print the result
    console.log(result);
});
