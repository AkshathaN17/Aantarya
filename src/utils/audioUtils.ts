import axios from 'axios';

export class AudioPlayer {
  private audio: HTMLAudioElement | null = null;

  async playAudio(text: string) {
    try {
      if (this.audio) {
        this.audio.pause();
        this.audio = null;
      }

      // Using a CORS-friendly TTS API
      const response = await axios.get(`https://api.streamelements.com/kappa/v2/speech`, {
        params: {
          voice: 'hi-IN-Wavenet-C', // Using Hindi voice as it's closer to Kannada pronunciation
          text: text,
        },
        responseType: 'blob'
      });

      const audioBlob = new Blob([response.data], { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(audioBlob);
      
      this.audio = new Audio(audioUrl);
      await this.audio.play();

      // Cleanup the blob URL after playback
      this.audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
      };
    } catch (error) {
      console.error('Error playing audio:', error);
      // Fallback to browser's native speech synthesis if available
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN'; // Using Hindi as fallback
        window.speechSynthesis.speak(utterance);
      } else {
        throw error;
      }
    }
  }

  cleanup() {
    if (this.audio) {
      this.audio.pause();
      if (this.audio.src) {
        URL.revokeObjectURL(this.audio.src);
      }
      this.audio = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}