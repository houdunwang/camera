import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'camera',
  () => {
    const config = ref({
      //边框颜色
      borderColor: '#f39c12',
      //边框宽度
      borderWidth: 0,
      //摄像头设备ID
      deviceId: '',
      page: 'camera',
      //边框圆角
      borderRadius: 10,
      //圆型摄像头
      rounded: false,
      //视频比例
      aspectRatio: 16 / 9,
      //视频标签元素
      videoElement: null as null | HTMLVideoElement,
      //镜像
      flip: false,
      token: {
        uid: '',
        secret: ''
      }
    })

    const updateConfig = () => {}

    return { config, updateConfig }
  },
  { persist: true }
)
