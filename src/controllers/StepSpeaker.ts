import { client } from '../index';

export const volume = async (payload: StepSpeakerPayload) => {
  const cmd = payload.volumeSteps > 0 ? 'VolumeUp' : 'VolumeDown';
  const count = Math.abs(payload.volumeSteps) / 2;

  for (let i = 0; i < count; i = i + 1) {
    await client.send(cmd);
  }
};

export const mute = async () => await client.send('Mute');

type StepSpeakerPayload = {
  volumeSteps: number;
};
