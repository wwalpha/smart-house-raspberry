import { client } from '../index';

export const turnon = async () => {
  // 起動
  await client.send('WakeUp');
  // チャンネル１を設定する
  await client.send('Num1');
};

export const turnoff = async () => client.send('PowerOff');
