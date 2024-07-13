const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_12_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXVXBtQ0V0QzlkeDVpMXZoK0o4dTBXSEJnWnoyc0dZNUJ6Q1VnMzhTeWZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQNGRYS1p2RFJBRzVPd2NqNnRRcklnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4ZmI2YjE3LTQyNWMtNGQwYy05YjAxLTYzMzU1ZjA1ODY3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDE1MCxcbiAgICAgIDIyOSxcbiAgICAgIDE0NyxcbiAgICAgIDIxNyxcbiAgICAgIDc4LFxuICAgICAgNjcsXG4gICAgICAxNjYsXG4gICAgICA2NCxcbiAgICAgIDE1NyxcbiAgICAgIDM2LFxuICAgICAgMTI5LFxuICAgICAgODcsXG4gICAgICAxMDQsXG4gICAgICAyNDIsXG4gICAgICAyMjYsXG4gICAgICAxMzIsXG4gICAgICA2MixcbiAgICAgIDQ0LFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDE0LFxuICAgICAgMjQxLFxuICAgICAgMTU1LFxuICAgICAgNjUsXG4gICAgICAyNDYsXG4gICAgICAxMjIsXG4gICAgICAzNCxcbiAgICAgIDIwNyxcbiAgICAgIDY0LFxuICAgICAgODUsXG4gICAgICAzMixcbiAgICAgIDM1LFxuICAgICAgODMsXG4gICAgICAxOTAsXG4gICAgICA5NSxcbiAgICAgIDE4MCxcbiAgICAgIDEwMyxcbiAgICAgIDIwOCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMTDc2NEZSQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjMwMzg3ODc6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmP8J2ZnfCdmZbwnZmn8J2ZqiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCdmajwnZmj8J2ZmfCdmaVcIixcbiAgICBcImxpZFwiOiBcIjE0NjU5NjIyNjQxMjU1Njo0MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTEFucGtFRUlyOXg3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktsc0l6RjNUK3liVjJBQWtOQnpIYnpCT3hKN0Q4eUdKbXF2d1VsNUNWbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic0l2TVFkY3IydmVZVURDZ0dGM00xY0M3a3F1NW1lQTVJYkt1MjBQMkg3VnFmLzhuR2xMbWFsOGhQQkkrbmlIYnVkMWdHeUYycTRsaEtiTlpwMnFpQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGJONTRzaGZOU0d1YWk5S2N0NmdjclFUN3c3RGJNVDdaV0xKZjVJWEdPQXJ6bkNBMkFLTHZLeHBhc2twUGplNDJHeERDOVQ0UjV5d3N2b1dNMlVXQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjMwMzg3ODc6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg0MzkxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF1YlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXViLmpzb24iOiAie1wia2V5RGF0YVwiOlwiejZpeWM4NzM5T0JaTU5qSnZpaVRWY2tDS3FDQmFOS3VtaHhJV1lWNGFJMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI2NjcwMzgyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
