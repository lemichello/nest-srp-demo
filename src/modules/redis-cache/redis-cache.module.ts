import { CacheModule, Module } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: +(process.env.REDIS_PORT as string),
      ttl: 0,
    }),
  ],
  exports: [CacheModule],
})
export class RedisCacheModule {}
