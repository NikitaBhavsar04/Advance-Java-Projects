const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });
router.post('/apply', upload.single('resume'), async (req, res) => {
    const { jobId, applicantId } = req.body;
    const newApplication = new Application({ jobId, applicantId, resume: req.file.path });
    await newApplication.save();
    res.json({ message: 'Application submitted' });
});
