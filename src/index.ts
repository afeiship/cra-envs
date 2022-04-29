import nx from '@jswork/next';

declare var process: any;
type PathType = null | string;

const RC_APP = 'REACT_APP_';
const RC_SIZE = RC_APP.length;

export default class {
  static get(inPath?: PathType, inTarget?) {
    const envs = inTarget || process.env;
    nx.forIn(envs, (k, v) => {
      if (k.includes(RC_APP)) {
        envs[k.slice(RC_SIZE)] = v;
        delete envs[k];
      }
    });
    return inPath ? nx.get(envs, inPath) : envs;
  }

  static set(inCmdRc) {
    const envs = inCmdRc;
    nx.forIn(envs, (_: string, value) => {
      nx.forIn(value, (k, v) => {
        if (!k.includes(RC_APP)) {
          value[RC_APP + k] = v;
          delete value[k];
        }
      });
    });
    return envs;
  }
}
