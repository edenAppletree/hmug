import fly from '@/utils/request.js'
export const getGoodsList = (data) => fly.get('/goods/search', data)
