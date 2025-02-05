"use client";
import Image from "next/image";
import { useState } from "react";
import { compressFile } from "@/app/lib/helper";

export default function InputImage({
  name,
  setCompress,
}: {
  name: string;
  setCompress: (file: File) => void;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];

    if (file) {
      const compress: File = await compressFile(file);
      setCompress(compress);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  return (
    <>
      <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
        <input
          type="file"
          className="block w-full"
          id={name}
          accept=".jpg, .png, .jpeg, .svg"
          name={name}
          onChange={handleImageChange}
        />
      </div>
      {loading && <p className="mt-4">Loading...</p>}
      {previewUrl && !loading && (
        <div className="mt-4">
          <h1>Image Preview</h1>
          <Image
            src={`${previewUrl}`}
            alt="Image Preview"
            width={200}
            height={200}
          />
        </div>
      )}
    </>
  );
}
