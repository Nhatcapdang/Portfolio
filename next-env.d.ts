/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core'

type ExtendedCustomColors =
  | 'sky'
  | 'crimson'
  | 'purple'
  | 'mint'
  | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}
