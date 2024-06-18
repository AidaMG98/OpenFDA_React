// Limite de valores que se van a poder ver
const LIMIT = 10;

// URL para la API
const API_DRUG_EVENT_URL = 'https://api.fda.gov/drug/event.json?limit='+LIMIT;
const API_DRUG_NDC_URL = 'https://api.fda.gov/drug/ndc.json?limit='+LIMIT;
const API_DRUG_LABEL_URL = 'https://api.fda.gov/drug/LABEL.json?limit='+LIMIT;
const API_DRUG_DRUGSFDA_URL = 'https://api.fda.gov/drug/drugsfda.json?limit='+LIMIT;
const API_DRUG_ENFORCEMENT_URL = 'https://api.fda.gov/drug/enforcement.json?limit='+LIMIT;

export const getDataDrugs = async () => {
  try {
    const response = await fetch(`${API_DRUG_DRUGSFDA_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return (data.results);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

export const getDataDrugsNDC = async () => {
  try {
    const response = await fetch(`${API_DRUG_NDC_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return (data.results);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};


export const getDataDrugsEvent = async () => {
  try {
    const response = await fetch(`${API_DRUG_EVENT_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return (data.results);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};


export const getDataDrugsLabel = async () => {
  try {
    const response = await fetch(`${API_DRUG_LABEL_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return (data.results);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

export const getDataDrugsEnforcement = async () => {
  try {
    const response = await fetch(`${API_DRUG_ENFORCEMENT_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return (data.results);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
