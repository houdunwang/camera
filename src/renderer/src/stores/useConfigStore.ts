import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'camera',
  () => {
    const config = ref({
      //验证密钥
      secret: '',
      //验证TOKEN
      token: '',
      //边框颜色
      borderColor: '#f39c12',
      //边框宽度
      borderWidth: '0px',
      //窗口尺寸
      // // width: 500,
      // height: 281,
      //摄像头设备ID
      deviceId: '',
      page: 'camera',
      //圆角
      rounded: false,
      //视频比例
      aspectRatio: 16 / 9,
      //视频标签元素
      videoElement: null as null | HTMLVideoElement,
      //镜像
      flip: false
    })

    const updateConfig = () => {}

    return { config, updateConfig }
  },
  { persist: true }
)
