const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255752264609";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255752264609";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255752264609";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255752264609";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_22_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTMzLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGQrNlpvbVYxYkZPU0IyYnFLRUgyZ0FFenhaeHZCRjNZMmhKWWd1V1dtdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTIyNjQ2MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNDkyQTE4MjdFMDY3MkUxNDFEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjQyOTM2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQU2RfeXRpblFmeU1KVUJ1dGM3MHVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5OTdlZTMxLTVmNmEtNGI0ZS1iZjcyLTcwYjlhMmVhZjdhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxNjIsXG4gICAgICAyMTMsXG4gICAgICA5OSxcbiAgICAgIDY0LFxuICAgICAgMzUsXG4gICAgICAxNDYsXG4gICAgICA3OCxcbiAgICAgIDEwNyxcbiAgICAgIDU4LFxuICAgICAgMTY4LFxuICAgICAgMjM5LFxuICAgICAgMjQyLFxuICAgICAgMTAzLFxuICAgICAgMjgsXG4gICAgICAxLFxuICAgICAgMzQsXG4gICAgICAxNjQsXG4gICAgICAxMjIsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTY5LFxuICAgICAgMjksXG4gICAgICAyMTgsXG4gICAgICA5NCxcbiAgICAgIDY3LFxuICAgICAgNTIsXG4gICAgICAxMDUsXG4gICAgICAxMzIsXG4gICAgICAxODEsXG4gICAgICAxMjgsXG4gICAgICAxMDYsXG4gICAgICA5NSxcbiAgICAgIDIxNSxcbiAgICAgIDE4OCxcbiAgICAgIDIyMSxcbiAgICAgIDIyMCxcbiAgICAgIDI0MyxcbiAgICAgIDEyLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTFKRTE1NjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MjI2NDYwOTozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9tYXJ5IO+jv1wiLFxuICAgIFwibGlkXCI6IFwiMjcxMzYwNzY0OTk3NzI0OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t6MmhlTUdFSzZNaTdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUpWbWZ5U2MvUTROeWd5bUxuMnZqOHpRZ3NWSXB1eXJEQm55YkZaRUMyUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxY0pianJ3OWxjckhUQlBQNWIzZU0vNWtFMWRVbE5Ed2RmcVJlN0ZBVHVXcWJaOEhLVVpzc1dPTmVJVWlIR2JLamZIQ25aY0pqMUFQTnVDanFXQnlCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZNFVBMzVkOUJjLys0cmNuTW9pMXBHVFd1clgrbXppcEpiMkNHZmVadm84UXRLcXYvWWFuVE5VQ1MvNzVlK085czhIVDMvbzIvWUt0dVU4aEw5M1hBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTIyNjQ2MDk6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDI5MzYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2JyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHYnIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOdDByT1Y1dnp4c2N3SndjejRMc0F5U081VzRyZGdEeWNZZmNlVy8zY080PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MTgzMjc4NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjQyOTM2MzUwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {
  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
