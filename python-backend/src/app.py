from flask import Flask, request, jsonify, send_from_directory
from processors.command import process_command
import os

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    command = data.get('command', '')

    try:
        result = process_command(command)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/audio/<filename>')
def serve_audio(filename):
    return send_from_directory('outputs', filename)

if __name__ == '__main__':
    os.makedirs('src/outputs', exist_ok=True)
    app.run(host='0.0.0.0', port=5000, debug=True)