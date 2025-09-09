import webview
import os

"""
This script creates a desktop application for the Math Platform.
It uses the pywebview library to wrap the existing web content (index.html).
To create an executable, run the following command in your terminal:

1. Install dependencies: pip install pywebview pyinstaller
2. Run PyInstaller: pyinstaller --onefile --windowed --name="MathPlatform" app.py

"""

def get_entrypoint():
    """Gets the entry point URL for the webview."""
    # We need an absolute path to the index.html file
    return os.path.abspath('index.html')

if __name__ == '__main__':
    entry_point = get_entrypoint()

    # Create a webview window
    webview.create_window(
        'منصة الرياضيات التفاعلية',  # Window title
        f'file:///{entry_point}',   # URL to load
        width=1200,
        height=800,
        resizable=True,
        min_size=(800, 600)
    )
    webview.start()
