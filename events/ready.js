const Discord = require("discord.js");
const config = require('../config.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `Arena Development`}, status: 'idle' })
};

// TYPE KISIMLARI
// WATCHING - İzliyor
// PLAYING - Oynuyor
// LISTENING - Dinliyor

// STATUS KISIMLARI
// online - Çevrim İçi
// idle - Boşta
// dnd - Rahatsız Etmeyin

// name: - Kısmına İstediğinizi Yazabilirsiniz










//https://discord.gg/kRkHsq9BbT <= [Bunu Silmeyin]