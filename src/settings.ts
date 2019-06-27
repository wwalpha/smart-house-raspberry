import { change, skip } from './controllers/Channel';
import { turnon, turnoff } from './controllers/Power';
import { volume, mute } from './controllers/StepSpeaker';

export const TOPICS: TopicType = {
  'iot/power/turnon': turnon,
  'iot/power/turnoff': turnoff,
  'iot/channel/skip': skip,
  'iot/channel/change': change,
  'iot/stepspeaker/volume': volume,
  'iot/stepspeaker/mute': mute,
};

export type Function1 = () => Promise<void>;
export type Function2 = (param: any) => Promise<void>;

export type TopicType = {
  [key: string]: Function1 | Function2;
};
