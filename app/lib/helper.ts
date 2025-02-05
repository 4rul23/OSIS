import imageCompression from "browser-image-compression";
const defaultOptions = {
  maxSizeMB: 5,
};
export function compressFile(imageFile: File, options = defaultOptions) {
  if (imageFile.size > 5 * 1024 * 1024) {
    return imageCompression(imageFile, options);
  } else {
    return imageFile;
  }
}
