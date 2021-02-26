const { func } = require("prop-types");

function memoryLocationCalc() {
    opcode = document.getElementById("opcode-one").value;
    instructions = document.getElementById("bits-one").value;
    address = instructions - opcode;
    memoryLocations = 2**address;
    document.getElementById("result-one-calc").innerHTML = (instructions + " - " + opcode + " = " + address + ", " + "2^" + address + " = ");
    document.getElementById("result-one").innerHTML = memoryLocations;
}

function instructionLengthCalc() {
    memoryLocations = parseFloat(document.getElementById("memoryLocations").value);
    opcode = parseFloat(document.getElementById("opcode-two").value);
    address = parseFloat(Math.log2(memoryLocations));
    instructions = parseFloat(opcode) + parseFloat(address);
    document.getElementById("result-two-calc").innerHTML = ("log2(" + memoryLocations + ")" + " = " + address.toFixed(2) +
        ", " + opcode + " + " + address.toFixed(2) + " = ")
    document.getElementById('result-two').innerHTML = ("The instructions are of size " + Math.floor(instructions) + " bits");
}

function opcodeLengthCalc(){
    instructions = document.getElementById("bits-two").value;
    memoryLocations = document.getElementById("memoryLocations-two").value;
    address = Math.log2(memoryLocations);
    opcode = instructions - address;
    document.getElementById("result-three-calc").innerHTML = ("log2(" + memoryLocations + ")" + " = " + address.toFixed(2) + ", " +
        instructions + " - " + address.toFixed(2) + " = ");
    document.getElementById("result-three").innerHTML = ("The opcode is of length " + Math.floor(opcode) + " bits")
}

// def location_in_memory_calculator():
//     print('What base are the instructions written in? (Enter 8 for Base8)')
//     base = int(input())
//     if base == 8:
//         print("What is the instruction number?")
//         instruction = input()        
//         print("What is the bit length of the opcode?")
//         opcode = int(input())
//         digit = 3
//         leftmost_digits_amount = int(opcode / digit)
//         memory_represented_instruction = instruction[leftmost_digits_amount:]
//         print('The location in memory to be accessed is ' + memory_represented_instruction)

function locationInMemoryCalc(){
    base = document.getElementById("base").value;
    if(base == 8){
        
    }
}