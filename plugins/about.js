const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["hiruwa","whois"], 
    react: "🖤",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*❍══════•⊰ʜɪʀᴜᴡᴀ-ᴍᴅ⊱•════❍*

*•────────────•⟢*
*👋 HELLO ${pushname}*
*•────────────•⟢*

╭─────────𝗠𝗬 𝗔𝗕𝗢𝗨𝗧───៚
┃✬╭────❥
┃✬│
┃✬│  *⛬ ᴡᴇʟᴄᴏᴍᴇ ᴛʜᴇ ʜɪʀᴜᴡᴀ-ᴍᴅ ʙᴏᴛ* 
┃✬│  
┃✬│  *⛬ ᴄʀᴇᴀᴛᴇʀ : ʜɪʀᴜᴡᴀ ᴇᴅɪᴛᴢ*  
┃✬│ 
┃✬│  *⛬ ʀᴇᴀʟ ɴᴀᴍᴇ : ʜɪʀᴜꜱʜᴀ*  
┃✬│ 
┃✬│  *⛬ ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ʜɪʀᴜᴡᴀ-ᴍᴅ*  
┃✬│
┃✬│  *⛬ ᴀɢᴇ : 18 ʏᴇᴀʀ* 
┃✬│ 
┃✬│  *⛬ ᴄɪᴛʏ : ᴋɪʀɪɴᴅɪᴡᴀʟᴀ*  
┃✬│ 
┃✬│  *⛬ ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*  
┃✬│
┃✬╰────────❥
╰───────────────────────៚

*┍──━────━──┙◆┕──━────━──┑*
              *𝚂𝙿𝙴𝙲𝙸𝙰𝙻 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁*

╭─────────𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢───៚
┃✬╭────❥
┃✬│
┃✬│  *⛬ ᴅᴇᴠᴇʟᴏᴘᴇʀ : ᴄʏʙᴇʀ ᴅᴇxᴛᴇʀ* 
┃✬│  
┃✬│  *⛬ ʙᴜɢ ꜰɪx ᴀɴᴅ ʜᴇʟᴘ : ʀᴇᴀʟ ᴅᴇxᴛᴇʀ*  
┃✬│ 
┃✬│  *⛬ ʙᴜɢ ᴛᴇꜱᴛ ᴀɴᴅ ʜᴇʟᴘ : ᴋɪɴɢ ʀᴀᴠɪ*  
┃✬│ 
┃✬╰────────❥
╰───────────────────────៚


> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴛᴇᴀᴍ 🧑‍💻
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/ey7qsm.png`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363402653537145@newsletter',
      newsletterName: '🧑‍💻⃝𝙃𝙞𝙍𝙐𝙒𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
