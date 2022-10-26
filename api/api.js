const {DB} = require("../firebase/admin");

exports.service = async(req, res) => {
    const albumref = DB.collection("albums");
    try{
        albumref.get().then(snapshot => {
            const data = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            }))
            return res.json(data);
        })
    }catch(error){
        return res.json({error: error})
    }
}

exports.addalbums = async(req, res) => {
    
    try{
        const data = await DB.collection("albums").add(req.body);
        return res.json(data);
    } catch{
        return res.json({error: error})
    }
}
   