from gtts import gTTS
import os

def process_command(command):
    command = command.lower()
    if command == 'hello':
        response_text = 'Xin chào! Tôi là VoiceCord.'
        audio_file = 'response.mp3'
        tts = gTTS(response_text, lang='vi')
        tts.save(f'src/outputs/{audio_file}')
        return {'text': response_text, 'audio': audio_file}
    else:
        return {'text': 'Lệnh không được nhận diện.', 'audio': None}