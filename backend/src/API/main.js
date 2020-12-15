const router = require('express').Router();
const {
    // getDirpath,
    addDir,
    updateDir,
    deleteDir,
    getSubDirs
} = require('./../API_HANDLER/mainHandler')
router
    .route('/')
    // .get(getDirpath)
    .post(addDir)
    .patch(updateDir)
    .delete(deleteDir)

router
    .route('/*')
    .get(getSubDirs)

module.exports = router;