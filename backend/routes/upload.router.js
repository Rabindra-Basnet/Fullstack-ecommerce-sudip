// // Backend code for uploading the file. Image is uplated in the multipart data format( in small image no issue directly, but in case of big image divides in the small portion (small chunck))

import express from "express";
import multer from "multer";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../middleware/asynchandler.middleware.js";

const router = express.Router();

// // While configuring multer, where to store the image comming from user and save that by what name.
// // diskstorage means store the file where there is server.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // // before specifying the folder, the folder should already be in the server means in root file (Here: uploads, but can be changed)
  },
  filename: (req, file, cb) => {
    let fn = Date.now() + "-" + file.originalname;
    cb(null, fn);
  },
});

// // To prevent uploading other file format image.

const fileFilter = (req, file, cb) => {
  let imagePattern = /\.(jpg|jpeg|png|webp)$/;
  let isMatch = file.originalname.match(imagePattern);
  if (isMatch) cb(null, true);
  else cb(new ApiError("Only Image File!"), false);
};

// // Now combining both storage and fileFilter instaling the object of multer.
const upload = multer({
  storage,
  fileFilter,
  // limits: { fileSize: 5 * 1024 * 1024 }, // // If wanted to add the filesize of expected file.
});
// // Here the above upload act as an middleware and to upload multiple picture use upload.array
router.post(
  "/upload",
  upload.single("image"), // // this image is name of key, in form while sending image there also key name must be same (image)
  asyncHandler(async (req, res) => {
    res.send({
      message: " Image Uploaded",
      path: `/${req.file.path}`,
    });
  })
);
export default router;
