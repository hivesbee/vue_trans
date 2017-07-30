import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MultiLanguage from 'vue-multilanguage'

Vue.use(Router)

Vue.use(MultiLanguage, {
  default: 'en',
  en: {
    l1: 'Strong in the {what}',
    l2: 'Strong in the wind',
    l3: 'Strong against the summer heat and snow',
    l4: 'He is healthy and robust',
    l5: 'Free of all desire',
    l6: 'He never loses his generous spirit',
    l7: 'Nor the quiet smile on his lips',
    l8: 'He eats four go of unpolished rice',
    l9: 'Miso and a few vegetables a day',
    l10: 'He does not consider himself',
    l11: 'In whatever occurs…his understanding',
    l12: 'Comes from observation and experience',
    l13: 'And he never loses sight of things',
    l14: 'He lives in a little thatched-roof hut',
    l15: 'In a field in the shadows of a pine tree grove',
    l16: 'If there is a sick child in the east',
    l17: 'He goes there to nurse the child',
    l18: 'If there’s a tired mother in the west',
    l19: 'He goes to her and carries her sheaves',
    l20: 'If someone is near death in the south',
    l21: 'He goes and says, ‘Don’t be afraid’',
    l22: 'If there’s strife and lawsuits in the north',
    l23: 'He demands that the people put an end to their pettiness',
    l24: 'He weeps at the time of drought',
    l25: 'He plods about at a loss during the cold summer',
    l26: 'Everybody calls him ‘Blockhead’',
    l27: 'No one sings his praises',
    l28: 'Or takes him to heart…',
    l29: 'That is the sort of person',
    l30: 'I want to be'
  },
  jp: {
    l1: '{what} にも負けず',
    l2: '風にも負けず',
    l3: '雪にも夏の暑さにも負けぬ',
    l4: '丈夫なからだをもち',
    l5: '慾はなく',
    l6: '決して怒らず',
    l7: 'いつも静かに笑っている',
    l8: '一日に玄米四合と',
    l9: '味噌と少しの野菜を食べ',
    l10: 'あらゆることを',
    l11: '自分を勘定に入れずに',
    l12: 'よく見聞きし分かり',
    l13: 'そして忘れず',
    l14: '野原の松の林の陰の',
    l15: '小さな萱ぶきの小屋にいて',
    l16: '東に病気の子供あれば',
    l17: '行って看病してやり',
    l18: '西に疲れた母あれば',
    l19: '行ってその稲の束を負い',
    l20: '南に死にそうな人あれば',
    l21: '行ってこわがらなくてもいいといい',
    l22: '北に喧嘩や訴訟があれば',
    l23: 'つまらないからやめろといい',
    l24: '日照りの時は涙を流し',
    l25: '寒さの夏はおろおろ歩き',
    l26: 'みんなにでくのぼーと呼ばれ',
    l27: '褒められもせず',
    l28: '苦にもされず',
    l29: 'そういうものに',
    l30: 'わたしはなりたい'
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
