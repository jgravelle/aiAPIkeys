document.addEventListener('DOMContentLoaded', function() {
  const keyValuePairs = document.getElementById('keyValuePairs');
  const addButton = document.getElementById('addPair');
  const saveButton = document.getElementById('save');

  function createPairElement(key = '', value = '') {
    const div = document.createElement('div');
    div.className = 'pair';
    div.innerHTML = `
      <input type="text" class="key" placeholder="Key" value="${key}">
      <input type="text" class="value" placeholder="Value" value="${value}">
      <button class="remove">Remove</button>
    `;
    div.querySelector('.remove').addEventListener('click', function() {
      keyValuePairs.removeChild(div);
    });
    return div;
  }

  addButton.addEventListener('click', function() {
    keyValuePairs.appendChild(createPairElement());
  });

  saveButton.addEventListener('click', function() {
    const pairs = {};
    document.querySelectorAll('.pair').forEach(pair => {
      const key = pair.querySelector('.key').value.trim();
      const value = pair.querySelector('.value').value.trim();
      if (key && value) {
        pairs[key] = value;
      }
    });
    chrome.storage.sync.set(pairs, function() {
      alert('API keys saved successfully!');
    });
  });

  // Load existing key/value pairs
  chrome.storage.sync.get(null, function(items) {
    if (Object.keys(items).length > 0) {
      for (let key in items) {
        keyValuePairs.appendChild(createPairElement(key, items[key]));
      }
    } else {
      keyValuePairs.appendChild(createPairElement());
    }
  });
});