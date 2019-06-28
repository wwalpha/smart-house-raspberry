import * as os from 'os';

export const getIpAddress = (name: string, mode: string = 'IPv4') => {
  const interfaces = os.networkInterfaces();

  const ip = interfaces[name];

  if (!ip) {
    throw new Error(`Not exists. Lan name: ${name}`);
  }

  const ret = ip.find(item => item.family === mode);

  if (!ret) {
    throw new Error(`Not exists. Lan name: ${name}`);
  }

  return ret.address;
};
