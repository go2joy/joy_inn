const BOT_LIST = new Map([
  ['google', /[Gg]ooglebot/],
  ['yahoo', /[Yy]ahoo! [Ss]lurp/],
  ['bing', /[Bb]ingbot/],
  ['yandex', /[Yy]andex/],
  ['baiduspider', /[Bb]aiduspider/],
  ['facebook', /[Ff]acebookexternalhit/],
  ['twitter', /[Tt]witterbot/],
  ['roger', /[Rr]ogerbot/],
  ['linkedin', /[Ll]inkedinbot/],
  ['embedly', /[Ee]mbedly/],
  ['quora', /[Qq]uora [Ll]ink [Pp]review/],
  ['showyou', /[Ss]howyoubot/],
  ['outbrain', /[Oo]utbrain/],
  ['pinterest', /[Pp]interest\/0./],
  ['developers.google.com', /developers.google.com\/\+\/web\/snippet/],
  ['slack', /[Ss]lackbot/],
  ['vkShare', /[Vv]kShare/],
  ['w3c', /[Ww]3[Cc]_[Vv]alidator/],
  ['reddit', /[Rr]edditbot/],
  ['apple', /[Aa]pplebot/],
  ['WhatsApp', /[Ww]hats[Aa]pp/],
  ['flipboard', /[Ff]lipboard/],
  ['tumblr', /[Tt]umblr/],
  ['bitly', /[Bb]itlybot/],
  ['skype', /[Ss]kype[Uu]ri[Pp]review/],
  ['nuzzel', /[Nn]uzzel/],
  ['discord', /[Dd]iscordbot/],
  ['Google Page Speed', /[Gg]oogle [Pp]age [Ss]peed/],
  ['qwantify', /[Qq]wantify/],
  ['pinterest', /[Pp]interestbot/],
  ['bitrix', /[Bb]itrix [Ll]ink [Pp]review/],
  ['xing', /[XING|xing]-contenttabreceiver/],
  ['chrome-lighthouse', /[Cc]hrome-[Ll]ighthouse/],
  ['telegram', /[Tt]elegram[Bb]ot/],
  ['seznam', /[Ss]eznam[Bb]ot/]
]) // BOT_LIST

const userAgent = navigator.userAgent;

const botInfo = {
  detectBot: function () {
    if (!userAgent) {
      return {
        isBot: false
      }
    }
  
    const tmpBotInfo = {
      isBot: false
    }
  
    for (const [botName, botPattern] of BOT_LIST.entries()) {
      if (userAgent.match(botPattern)) {
        tmpBotInfo.isBot = true
        tmpBotInfo.name = botName
        break
      }
    }
  
    return tmpBotInfo
  }
}