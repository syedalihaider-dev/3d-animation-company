export const getGeoInfo = async () => {
  // Fallback 1: ipapi.co
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (res.ok) {
      const data = await res.json();
      if (data && data.ip) {
        return {
          ip: data.ip,
          country: data.country_name || 'not fill by user',
          region: data.region || 'not fill by user',
          city: data.city || 'not fill by user'
        };
      }
    }
  } catch (err) {
    console.error('Error fetching from ipapi.co:', err);
  }

  // Fallback 2: ipwho.is
  try {
    const res = await fetch('https://ipwho.is/');
    if (res.ok) {
      const data = await res.json();
      if (data && data.success) {
        return {
          ip: data.ip || 'not fill by user',
          country: data.country || 'not fill by user',
          region: data.region || 'not fill by user',
          city: data.city || 'not fill by user'
        };
      }
    }
  } catch (err) {
    console.error('Error fetching from ipwho.is:', err);
  }

  // Fallback 3: freeipapi.com
  try {
    const res = await fetch('https://freeipapi.com/api/json');
    if (res.ok) {
      const data = await res.json();
      if (data && data.ipAddress) {
        return {
          ip: data.ipAddress,
          country: data.countryName || 'not fill by user',
          region: data.regionName || 'not fill by user',
          city: data.cityName || 'not fill by user'
        };
      }
    }
  } catch (err) {
    console.error('Error fetching from freeipapi.com:', err);
  }

  return {
    ip: 'not fill by user',
    country: 'not fill by user',
    region: 'not fill by user',
    city: 'not fill by user'
  };
};

export const submitLead = async (formData) => {
  try {
    const geo = await getGeoInfo();
    const payload = {
      ...formData,
      ip2loc_ip: geo.ip,
      ip2loc_country: geo.country,
      ip2loc_region: geo.region,
      ip2loc_city: geo.city,
      pageurl: typeof window !== 'undefined' ? window.location.href : 'not fill by user'
    };

    const response = await fetch('/api/send-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Lead submitted successfully!');
    } else {
      console.error('Lead submission failed');
    }
  } catch (error) {
    console.error('Error submitting lead:', error);
  } finally {
    if (typeof window !== 'undefined') {
      window.location.href = '/thank-you';
    }
  }
};
