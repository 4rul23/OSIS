import ImageKit from "imagekit";
import sharp from "sharp";

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function UploadSingleImage(formData: FormData) {
  const entries = Array.from(formData.entries());
  const [key, value] = entries.filter(([key]) => key.startsWith("image-"))[0];
  const image = value as File;

  if (image.size !== 0) {
    const imageBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(imageBuffer);

    const response = await imageKit.upload({
      file: buffer,
      fileName: image.name,
    });
    return response.url;
  }
  return null;
}

export async function UploadMultiImage(formData: FormData) {
  const entries = Array.from(formData.entries());
  const imageEntries = entries.filter(([key]) => key.startsWith("image-"));

  const imageUrl = await Promise.all(
    imageEntries.map(async ([key, value]) => {
      const image = value as File;
      const imageBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(imageBuffer);

      try {
        const response = await imageKit.upload({
          file: buffer,
          fileName: image.name,
        });
        return response.url.toString();
      } catch (err) {
        throw new Error("File size too big");
      }
    }),
  );
  return imageUrl;
}
