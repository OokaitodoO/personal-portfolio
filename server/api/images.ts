
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const projectName = query.name || ''

        if (!projectName) {
            return { success: false, error: 'Project name is required' }
        }

        const targetFolder = `portfolio/${projectName}/`
        console.log('🔍 Cloudinary is searching path:', targetFolder)

        const result = await cloudinary.search
            .expression(`asset_folder="portfolio/${projectName}"`)
            .sort_by("created_at", "desc")
            .max_results(30)
            .execute();

        const images = result.resources.map((r: { secure_url: any }) => r.secure_url);

        return {
            success: true,
            projectName,
            images: images
        }
    } catch (error: any) {
        return { success: false, error: error.message }
    }
})