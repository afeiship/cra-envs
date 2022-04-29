import CraEnvs from '../src';

describe('api.basic', () => {
  test('api sets', () => {
    const res = CraEnvs.sets({
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

    expect(res).toEqual({
      local: { REACT_APP_BUILD_ENV: 'local-api.github.com/users/afeiship' },
      beta: { REACT_APP_BUILD_ENV: 'beta-api.github.com/users/afeiship' },
      production: { REACT_APP_BUILD_ENV: 'api.github.com/users/afeiship' }
    });
  });

  test('api sets has REACT_APP_ prefix should be worked', () => {
    const res = CraEnvs.sets({
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

  test('api gets without env', () => {
    const cmdrc = {
      local: { REACT_APP_BUILD_ENV: 'local-api.github.com/users/afeiship' },
      beta: { REACT_APP_BUILD_ENV: 'beta-api.github.com/users/afeiship' },
      production: { REACT_APP_BUILD_ENV: 'api.github.com/users/afeiship' }
    };

    expect(CraEnvs.gets(null, cmdrc)).toEqual({
      local: { BUILD_ENV: 'local-api.github.com/users/afeiship' },
      beta: { BUILD_ENV: 'beta-api.github.com/users/afeiship' },
      production: { BUILD_ENV: 'api.github.com/users/afeiship' }
    });
  });

  test('api gets with env', () => {
    const cmdrc = {
      local: { REACT_APP_BUILD_ENV: 'local-api.github.com/users/afeiship' },
      beta: { REACT_APP_BUILD_ENV: 'beta-api.github.com/users/afeiship' },
      production: { REACT_APP_BUILD_ENV: 'api.github.com/users/afeiship' }
    };

    expect(CraEnvs.gets('local', cmdrc)).toEqual({
      BUILD_ENV: 'local-api.github.com/users/afeiship'
    });
  });
});
