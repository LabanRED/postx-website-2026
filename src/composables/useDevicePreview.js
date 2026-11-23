import { ref } from 'vue'

// Preview mode locked to 'mobile'
export const activeDevice = ref('mobile')

// Only show in local development or if hostname is localhost
export const isLocal = ref(
  import.meta.env.DEV ||
  (typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
     window.location.hostname === '127.0.0.1' ||
     window.location.hostname.endsWith('.local')))
)

export const setDevice = () => {
  activeDevice.value = 'mobile'
}

