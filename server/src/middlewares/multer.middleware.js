import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, './public/temp')
    },
    filename: function (req,file, cb){
        const uniqueSuffix = Datet.now() + '-' + Math.round(Math.random()*1E9)
        cb(null, file.fielname + '-' + uniqueSuffix)
    }
})




const upload = multer({storage:storage})
export default upload