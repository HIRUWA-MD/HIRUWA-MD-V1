const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script2",
    alias: ["sc2","repo2","info2"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥𝗦:*
*|* *𝗛𝗜𝗥𝗨𝗪𝗔*

> *𝗛𝗜𝗥𝗨𝗪𝗔 𝗠𝗗 𝗥𝗘𝗣𝗢:*
*|* *https://github.com/HIRUWA-MD/HIRUWA-MD-V1*

> *𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗖𝗛𝗔𝗡𝗡𝗘𝗟:*
*|* *https://whatsapp.com/channel/0029Vb5DujFLdQeWfiqIk740*
*╰──────────────●●►*

> *🧑‍💻⃝𝙃𝙞𝙍𝙐𝙒𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363402653537145@newsletter',
      newsletterName: "🧑‍💻⃝𝙃𝙞𝙍𝙐𝙒𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥",
      serverMessageId: 999
    },
externalAdReply: { 
title: '🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿➝💥',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/HIRUWA-MD/HIRUWA-MD-V1" ,
thumbnailUrl: "https://files.catbox.moe/ey7qsm.png" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
