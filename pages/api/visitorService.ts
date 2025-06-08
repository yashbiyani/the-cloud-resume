// /services/visitorService.ts

export interface VisitorResponse {
  success: boolean;
  count?: number;
  message?: string;
}

export const getVisitorCount = async (): Promise<VisitorResponse> => {
  try {
    const res = await fetch('/api/visitor', {
      method: 'GET', // or 'POST' if you want to increment count on visit
    });

    if (!res.ok) {
      throw new Error(`API responded with ${res.status}`);
    }

    const data = await res.json();

    return {
      success: true,
      count: data.count,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
