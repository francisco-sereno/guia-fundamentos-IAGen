const fs = require('fs');

async function fetchAndExtract(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    const matches = text.match(/<(p|h[1-6]|li)[^>]*>(.*?)<\/\1>/gi);
    if (matches) {
      const cleanText = matches.map(m => m.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 0).join('\n');
      console.log(`\n--- Content from ${url} ---\n`);
      console.log(cleanText.substring(0, 3000));
    }
  } catch (e) {
    console.error(`Error fetching ${url}:`, e.message);
  }
}

async function run() {
  await fetchAndExtract('https://cloud.google.com/learn/what-is-artificial-intelligence?hl=es-419');
  await fetchAndExtract('https://cloud.google.com/discover/what-is-prompt-engineering?hl=es-419');
  await fetchAndExtract('https://www.ibm.com/es-es/think/topics/ai-model');
  await fetchAndExtract('https://www.ibm.com/es-es/think/ai-agents');
}

run();
