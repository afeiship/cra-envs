import nx from '@jswork/next';

declare var process: any;
type EnvType = null | string;

const RC_APP = 'REACT_APP_';
const RC_SIZE = RC_APP.length;

export default class {
  static get(inPath, inTarget?) {
    const envs = inTarget || process.env;
    const [env, key] = inPath.split('.');
    return nx.get(envs, `${env}.${RC_APP}${key}`, {});
  }

  static gets(inEnv?: EnvType, inTarget?) {
    const envs = inTarget || process.env;
    nx.forIn(envs, (_: EnvType, value) => {
      nx.forIn(value, (k, v) => {
        value[k.slice(RC_SIZE)] = v;
        delete value[k];
      });
    });
    return !!inEnv ? envs[inEnv] : envs;
  }

  static sets(inCmdRc) {
    const envs = inCmdRc;
    nx.forIn(envs, (_: EnvType, value) => {
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
