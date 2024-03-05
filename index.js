const express =require('express')
const cors = require('cors')
const bodyparser = require ('body-parser')
const mysql = require ('mysql')

const convert = express();
convert.use(cors())
convert.use(bodyparser.json())
convert.use(express.json())
convert.use(bodyparser.urlencoded({extended:true}))
convert.use(express.static('public'))

let con = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"siyana@29",
    database:"internshala",
})
con.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Database is connected")
    }
})
//===============================get========================delhi

//=================================delete====
convert.get('/getall',(request,response)=>{
    let sql = 'select * from delhi'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.post('/delete',(request,response)=>{
    let id = request.body.id
    let sql ="delete from delhi where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})
//=======================getone======delhi
convert.get('/getbyid/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM delhi WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});
///=====================================update =====delhi

// convert.get('/getupdatedel/:id',(request,response)=>{
//     let{id}=request.params
 
//     let sql="select * from delhi where id=?"
//     con.query(sql,[id],(error , result)=>{
//         if(error){
//             response.send(error)
//         }
//         else{
//             response.send(result)
//         }
//     })
// })
// convert.put('/updatedel/:id',(request,response)=>{
//     let{id}=request.params
//     let{image,name,companyname,location,experience,ctc,applyby,posted,applicants,openings,keys,skills,aboutcompany}=request.body
//     let sql='update delhi set image=?,name=?,companyname=?,location=?,experience=?,ctc=?,applyby=?,posted=?,applicants=?,openings=?,keys=?,skills=?,aboutcompany=? where id=?'
//     con.query(sql,[image,name,companyname,location,experience,ctc,applyby,posted,applicants,openings,keys,skills,aboutcompany,id],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else{
//             response.send({"status":"updated"})
//         }
//     })
// })
convert.get('/getupdatedel/:id', (request, response) => {
    let { id } = request.params;

    let sql = "SELECT * FROM delhi WHERE id = ?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).json({ status: "error", message: "Failed to fetch data" });
        } else {
            response.status(200).json(result);
        }
    });
});

convert.put('/updatedel/:id', (request, response) => {
    let { id } = request.params;
    let { image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany } = request.body;

    let sql = 'UPDATE delhi SET image=?, name=?, companyname=?, location=?, experience=?, ctc=?, applyby=?, posted=?, applicants=?, openings=?, `keys`=?, skills=?, aboutcompany=? WHERE id=?';
    con.query(sql, [image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany, id], (error, result) => {
        if (error) {
            console.error("Error updating data:", error);
            response.status(500).json({ status: "error", message: "Failed to update data" });
        } else {
            response.status(200).json({ status: "updated", message: "Data updated successfully" });
        }
    });
});

//=====================insert====================delhi

convert.post('/insertdel',(request,response)=>{
    let{image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany}=request.body
    let sql="insert into delhi(image, name, companyname, location, experience, ctc, `applyby`, posted, applicants, openings, `keys`, `skills`, `aboutcompany`)values(?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})

//==============================================================================================================================================================================================


// ====================chennai==========================

//===============================get========================chennai

//=================================delete============chennai
convert.get('/getcheall',(request,response)=>{
    let sql = 'select * from chennai'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.post('/deleteche',(request,response)=>{
    let id = request.body.id
    let sql ="delete from chennai where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})
//=======================getone======chennai

convert.get('/getbyidc/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM chennai WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});
// ----------------=============update============--------

convert.get('/getupdateche/:id', (request, response) => {
    let { id } = request.params;

    let sql = "SELECT * FROM chennai WHERE id = ?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).json({ status: "error", message: "Failed to fetch data" });
        } else {
            response.status(200).json(result);
        }
    });
});

convert.put('/updateche/:id', (request, response) => {
    let { id } = request.params;
    let { image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany } = request.body;

    let sql = 'UPDATE chennai SET image=?, name=?, companyname=?, location=?, experience=?, ctc=?, applyby=?, posted=?, applicants=?, openings=?, `keys`=?, skills=?, aboutcompany=? WHERE id=?';
    con.query(sql, [image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany, id], (error, result) => {
        if (error) {
            console.error("Error updating data:", error);
            response.status(500).json({ status: "error", message: "Failed to update data" });
        } else {
            response.status(200).json({ status: "updated", message: "Data updated successfully" });
        }
    });
});
//=====================insert====================
convert.post('/insertche',(request,response)=>{
    let{image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany}=request.body
    let sql="insert into chennai(image, name, companyname, location, experience, ctc, `applyby`, posted, applicants, openings, `keys`, `skills`, `aboutcompany`)values(?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
//===================================================================================================================================================================================================================================


// ==================== wfh==========================

//===============================get========================wfh

//=================================delete============wfh
convert.get('/getwfhall',(request,response)=>{
    let sql = 'select * from wfh'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.post('/deletewfh',(request,response)=>{
    let id = request.body.id
    let sql ="delete from wfh where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})
//=======================getone======wfh

convert.get('/getbyidw/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM wfh WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});
// ----------------=============update==================


convert.get('/getupdatewfh/:id', (request, response) => {
    let { id } = request.params;

    let sql = "SELECT * FROM wfh WHERE id = ?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).json({ status: "error", message: "Failed to fetch data" });
        } else {
            response.status(200).json(result);
        }
    });
});

convert.put('/updatewfh/:id', (request, response) => {
    let { id } = request.params;
    let { image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany } = request.body;

    let sql = 'UPDATE wfh SET image=?, name=?, companyname=?, location=?, experience=?, ctc=?, applyby=?, posted=?, applicants=?, openings=?, `keys`=?, skills=?, aboutcompany=? WHERE id=?';
    con.query(sql, [image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany, id], (error, result) => {
        if (error) {
            console.error("Error updating data:", error);
            response.status(500).json({ status: "error", message: "Failed to update data" });
        } else {
            response.status(200).json({ status: "updated", message: "Data updated successfully" });
        }
    });
});
//=============================insert===============================
convert.post('/insertwfh',(request,response)=>{
    let{image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany}=request.body
    let sql="insert into wfh(image, name, companyname, location, experience, ctc, `applyby`, posted, applicants, openings, `keys`, `skills`, `aboutcompany`)values(?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
//===========================================================================================================================================================================================================================


// ==================== bangalore==========================

//===============================get========================bangalore

//=================================delete===========bangalore
convert.get('/getbangall',(request,response)=>{
    let sql = 'select * from bangalore'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.post('/deletebang',(request,response)=>{
    let id = request.body.id
    let sql ="delete from bangalore where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})
//=======================getone======bangalore

convert.get('/getbyidb/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM bangalore WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});
// ----------------=============update============

convert.get('/getupdatebang/:id', (request, response) => {
    let { id } = request.params;

    let sql = "SELECT * FROM bangalore WHERE id = ?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).json({ status: "error", message: "Failed to fetch data" });
        } else {
            response.status(200).json(result);
        }
    });
});

convert.put('/updatebang/:id', (request, response) => {
    let { id } = request.params;
    let { image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany } = request.body;

    let sql = 'UPDATE bangalore SET image=?, name=?, companyname=?, location=?, experience=?, ctc=?, applyby=?, posted=?, applicants=?, openings=?, `keys`=?, skills=?, aboutcompany=? WHERE id=?';
    con.query(sql, [image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany, id], (error, result) => {
        if (error) {
            console.error("Error updating data:", error);
            response.status(500).json({ status: "error", message: "Failed to update data" });
        } else {
            response.status(200).json({ status: "updated", message: "Data updated successfully" });
        }
    });
});
//==================insert========================================
convert.post('/insertbang',(request,response)=>{
    let{image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany}=request.body
    let sql="insert into bangalore(image, name, companyname, location, experience, ctc, `applyby`, posted, applicants, openings, `keys`, `skills`, `aboutcompany`)values(?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
//==========================================================================================================================================================================================================================


// ====================hydrabad==========================

//===============================get========================hydrabad

//=================================delete===========hydrabad
convert.get('/getallhydra',(request,response)=>{
    let sql = 'select * from hydrabad'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.post('/deletehydra',(request,response)=>{
    let id = request.body.id
    let sql ="delete from hydrabad where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})
//=======================getone======hydrabad

convert.get('/getbyidh/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM hydrabad WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});

// ----------------=============update=============

convert.get('/getupdatehyd/:id', (request, response) => {
    let { id } = request.params;

    let sql = "SELECT * FROM hydrabad WHERE id = ?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).json({ status: "error", message: "Failed to fetch data" });
        } else {
            response.status(200).json(result);
        }
    });
});

convert.put('/updatehyd/:id', (request, response) => {
    let { id } = request.params;
    let { image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany } = request.body;

    let sql = 'UPDATE hydrabad SET image=?, name=?, companyname=?, location=?, experience=?, ctc=?, applyby=?, posted=?, applicants=?, openings=?, `keys`=?, skills=?, aboutcompany=? WHERE id=?';
    con.query(sql, [image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany, id], (error, result) => {
        if (error) {
            console.error("Error updating data:", error);
            response.status(500).json({ status: "error", message: "Failed to update data" });
        } else {
            response.status(200).json({ status: "updated", message: "Data updated successfully" });
        }
    });
});
//==================inserrtt================================
convert.post('/inserthyd',(request,response)=>{
    let{image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany}=request.body
    let sql="insert into hydrabad(image, name, companyname, location, experience, ctc, `applyby`, posted, applicants, openings, `keys`, `skills`, `aboutcompany`)values(?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
//================================================================================================================================================================================================================================


// ====================kolkata==========================

//===============================get========================kolkata

//=================================delete===========kolkata
convert.get('/getallkolka',(request,response)=>{
    let sql = 'select * from kolkata'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

convert.post('/deletekolka',(request,response)=>{
    let id = request.body.id
    let sql ="delete from kolkata where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})
//=======================getone======kolkata

convert.get('/getbyidk/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM kolkata WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});

// ----------------=============update==============
convert.get('/getupdatekolka/:id', (request, response) => {
    let { id } = request.params;

    let sql = "SELECT * FROM kolkata WHERE id = ?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).json({ status: "error", message: "Failed to fetch data" });
        } else {
            response.status(200).json(result);
        }
    });
});

convert.put('/updatekolka/:id', (request, response) => {
    let { id } = request.params;
    let { image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany } = request.body;

    let sql = 'UPDATE kolkata SET image=?, name=?, companyname=?, location=?, experience=?, ctc=?, applyby=?, posted=?, applicants=?, openings=?, `keys`=?, skills=?, aboutcompany=? WHERE id=?';
    con.query(sql, [image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany, id], (error, result) => {
        if (error) {
            console.error("Error updating data:", error);
            response.status(500).json({ status: "error", message: "Failed to update data" });
        } else {
            response.status(200).json({ status: "updated", message: "Data updated successfully" });
        }
    });
});
//=========================insert=================
convert.post('/insertkolka',(request,response)=>{
    let{image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany}=request.body
    let sql="insert into kolkata(image, name, companyname, location, experience, ctc, `applyby`, posted, applicants, openings, `keys`, `skills`, `aboutcompany`)values(?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
//===================================================================================================================================================================================================================


// ====================international==========================

//===============================get========================international

//=================================delete==========international
convert.get('/getallinter',(request,response)=>{
    let sql = 'select * from international'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

convert.post('/deleteinter',(request,response)=>{
    let id = request.body.id
    let sql ="delete from international where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})
//=======================getone======internationla

convert.get('/getbyidi/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM international WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});
//==========uodate========================

convert.get('/getupdateinter/:id', (request, response) => {
    let { id } = request.params;

    let sql = "SELECT * FROM international WHERE id = ?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).json({ status: "error", message: "Failed to fetch data" });
        } else {
            response.status(200).json(result);
        }
    });
});

convert.put('/updateinter/:id', (request, response) => {
    let { id } = request.params;
    let { image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany } = request.body;

    let sql = 'UPDATE international SET image=?, name=?, companyname=?, location=?, experience=?, ctc=?, applyby=?, posted=?, applicants=?, openings=?, `keys`=?, skills=?, aboutcompany=? WHERE id=?';
    con.query(sql, [image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany, id], (error, result) => {
        if (error) {
            console.error("Error updating data:", error);
            response.status(500).json({ status: "error", message: "Failed to update data" });
        } else {
            response.status(200).json({ status: "updated", message: "Data updated successfully" });
        }
    });
})
//================insert====================
convert.post('/insertinter',(request,response)=>{
    let{image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany}=request.body
    let sql="insert into international(image, name, companyname, location, experience, ctc, `applyby`, posted, applicants, openings, `keys`, `skills`, `aboutcompany`)values(?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, keys, skills, aboutcompany],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
//==============================================================================================================================================================================================
 ////

 // ===============================combine all===========


 convert.get('/allcity', (request, response) => {
    let sql = `
        SELECT id, image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, \`keys\`, skills, aboutcompany 
        FROM bangalore
        UNION ALL
        SELECT id, image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, \`keys\`, skills, aboutcompany 
        FROM chennai
        UNION ALL
        SELECT id, image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, \`keys\`, skills, aboutcompany 
        FROM delhi
        UNION ALL
        SELECT id, image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, \`keys\`, skills, aboutcompany 
        FROM hydrabad
        UNION ALL
        SELECT id, image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, \`keys\`, skills, aboutcompany 
        FROM international
        UNION ALL
        SELECT id, image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, \`keys\`, skills, aboutcompany 
        FROM kolkata
        UNION ALL
        SELECT id, image, name, companyname, location, experience, ctc, applyby, posted, applicants, openings, \`keys\`, skills, aboutcompany 
        FROM wfh
    `;
    con.query(sql, (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});
//========

// ==================login signup====

convert.post('/logins',(request,response)=>{
    let{email,password}=request.body
    let sql='select * from login where email=?'
    con.query(sql,[email],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else if(result.length>0){
            let dbemail=result[0].email
            let dbpassword=result[0].password
            let id=result[0].id
            let category=result[0].category
            if(dbemail===email && dbpassword===password){
                response.send({"status":"success","id":id,"category":category})
            }
            else{
                response.send({"status":"invalid"})
            } 
        }
        else{
            response.send({"status":"empty-set"})
        }
    })

})
//-------------------login oda insert area------------------
convert.post('/insertsign',(request,response)=>{
    let{name,category,email,password}=request.body
    let sql="insert into login(name,category,email,password)values(?,?,?,?)"
    con.query(sql,[name,category,email,password],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
// ==============register=========================
convert.post('/register', (request, response) => {
    let { fname, lname, email, phno, experience, salary, address, city, state, pincode, skills, location, need, mode } = request.body;
    let sql = "INSERT INTO register(fname, lname, email, phno, experience, salary, address, city, state, pincode, skills, location, need, mode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    con.query(sql, [fname, lname, email, phno, experience, salary, address, city, state, pincode, skills, location, need, mode], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            response.send({ "status": "proceeded" });
        }
    });
});
///========================this is carousel part=============================

convert.get('/getallcourse',(request,response)=>{
    let sql = 'select * from zcourse'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
// get one

convert.get('/getbyidcourse/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM zcourse WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.status(500).json({ error: 'Internal server error' });
        } else {
            response.json(result);
        }
    });
});
//===================enroll=============

convert.post('/enroll', (request, response) => {
    let { fname, lname, email, phone, coursename, coursemode, qualification, cgpa, tenth, twelve, address, city, state } = request.body;
    let sql = "INSERT INTO enroll(fname, lname, email, phone, coursename, coursemode, qualification, cgpa, tenth, twelve, address, city, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    con.query(sql, [fname, lname, email, phone, coursename, coursemode, qualification, cgpa, tenth, twelve, address, city, state], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            response.send({ "status": "enrolled" });
        }
    });
});











convert.listen(3009,()=>{
    console.log('server started at 3009')
})