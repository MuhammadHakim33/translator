import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

const redis = new Redis({
    url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
    token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(14, "60s"),
    analytics: true,
});

export async function handleRateLimit() {
    const {success, reset, remaining} = await ratelimit.limit("global_rate_limit");

    console.log(remaining +" "+ ((reset-Date.now())/1000).toFixed(0));
    
    return {
        allowed: success, 
        cooldown: ((reset-Date.now())/1000).toFixed(0)
    };
}