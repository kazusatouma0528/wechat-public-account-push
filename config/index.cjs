/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'server-chan',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '重庆',
  CITY: '九龙坡区',

  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  USERS: [
    {
      // 想要发送的人的名字
      name: '笨笨',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU28879TyLf6KGFpOMXpQU76ooYuhbrH9p0RLkqw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1110',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-10',
      
      horoscopeDateType: '今日',
      
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '赵燕梅', year: '1998', date: '09-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '赵燕梅', year: '1998', date: '11-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '12-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-12-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-03-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'KeyyG7hVtqP',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU28879TyLf6KGFpOMXpQU76ooYuhbrH9p0RLkqw',
    }
  ],

}

module.exports = USER_CONFIG

