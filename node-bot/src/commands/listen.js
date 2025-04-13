const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const { sendCommand } = require('../utils/api');

async function listen(message) {
  if (!message.member.voice.channel) {
    return message.channel.send('Bạn cần tham gia kênh thoại trước!');
  }

  // Tham gia kênh thoại
  const connection = joinVoiceChannel({
    channelId: message.member.voice.channel.id,
    guildId: message.guild.id,
    adapterCreator: message.guild.voiceAdapterCreator,
  });

  try {
    // Gửi lệnh giả lập đến Python
    const response = await sendCommand('hello');

    // Gửi phản hồi văn bản
    await message.channel.send(`Phản hồi: ${response.text}`);

    // Phát âm thanh nếu có
    if (response.audio) {
      const player = createAudioPlayer();
      const resource = createAudioResource(`http://localhost:5000/audio/${response.audio}`);
      player.play(resource);
      connection.subscribe(player);
    }
  } catch (error) {
    await message.channel.send('Lỗi khi xử lý lệnh!');
    console.error(error);
  }
}

module.exports = { name: 'listen', execute: listen };