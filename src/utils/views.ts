import { Redis } from '@upstash/redis';

// 포스트 조회수 저장소(Upstash Redis)를 감싸는 헬퍼.
// 환경변수(UPSTASH_REDIS_REST_URL / _TOKEN)가 없으면 null/{} 을 돌려주어
// 빌드·개발이 Redis 없이도 정상 동작하도록 graceful degrade 한다.

const VIEWS_KEY = 'pageviews';

let client: Redis | null = null;
let initialized = false;

const getRedis = (): Redis | null => {
  if (initialized) return client;

  initialized = true;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    client = new Redis({ url, token });
  }

  return client;
};

export const isViewsEnabled = () => getRedis() !== null;

export const getAllViews = async (): Promise<Record<string, number>> => {
  const redis = getRedis();

  if (!redis) return {};

  try {
    const data =
      await redis.hgetall<Record<string, number | string>>(VIEWS_KEY);

    if (!data) return {};

    return Object.fromEntries(
      Object.entries(data).map(([slug, count]) => [slug, Number(count)]),
    );
  } catch {
    return {};
  }
};

export const getView = async (slug: string): Promise<number | null> => {
  const redis = getRedis();

  if (!redis) return null;

  try {
    const count = await redis.hget<number | string>(VIEWS_KEY, slug);

    return count === null || count === undefined ? 0 : Number(count);
  } catch {
    return null;
  }
};

export const incrementView = async (slug: string): Promise<number | null> => {
  const redis = getRedis();

  if (!redis) return null;

  try {
    return await redis.hincrby(VIEWS_KEY, slug, 1);
  } catch {
    return null;
  }
};
