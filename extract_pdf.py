import PyPDF2
import sys

# Set encoding for output
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = "year1.pdf"

try:
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        # Extract text from the first 20 pages
        text = ""
        for i in range(min(20, len(reader.pages))):
            text += f"--- Page {i+1} ---\n"
            page_text = reader.pages[i].extract_text()
            if page_text:
                text += page_text + "\n"
        
        print(text)
except Exception as e:
    print(f"Error: {e}")
