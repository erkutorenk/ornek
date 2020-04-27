'use strict';

require('dotenv').config();
const Telegraf = require('telegraf');


const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN, {
  telegram: {
    options: {
      webhookReply: false,
    },
  },
});

module.exports = bot;


