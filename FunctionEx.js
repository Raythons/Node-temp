function SayHi(name){
    console.log(name)
}
function SayBye(name){
    console.log(name)
}


// export { 
//     SayHi ,
//     SayBye,
// };
module.exports = { SH:SayHi, SB: SayBye}