import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),
  ],
  rules: [[/^shadow-(.+)$/, ([, d]) => ({ boxShadow: d })]],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      center: 'flex justify-center items-center',
      'flex-col2': 'flex flex-col items-center',
      'shadow-card': 'shadow-0rpx 2rpx 4rpx 0rpx rgba(0,0,0,1)',
      col: 'flex flex-col items-center justify-center',
      'text-0': 'text-#333333',
      'text-1': 'text-#6B7280',
    },
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
}
