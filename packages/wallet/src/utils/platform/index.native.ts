import { Platform } from 'react-native'

export const isMobile = true
export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const isNonSupportedDevice = !isIOS && !isAndroid

export function getCloudProviderName(): string {
  switch (Platform.OS) {
    case 'android':
      return 'Google Drive'
    case 'ios':
      return 'iCloud'
    default:
      return ''
  }
}
