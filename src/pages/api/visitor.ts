import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://sharing-rooster-20286.upstash.io',
  token: 'AU8-AAIjcDE2ZWFmMTIxZDNjN2M0OGRiOTIzOGUzOGUxMmNmNTc3YXAxMA'
})

export default async function handler(req: Request) {
  try {
    const count = await redis.incr('visitor_count')
    return new Response(
      JSON.stringify({ count }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store'
        }
      }
    )
  } catch (error) {
    console.error('Redis error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to increment count' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
}