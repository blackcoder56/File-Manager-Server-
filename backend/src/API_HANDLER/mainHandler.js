const realFs = require('fs');
const fs = require('graceful-fs');
const mainPath = require('path');
fs.gracefulify(realFs);

const addDir = async (req,res) => {
    res.send({msg:"Add Dir"});
}
const updateDir = async (req,res) => {
    res.send({msg:"Update Dir"});
}
const deleteDir = async (req,res) => {
    res.send({msg:"Delete Dir"});
}
const downloadData = async (req, res) => {

}


//http://lo/home
const getSubDirs = async (req, res) => {
    if(fs.statSync('/'+req.params[0]).isDirectory()){
        const subDirs = await fs.readdirSync(`/${req.params[0]}/`);
        var path = {};
        path = subDirs.map((dir) => {
            if(fs.statSync('/'+req.params[0]+'/'+dir).isDirectory()){
                var newPath = `/${req.params[0]}`;
                var Sdir = {
                    ls: dir,
                    path: newPath,
                    type: "Folder"
                }
            }else{
                var newPath = `/${req.params[0]}`;
                var Sdir = {
                    ls: dir,
                    path: newPath,
                    type:"File",
                    extName: mainPath.extname('/'+req.params[0]+'/'+dir)
                }
            }
            
            return Sdir
        })
    res.send({path});
    }else{
        res.send('File Type');
    }
}
module.exports = {
    // getDirpath,
    addDir,
    updateDir,
    deleteDir,
    getSubDirs,
    downloadData
}