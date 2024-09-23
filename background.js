// Initialize context menu when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "apiKeysMenu",
    title: "AI API Keys",
    contexts: ["all"]
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error creating context menu:', chrome.runtime.lastError.message);
    } else {
      console.log('Context menu created successfully');
      updateContextMenu();
    }
  });
});

// Listen for clicks on the context menu items
chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('Context menu clicked:', info.menuItemId);
  if (info.parentMenuItemId === "apiKeysMenu" || info.menuItemId !== "apiKeysMenu") {
    chrome.storage.sync.get([info.menuItemId], (result) => {
      const apiKey = result[info.menuItemId];
      if (apiKey && tab.id) {
        injectCopyAndPasteScript(tab.id, apiKey);  // Inject both copy and paste logic
      } else {
        console.error('API key not found or tab id is invalid:', info.menuItemId);
      }
    });
  }
});

// Function to inject the script that copies and pastes the API key
function injectCopyAndPasteScript(tabId, text) {
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    func: (text) => {
      // First, copy the text to the clipboard
      navigator.clipboard.writeText(text).then(() => {
        console.log('API key copied to clipboard');

        // Now attempt to paste the copied text
        navigator.clipboard.readText().then(clipboardText => {
          const activeElement = document.activeElement;
          if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
            activeElement.value = clipboardText;  // Paste into the input field
            console.log('API key pasted successfully');
          } else {
            console.log('No suitable input field to paste the API key');
          }
        }).catch(err => {
          console.error('Failed to read from clipboard or paste:', err);
        });

      }).catch(err => {
        console.error('Failed to copy API key:', err);
      });
    },
    args: [text]
  });
}

// Listen for changes in storage and update the context menu
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync") {
    updateContextMenu();
  }
});

// Function to update the context menu items
function updateContextMenu() {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "apiKeysMenu",
      title: "AI API Keys",
      contexts: ["all"]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error('Error recreating main context menu:', chrome.runtime.lastError.message);
      } else {
        chrome.storage.sync.get(null, (items) => {
          Object.keys(items).forEach(key => {
            if (items[key].trim() !== "") {
              chrome.contextMenus.create({
                id: key,
                parentId: "apiKeysMenu",
                title: key,
                contexts: ["all"]
              }, () => {
                if (chrome.runtime.lastError) {
                  console.error('Error creating submenu item:', key, chrome.runtime.lastError.message);
                }
              });
            }
          });
        });
      }
    });
  });
}
