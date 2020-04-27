'use strict';

process.chdir(__dirname);


const bot = require('./bot');
const express = require('express');
const app = express();

bot.catch((err) => {
	console.log('Error: ', err)
})

bot.start( async (ctx) => {
	if (!ctx.chat.type.endsWith('private')) return null;
	ctx.reply('Merhaba')
});

bot.hears('buton', async (ctx) => {
	if (!ctx.chat.type.endsWith('private')) return null;
		try {
			await ctx.telegram.sendMessage(ctx.chat.id, "Test", {
				reply_markup: {
					inline_keyboard: [
						[
							{
								text: 'Bot sohbet',
								url: 'http://t.me/botsohbet'
							}
						],
						[
							{
								text: '1',
								url: 'http://t.me/botsohbet'
							}, {
							    text: '2',
							    url: 'http://t.me/botsohbet'
						}
						],
						[
							{
								text: '3',
								url: 'http://t.me/botsohbet'
							}, {
							    text: '4',
							    url: 'http://t.me/botsohbet'
						}
						]]
				}
			});
		} catch (err) {
			console.log(err)
		}
});



if (process.env.NODE_ENV === 'development') {
	bot.polling.offset = -1;
} else {

}

app.get('/', (req, res) => {
  res.send({ ok: true, description: 'Hello, world!', status: 200 })
});

app.listen(3000, () => {
  console.log('Botunuz 3000 bağlantı noktasını dinliyor.')
});

bot.launch()
