import connect from './connect';
import embed from './configure';

const nAppPromise = async () => {
  const app = await connect({
    url: 'sense-demo.qlik.com',
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  });
  return embed(app);
}

export default nAppPromise;