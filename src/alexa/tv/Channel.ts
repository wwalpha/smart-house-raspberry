import { client } from '../index';

export const skip = async (payload: ChannelSkipPayload) => {
  console.log('skip', payload);

  const cmd = payload.count > 0 ? 'ChannelUp' : 'ChannelDown';

  for (let i = 0; i < Math.abs(payload.count); i = i + 1) {
    await client.send(cmd);
  }
};

export const change = async (payload: ChannelChangePayload) => {
  console.log('change', payload);

  await client.send(`Num${payload.channel}`);
};

type ChannelChangePayload = {
  channel: string;
};
type ChannelSkipPayload = {
  count: number;
};
