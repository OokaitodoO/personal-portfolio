import { computed } from 'vue'

interface ImagesResponse {
  success: boolean
  projectName: string
  images: string[]
  error?: string
}

export const useProjectImages = (folderName: string) => {
  const { data, pending, error } = useFetch<ImagesResponse>('/api/images', {
    query: {
      name: folderName
    }
  })

  const images = computed(() => data.value?.images ?? [])

  return {
    images,
    pending,
    error
  }
}