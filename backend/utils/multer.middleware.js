import multer from "multer";

// Multer storage configuration
const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        cb(null, 'images') // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Specify the filename for uploaded files
    }
});

// Multer instance with configuration
export const upload = multer({ storage: storage });

