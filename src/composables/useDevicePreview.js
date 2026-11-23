import { ref } from 'vue'

// Preview modes: 'auto' (100% natural responsive) | 'desktop' (1280px) | 'tablet' (768px) | 'mobile' (390px)
export const activeDevice = ref('auto')

// Only show in local development or if hostname is localhost
export const isLocal = ref(
  import.meta.env.DEV ||
  (typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
     window.location.hostname === '127.0.0.1' ||
     window.location.hostname.endsWith('.local')))
)

export const setDevice = (mode) => {
  activeDevice.value = mode
}

