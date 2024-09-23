
# AI API Keys Extension

**AI API Keys** is a powerful Chrome extension designed to simplify managing and copying API keys for various AI services. With just a few clicks, users can store their API keys, easily copy them to the clipboard, and even paste them directly into input fields on web pages. This extension streamlines API key management and improves productivity for developers, AI enthusiasts, and anyone working with multiple APIs.

![image](https://github.com/user-attachments/assets/a187ac08-002d-40b7-b89f-dc4eb31a6ebe)


## Table of Contents
- [Features](#features)
- [Installation](#installation)
  - [Local Development and Installation](#local-development-and-installation)
  - [Chrome Web Store Installation](#chrome-web-store-installation)
- [Usage](#usage)
  - [Adding API Keys](#adding-api-keys)
  - [Copying API Keys](#copying-api-keys)
  - [Pasting API Keys](#pasting-api-keys)
- [Configuration](#configuration)
  - [Permissions](#permissions)
  - [Storage](#storage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Store API Keys**: Save multiple API keys securely within your browser.
- **Context Menu**: Quickly access saved API keys via a right-click context menu.
- **Clipboard Integration**: Copy the API keys directly to your clipboard.
- **Automatic Pasting**: Automatically paste API keys into active input fields.
- **Error Handling**: Safely handles permission errors and clipboard restrictions.
- **Sync Across Devices**: Uses Chrome's storage API to sync API keys across devices.
  
![image](https://github.com/user-attachments/assets/a976a070-5ec4-4e5f-bc77-dcd2fa4f9d5d)


## Installation

### Local Development and Installation

To install the extension locally and begin development, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai-api-keys-extension.git
   cd ai-api-keys-extension
   ```

2. **Navigate to the Chrome Extensions page**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer Mode** (toggle in the top-right corner)

3. **Load the unpacked extension**:
   - Click on **Load unpacked** and select the folder where you cloned this repository.

4. **Verify installation**:  
   - You should now see the extension icon in your Chrome toolbar.

![image](https://github.com/user-attachments/assets/f7412781-278d-4fa4-a0aa-9bb451553f86)


## Usage

### Adding API Keys

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Click **Add New Key** to add an API key.
3. Enter the **API key name** and the **value** in the provided fields.
4. Click **Save** to store the key.

Your API keys are now saved securely in Chrome's local storage.

![image](https://github.com/user-attachments/assets/88cb2c47-34ef-465c-92af-537305dcb7a3)

### Copying API Keys

To copy an API key:
1. Right-click anywhere on the webpage.
2. In the context menu, hover over **AI API Keys** and select the API key you want to copy.
3. The key will be copied to your clipboard automatically.

### Pasting API Keys

The extension attempts to paste the copied API key directly into an active input field:
- If an input field (such as a text box or a textarea) is focused, the extension will paste the copied key automatically.
- If no suitable input field is found, the key remains in the clipboard for manual pasting.


## Configuration

### Permissions

The extension requests the following permissions:

- **Context Menus**: Allows the extension to create context menu items for copying API keys.
- **Storage**: Enables storage of API keys in Chrome's sync storage, allowing access across devices.
- **Active Tab**: Allows the extension to interact with the currently active tab, enabling clipboard and input functionality.
  
You can view and modify these permissions via the `manifest.json` file.

### Storage

The extension uses Chrome's `sync` storage to save your API keys. This means that your API keys will be synced across all devices logged into the same Chrome account, ensuring easy access wherever you are.

## Troubleshooting

### API Key Not Pasting Automatically

If the key doesn't paste automatically:
- Ensure you have an active input field selected.
- Check if your browser settings allow clipboard access. You can manually paste using `Ctrl + V` (or `Cmd + V` on Mac).

### Errors Copying to Clipboard

The extension relies on browser clipboard permissions. If you receive errors:
- Make sure you’ve granted the necessary clipboard permissions in your browser.
- Verify that no browser security policies are blocking clipboard access.

For more detailed error messages, open the **Developer Tools** in Chrome (`Ctrl + Shift + I` or `Cmd + Option + I`) and check the **Console**.

## Contributing

We welcome contributions to improve AI API Keys! If you have any ideas or bug reports, feel free to open an issue or submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch: 
   ```bash
   git checkout -b feature-branch-name
   ```
3. Make your changes.
4. Push the changes:
   ```bash
   git push origin feature-branch-name
   ```
5. Submit a pull request.

Please follow our [Contribution Guidelines](#) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
Please mention J. Gravelle in your docs and/or code if you use this.  He's kinda full of himself...

