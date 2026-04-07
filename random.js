// CRUD operations 
const fs = require("fs");
// fs.mkdirSync('Monika');

fs.writeFileSync("Monika/bio.txt","my name is Monika Saini ");
if (!fs.existsSync('Monika')) {
  fs.mkdirSync('Monika');
}
// fs.appendFileSync("Monika/bio.txt "," I am a student of MCA 2ND year");

// const data = fs.readFileSync("Monika/bio.txt","utf-8");
// console.log(data);
// const org_data = data.toString();
// console.log(org_data);

// to rename the file
// fs.renameSync("Monika/bio.txt","Monika/mybio.txt");

// to delete the file
// fs.unlinkSync("Monika/mybio.txt");
if (fs.existsSync("Monika")) {
  fs.rmSync("Monika", { recursive: true, force: true });
}
// to delete the folder
fs.rmdirSync("Monika");  