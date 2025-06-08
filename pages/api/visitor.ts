// /pages/api/visitor.ts

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL!;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN!;
  const key = 'visitor_count';

  try {
    const res = await fetch(`${redisUrl}/incr/${key}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${redisToken}`,
      },
    });

    if (!res.ok) throw new Error('Failed to increment visitor count');

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, count: data.result }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Visitor counter error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Could not increment counter' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
