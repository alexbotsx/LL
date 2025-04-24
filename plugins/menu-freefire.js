let handler = async (m, { isPrems, conn }) => {
	let img = 'https://i.ibb.co/GvgdxwXX/file.jpg' 
	let texto = `> 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 𝙑𝙀𝙍𝙎𝙐𝙎
	
	★ 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 ★
	 
	🚩 *𝘙𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴.*  
	🏴 *𝘙𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2.*
	
	▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 ⚔ ◂◂
	
	➺.4𝘷𝘴4 
	➺.6𝘷𝘴6 
	➺.𝟪𝘷𝘴𝟪
	➺.𝘴𝘤𝘳𝘪𝘮 
	➺.𝘪𝘯𝘵𝘦𝘳𝘯𝘢 
	➺.12𝘷𝘴12
	➺.16𝘷𝘴16 
	➺.𝘨𝘶𝘦𝘳𝘳𝘢
	`
	
	const fkontak = {
		"key": {
		"participants":"0@s.whatsapp.net",
			"remoteJid": "status@broadcast",
			"fromMe": false,
			"id": "Halo"
		},
		"message": {
			"contactMessage": {
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
			}
		},
		"participant": "0@s.whatsapp.net"
	}
	await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
	global.db.data.users[m.sender].lastcofre = new Date * 1
	}
	handler.help = ['menuff']
	handler.tags = ['freefire' ,'main'] 
	handler.command = ['menuff', 'menufreefire'] 
	export default handler