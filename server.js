const express = require("express");
const app = express();
const data = require("./data");
console.log(data["phone"])

let arrayOfValues = Object.values(data);
arrayOfValues = arrayOfValues.flat(1);

app.get("/searchTerm",(req,res) => {
    const searchKey = req.query.key;
    console.log(searchKey)
    let arr = arrayOfValues.filter((item) => {
        if (
			item.name.toLowerCase().includes(searchKey) ||
			item.description.toLowerCase().includes(searchKey)
		) {
			return {
				item,
			};
		}
    })
    res.send({data:arr})
    try{
    }catch(err){
        console.log(err);
    }
});

app.get("/category",(req,res) => {
    const category = req.query.category;
    res.send({data : data[category]})
});

app.get("/scrolled",(req,res) => {
    const key = req.query.key;
    console.log(key)
    let scroolData = data[key].slice(0,4);
    // console.log(scroolData);
    res.send({ data: scroolData });
})

const server = app.listen(3001, () => {
	console.log("Connection Sucessfull");
});