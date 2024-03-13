export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

import GetSettings from './getsettings';
import MyCommunity from './Community';

async function getSettings(domain) {
  try {
    const response = await fetch('https://api.zircly.com/api/get-settings', {
      method: 'GET',
      headers: {
        'Origin': `https://${domain}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch settings');
    }

    const json = await response.json();
    if (json.success) {
      return GetSettings.fromJson(json.data);
    } else {
      throw new Error('Failed to fetch settings');
    }
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
}



async function findMyCommunity(email) {
  try {
    const response = await fetch('https://api.zircly.com/api/find-host', {
      method: 'POST',
      headers: {
        'Origin': 'https://login.zircly.com',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email: email }),

    });

    if (!response.ok) {
      throw new Error('Failed to fetch community');
    }

    const json = await response.json();
    if (json.success) {
      return MyCommunity.fromJson(json.data);
    } else {
      throw new Error('Failed to fetch community');
    }
  } catch (error) {
    console.error('Error fetching community:', error);
    return null;
  }
}

export { getSettings };
export { findMyCommunity };
