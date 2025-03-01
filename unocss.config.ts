import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [presetWeapp(), presetWeappAttributify()],

  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      center: 'flex justify-center items-center',
      'flex-col2': 'flex flex-col items-center',
      'shadow-card': 'shadow-0rpx 2rpx 4rpx 0rpx rgba(0,0,0,1)',
      col: 'flex flex-col items-center justify-center',
      'text-0': 'text-#333333',
      'text-1': 'text-#6B7280',
      ellipsis: 'text-ellipsis whitespace-nowrap overflow-hidden t',
    },
  ],

  rules: [
    [
      /^lines-(\d+)$/,
      ([, n]) => ({
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': n,
        overflow: 'hidden',
      }),
    ],
  ],

  transformers: [transformerAttributify(), transformerClass()],
}
