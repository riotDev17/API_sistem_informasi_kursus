import multer from 'multer';

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'file/png' ||
    file.mimetype === 'file/jpg' ||
    file.mimetype === 'file/jpeg' ||
    file.mimetype === 'file/pdf'
  ) {
    cb(null, true);
  } else {
    cb(
      new multer.MulterError(
        'LIMIT_UNEXPECTED_FILE',
        'File Harus Bertipe png, jpg, jpeg , dan pdf',
      ),
    );
  }
};

const uploadFile = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
  single: (req, file, cb) => cb(null, true),
});

export default uploadFile;
