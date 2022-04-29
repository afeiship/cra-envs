import CraEnvs from '../src';

describe('api.basic', () => {
  test('api set', () => {
    const res = CraEnvs.set({
      local: {
        BUILD_ENV: 'local-api.github.com/users/afeiship'
      },
      beta: {
        BUILD_ENV: 'beta-api.github.com/users/afeiship'
      },
      production: {
        BUILD_ENV: 'api.github.com/users/afeiship'
      }
    });

    // production
    expect(process.env['BUILD_ENV']).toBe('api.github.com/users/afeiship');

    expect(res).toEqual({
      local: { REACT_APP_BUILD_ENV: 'local-api.github.com/users/afeiship' },
      beta: { REACT_APP_BUILD_ENV: 'beta-api.github.com/users/afeiship' },
      production: { REACT_APP_BUILD_ENV: 'api.github.com/users/afeiship' }
    });
  });

  test('api sets has REACT_APP_ prefix should be worked', () => {
    const res = CraEnvs.set({
      local: {
        REACT_APP_BUILD_ENV: 'local-api.github.com/users/afeiship'
      },
      beta: {
        REACT_APP_BUILD_ENV: 'beta-api.github.com/users/afeiship'
      },
      production: {
        REACT_APP_BUILD_ENV: 'api.github.com/users/afeiship'
      }
    });

    expect(res).toEqual({
      local: { REACT_APP_BUILD_ENV: 'local-api.github.com/users/afeiship' },
      beta: { REACT_APP_BUILD_ENV: 'beta-api.github.com/users/afeiship' },
      production: { REACT_APP_BUILD_ENV: 'api.github.com/users/afeiship' }
    });
  });

  test('api get will get without prefix envs', () => {
    var envs = {
      PORT: 3001,
      REACT_APP_BUILD_ENV: 'local-api.github.com/users/afeiship',
      NODE_ENV: 'production'
    };

    expect(CraEnvs.get(null, envs)).toEqual({
      PORT: 3001,
      NODE_ENV: 'production',
      BUILD_ENV: 'local-api.github.com/users/afeiship'
    });

    expect(CraEnvs.get('NODE_ENV', envs)).toEqual('production');
  });
});
