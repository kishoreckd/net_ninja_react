import GetSettings from '../../models/models.js'; // Import the file containing GetSettings class

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
