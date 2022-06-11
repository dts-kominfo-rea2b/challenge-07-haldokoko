const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (respon) =>{
  try {
    const [resIXX, resvgc] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]);
    const result = await [...resIXX,...resvgc] ;
    return result.filter(item => item.hasil === respon).length
}catch (error) {
    console.log("ada eror bosku: " + error);
}
};

module.exports = {
  promiseOutput,
};
