import CloudinaryService from "src/Services/cloudinary.service"

const uploadToCloudinary = async (file): Promise<{ url: string }> => {

    const formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", "vbing51p")

    const { data } = await CloudinaryService.upload(formData)

    return data
}

export default uploadToCloudinary